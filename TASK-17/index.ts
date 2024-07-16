let guestList:string[]=["ayaz" ,"noor" ,"haider"];

console.log("unfortunatly! the new dinner table wont arvive so we can invite only 2 guest");

guestList.unshift("hassan","ali");

console.log("updated lst of guest:",guestList);

while (guestList.length > 2) {
    let rimoveguest:string | undefined = guestList.pop()
    if (rimoveguest !== undefined){
        console.log(`sorry ${guestList} we cant invite you`);
        
    }
}

guestList.forEach(guest => {
    console.log(`dear ${guest} you both are invited to the dinner`);
    
})

guestList.splice(0,guestList.length);
console.log("Updated list of guest:",guestList);
