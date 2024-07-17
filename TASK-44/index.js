function make_sandwich(items) {
    console.log("\nMaking Your Sandwich with:");
    items.forEach(element => console.log("- " + element));
    console.log("Enjoy your sandwich!\n");
}
make_sandwich(["Ham", "Cheese", "Lettuce"]);
make_sandwich(["Turkey", "Cheese"]);
make_sandwich(["Peanut Butter", "Lettuce"]);
export {};
