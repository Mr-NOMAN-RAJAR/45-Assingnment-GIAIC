"use strict";
// Assaingment no:3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Noman";
console.log("Lowercase:", personName.toLowerCase());
console.log("Upercase:", personName.toUpperCase());
console.log("Taitlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));


// let nomi: string= "nomi"
// console.log(nomi.toUpperCase());
// console.log(nomi.toLowerCase());
