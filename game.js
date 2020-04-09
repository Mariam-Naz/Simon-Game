
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"];
var gamePattern= [];
var level=0;
var start=true;

$('.btn').on('click', function(){
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(level);
});  

function nextSequence(){
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#'+ randomChosenColour).fadeOut(100).fadeIn(100).fadeIn(100);
    playSound(randomChosenColour);
    $('h1').text('Level ' + level);
    level++;
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

function checkAnswer(currentLevel){
    for(i=0 ;i<=currentLevel;i++){
        if(gamePattern[i]==userClickedPattern[i])
            nextSequence();
    }

}
$('body').on('keydown',function(){
    if(start==true)
        nextSequence();
    start=false;
    
  
});

