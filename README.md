[![Build Status](https://travis-ci.org/migiside/skeletonify.svg?branch=master)](https://travis-ci.org/migiside/skeletonify)

# Skeletonify

Skeletonify is utility library for DOM. it remove all content in DOM. useful for to make test file of scraping.

# Install
```npm
npm install skeletonify
```

# Example
```typescript
import {Skeletonify} from "Skeletonify";
import * as fs from "fs";

const rawHtml = fs.readFileSync("PATH_TO_FILE", null).toString();
const skeletonify = new Skeletonify();

console.log(skeletonify.skeletionify(rawHtml));
```
