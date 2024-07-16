"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["ayaz", "noor", "haider"];
console.log("Good news! we found a bigger table.");
guestList.unshift("Arbab");
guestList.splice(Math.floor(guestList.length / 2), 0, "hassnain");
guestList.push("ayan");
guestList.forEach(guest => {
    console.log(`Dear ${guest} you are corrdially invited to dinner.`);
});
