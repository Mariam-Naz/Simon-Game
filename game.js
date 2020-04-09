
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"];
var gamePattern= [];
var level=0;
var start=true;
var count=0;
var countClick=0

$('body').on('keydown',function(){
    if(start==true)
        nextSequence();
    start=false;
});

$('.btn').on('click', function(){
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    console.log(userChosenColour);
    animatePress(userChosenColour);
    countClick++
    checkAnswer(level);
});  

function nextSequence(){
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    $('#'+ randomChosenColour).fadeOut(100).fadeIn(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $('h1').text('Level ' + level);

}
var i=0;
function checkAnswer(currentLevel){
    while(i<userClickedPattern.length){
        if(gamePattern[i]==userClickedPattern[i]){
            count++; 
        }
        else if(gamePattern[i]!=userClickedPattern[i]){
            $('h1').text('you lost');
        }
        i++;
    }
    console.log(count);
console.log(currentLevel);
if(count==currentLevel){
    userClickedPattern=[];
    countClick=0;
    count=0;
    i=0;
    nextSequence();
    
}

}

function playSound(name){
    var sound= new Audio("./sounds/"+name+".mp3");
    sound.play();
}

function animatePress(currentColour){
   $('#'+currentColour).addClass('pressed');
   setTimeout(function(){
    $('#'+currentColour).removeClass('pressed');
   });
  
}
