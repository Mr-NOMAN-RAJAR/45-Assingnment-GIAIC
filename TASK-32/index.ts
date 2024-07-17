let current_user = ["arbab", "shahjhan", "ali", "warris", "AbdulLah"];
let new_user = ["Aamir", "raja", "riaz", "raju", "warrise"];
new_user.forEach(newUsername => {
    let lowercase = newUsername.toLowerCase();
    if (current_user.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`The username ${newUsername} is not available. Please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
 