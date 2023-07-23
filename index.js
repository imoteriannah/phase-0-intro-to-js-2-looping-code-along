// Code your solutions in this file
function writeCards(array, eventName){
const thankYouMessages = [];
    for(let i =0; i < array.length; i++){

        thankYouMessages.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return thankYouMessages;
}

function countDown(number){
    while(number >= 0){

        console.log(number);
        --number
    }

}