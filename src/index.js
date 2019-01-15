import './styles.css';
import { getRandomInt, ready } from './utils';

let secretNumber;

function doIt() {
    const squares = document.querySelectorAll('.square');
    let squareNumber = 1;
    squares.forEach(function (square) {
        square.addEventListener('click', handleClick);//adds the  onClick event handler to each square
        square.dataset.number = squareNumber.toString();
        squareNumber++;
    });

    //gets a random number from funtion in utils.js
    secretNumber = getRandomInt(1,6);
    console.log('secret is', secretNumber);
}

function handleClick(evt){
    if(parseInt(this.dataset.number) === secretNumber) {
        console.log('You Win!');
    }
    
}
ready(doIt);