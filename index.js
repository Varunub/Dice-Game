var RandomNumber1=Math.ceil(Math.random()*6);
var randomImages1="images/dice"+RandomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImages1);

var RandomNumber2=Math.ceil(Math.random()*6);
var randomImages2="images/dice"+RandomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImages2);

if(RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins🚩"
}
else if(RandomNumber1<RandomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩"
}
else{
    document.querySelector("h1").innerHTML="🚩 Draws 🚩"
}