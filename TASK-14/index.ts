// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guests:string[]=["riaz", "ahemad", "ali"]

let unableToAttend = guests.splice(2,1)[0]
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest

guests.push("noman")

// New invitations

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});