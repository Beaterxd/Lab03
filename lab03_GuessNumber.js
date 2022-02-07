let ran = Math.floor(Math.random() * 101);;
let max = 100;
let min = 1;
var count = 0;
let number = Number(prompt('Guess the number between 1 and 100 inclusive or input other numbers to see the secret number.'));
while(number != ran){
    if(number > max || number < min){
        alert('The secret number is '+ran);
        count = 1;
        break;
    }
    if(number < ran){
        min = number;
        number = prompt('Guess the number between '+min+ ' and '+max+ ' inclusive or input other numbers to see the secret number.');
    }else if(number > ran){
        max = number;
        number = prompt('Guess the number between '+min+ ' and '+max+ ' inclusive or input other numbers to see the secret number.');
    }
}if(count == 0){
    alert('Matched! You win.\n The secret number is '+ran);
}