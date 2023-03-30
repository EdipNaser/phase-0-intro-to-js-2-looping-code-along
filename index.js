// Code your solutions in this file
const names = ["Charlie", "Samip", "Ali"]
const msgs = []

function writeCards(names) {
    for (let index = 0; index < names.length; index++) {
        const msg = `Thank you, ${names[index]}, for the wonderful surprise gift!`
        msgs.push(msg)
    }
    return msgs
}

let i = 0
function countDown(number) {
    while(i<=number) {
        console.log(number)
        number --
    }
}