import {JSDOM} from "jsdom";
import {html_beautify} from "js-beautify";
import {SkeletonifyOption} from "./SkeletonifyOption";

export class Skeletonify {

    constructor(public option?: SkeletonifyOption) {
        if (option) {
            option = {attributeOption: {exclude: []}};
        }
    }

    skeletionify(html: string) {
        let src = new JSDOM(html);
        let dest = new JSDOM(`<!doctype html>`);

        if (src.window.document.head && dest.window.document.head) {
            this.skeletonize(src.window.document.head, dest.window.document.head);
        }
        this.skeletonize(src.window.document.body, dest.window.document.body);

        return html_beautify(dest.serialize(), {eol: "\r\n"});
    }

    private skeletonize(src: Element, dst: Element) {
        for (let i = 0; i < src.children.length; i++) {
            if (dst.ownerDocument) {
                const srcelem = src.children[i];
                const elem = dst.ownerDocument.createElement(srcelem.tagName);

                this.appendAttribute(elem, srcelem.attributes);
                dst.appendChild(elem);
                this.skeletonize(srcelem, elem);
            }
        }
    }

    private appendAttribute(elem: HTMLElement, nodemap: NamedNodeMap) {
        for (let i = 0; i < nodemap.length; i++) {
            const srcAttr = nodemap.item(i);
            if (this.option && srcAttr && this.option.attributeOption.exclude.indexOf(srcAttr.name) !== -1) {
                if (elem.ownerDocument) {
                    const dstAttr = elem.ownerDocument.createAttribute(srcAttr.name);

                    dstAttr.value = srcAttr.value;
                    elem.attributes.setNamedItem(dstAttr);
                }
            }
        }
    }
}
