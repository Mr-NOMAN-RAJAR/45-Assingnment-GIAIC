"use strict";
// assignment no :7
Object.defineProperty(exports, "__esModule", { value: true });
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let whitespace = "Albert \tEinstein \n Albert Einstein";
console.log("whitespace :", whitespace);
let stripedWithName = whitespace.trim();
console.log("striped Name:", stripedWithName);
