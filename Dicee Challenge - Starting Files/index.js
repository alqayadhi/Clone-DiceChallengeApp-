var randomNumber1 = Math.floor(Math.random() * 6); // 1-6
var randomNumber2 = Math.floor(Math.random() * 6);

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png

var imgArray = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png'];

var changeImages1 = document.querySelector('.img1').setAttribute('src', `images/${imgArray[randomNumber1]}`);
var changeImages2 = document.querySelector('.img2').setAttribute('src', `images/${imgArray[randomNumber2]}`);

// if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = ':) Player 1 wins!';
}
else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = 'Play 2 wins! :)';
}
else{
    document.querySelector('h1').innerHTML = 'Draw!';
}

// here are another solutions
/*
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // if there is no array 

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomImageSource2);

*/