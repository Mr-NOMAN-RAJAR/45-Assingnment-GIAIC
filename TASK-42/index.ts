let magicians: string[] = ["Harry Potter", "Derren Brown", "Dynamo", "Shin Lim"];

function make_great(magicianArry: string[]): void {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = "The Great " + magicianArry[i];
    }
}

function show_magician(magicians: string[]): void {
    magicians.forEach(element => {
        console.log(element);
    });
}

make_great(magicians);
show_magician(magicians);
