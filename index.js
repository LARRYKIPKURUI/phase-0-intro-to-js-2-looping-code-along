// Code your solutions in this file

function writeCards(names, event) {
    let messages = []; 

    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return messages; 
}
const namesArray = ["Ali", "Samip", "Charlie"];
const eventName = "birthday";
console.log(writeCards(namesArray, eventName));


function countDown (countNum) {
    while (countNum >= 0){
        console.log(countNum);
        countNum--;
    }
}

countDown(10);































