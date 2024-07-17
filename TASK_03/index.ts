// Assaingment no:3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Noman"

console.log("Lowercase:", personName.toLowerCase())
console.log("Upercase:", personName.toUpperCase())
console.log("Taitlecase:", personName.replace(/\b\w/g , c => c.toUpperCase()))


                