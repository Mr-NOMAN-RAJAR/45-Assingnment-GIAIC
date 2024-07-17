let magicians: string[] = ["Harry Potter", "Derren Brown", "Dynamo", "Shin Lim"];

function copy_arry(arr: string[]): string[] {
    return [...arr];
}

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

const copyMagiciansArry = copy_arry(magicians);
make_great(copyMagiciansArry);

console.log("\n\nThis is my original Array");
show_magician(magicians);

console.log("\n\nThis is my modified copy of the Array");
show_magician(copyMagiciansArry);
