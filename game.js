var guess;
var answer;
var message;
//This array stores the name of the weather condition and a clipart image for each.
var possibleWeather =
  [["rainy","http://images.clipartpanda.com/rain-clipart-RcGyE4Epi.png"],
  ["sunny","http://images.clipartpanda.com/weather-clip-art-weather-sunny-clip-art.jpg"],
  ["snowy","http://www.clipartpal.com/_thumbs/pd/weather/snow_from_glossy_cloud.png"],
  ["hail","http://image.shutterstock.com/display_pic_with_logo/94868/94868,1185947564,4/stock-photo-hail-cloud-4270675.jpg"],
  ["cloudy","http://cdn.1001freedownloads.com/vector/thumb/122296/weather-overcast.png"],
  ["foggy","http://cliparts.co/cliparts/dT4/oAo/dT4oAod7c.jpg"],
];

//Randomly select a weather condition from the array.
var weatherIndex = Math.floor(Math.random() * possibleWeather.length);
answer = possibleWeather[weatherIndex][0];
console.log("answer: " + answer);

guess = prompt("What is the weather going to be like tomorrow?").toLowerCase();

//A not-so-elegant way of matching various user inputs that match one of the known options, but not exactly
switch(guess) {
  case "rain":
    guess = "rainy";
    break;
  case "sun":
    guess = "sunny";
    break;
  case "snow":
    guess = "snowy";
    break;
}

console.log("user guess: " + guess);

//Evaluate if the user's guess is the same or different from the computer's answer
if(guess === answer) {
  message = "I agree! The weather will be " + guess + " tomorrow.";
} else {
  message = "I disagree. I think the weather will be " + answer + " tomorrow.";
}

alert(message);

//Create the node for the image of the user's guess
var userImage = document.createElement("IMG");
var userImageURL;
for(i = 0; i < possibleWeather.length; i++) {
  if(possibleWeather[i][0] === guess) {
    userImageURL = possibleWeather[i][1];
    var guess_text = document.getElementById("user_guess_header");
    guess_text.textContent = "You guessed " + guess + ".";
    break;
  } else {
    var wrong_guess = document.getElementById("user_guess_header");
    wrong_guess.textContent = "You guessed " + guess + " but I don't have a picture of that.";
    userImageURL = "http://media.catmoji.com/post/v3af/awww-3-sad-face.jpg";
  }
}
userImage.setAttribute("src",userImageURL);
document.getElementById("user_guess").appendChild(userImage);

//Create the node for the image of the computer's guess
var answerImage = document.createElement("IMG");
var computer_guess = document.getElementById("computer_guess");
    computer_guess.textContent = "The computer guessed " + answer + ".";
var answerURL = possibleWeather[weatherIndex][1];
answerImage.setAttribute("src",answerURL);
document.getElementById("answer").appendChild(answerImage);
