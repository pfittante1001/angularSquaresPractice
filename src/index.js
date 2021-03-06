import './styles.css';
import { getRandomInt, ready } from './utils';

let secretNumber,
     squares;

function doIt() {
     squares = document.querySelectorAll('.square');
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
        this.classList.add('winner');
        const currentSquare = this;
        squares.forEach(function (square) {
            square.removeEventListener('click', handleClick);

            if(square !== currentSquare){
                square.classList.add('loser');
            }
    
})
        
        
    }else {
        this.classList.add('loser');
    }
    
}
ready(doIt);