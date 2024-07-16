
let car = "subaru";
//True
//Test1
console.log("Is car == 'subaru'? I predict True :");
console.log(car === "subaru");
//Test2
console.log("Is car != 'toyota'? I predict True :");
console.log(car !== "toyota");
//Test3
console.log("Is the length of car > 4? I predict True.");
console.log(car.length > 4);
//Test4
console.log("Is the length of car <= 6? I predict True.");
console.log(car.length <= 6);
//Test5
console.log("Does car start with 's'? I predict True.");
console.log(car.startsWith('s'));
//False 
//Test1
console.log("Is car == 'honda'? I predict False :");
console.log(car === "honda");
//Test2
console.log("Is car in uppercase? I predict False.");
console.log(car.toUpperCase() === car);
//Test3
console.log("Is car === 'Subaru'? I predict False. :");
console.log(car === "Subaru");
//Test4
console.log("Is car == 'Audi'? I predict False :");
console.log(car === "Audi");
//Test5
console.log("Is the length of car === 7 ? I predict False.");
console.log(car.length === 7);
