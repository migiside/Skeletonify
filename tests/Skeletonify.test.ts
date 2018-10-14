import {Skeletonify} from "../src/Skeletonify";
import * as fs from "fs";

describe("skeletonify", () => {

    it("remove all attributes and content", () => {
        const rawHtml = fs.readFileSync("./tests/resources/remove-all-attributes-and-content.html", null).toString();
        const skeletonify = new Skeletonify();

        expect(skeletonify.skeletionify(rawHtml))
            .toBe(fs.readFileSync("./tests/resources/remove-all-attributes-and-content-expect.html", null).toString())
    });


    it("exclude specific attributes", () => {
        const rawHtml = fs.readFileSync("./tests/resources/exclude-specific-attributes.html", null).toString();
        const skeletonify = new Skeletonify({attributeOption: {exclude: ['class']}});

        expect(skeletonify.skeletionify(rawHtml))
            .toBe(fs.readFileSync("./tests/resources/exclude-specific-attributes-expect.html", null).toString())

    });

});
