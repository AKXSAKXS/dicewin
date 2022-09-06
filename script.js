var randomnumber1 = Math.floor(Math.random()*6 + 1);
var randomnumber2 = Math.floor(Math.random()*6 + 1);
document.querySelector("img").setAttribute( "src" , "images/dice"+ randomnumber1 + ".png" );
document.querySelector(".img2").setAttribute( "src" , "images/dice"+ randomnumber2 + ".png" );
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "&#128681; Player 1  Wins";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2  Wins &#128681;";
}
else{
    document.querySelector("h1").innerHTML = "DRAW!!!";
}
