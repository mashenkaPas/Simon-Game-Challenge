//alert("hi, there");
var buttonsColours =["red", "blue","green","yellow"];
var gamePattern=[];
var userClickedPattern =[];
var level = 0;
var start =false;

$(document).keypress(function (event) { 
    
    console.log(event.key);
    if(start== false){
      if(event.key =='a'){
          start  =true;
      }
    }
      if(start){
        $("h1").text("level " + level);
          nextSequence();
      }
 });


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    makeSound(userChosenColour);
    //console.log('in chosen',userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})




function checkAnswer(currentLevel){
  

      if(userClickedPattern[currentLevel] === gamePattern[currentLevel])
        {         
            if (userClickedPattern.length === gamePattern.length)
            {
                setTimeout(function () 
                {
                    nextSequence();s
                }, 1000);
            }
        } else{
            makeSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){
                 $("body").removeClass("game-over");
            },200);
            $("h1").html("Game Over, Press Any to Restart");
            startOver();
            console.log("wrong  " + gamePattern.length +" " ) ;
        }       
    
}
function startOver(){
    level = 0 ;
    gamePattern =[];
    userClickedPattern =[];
    $(document).keypress(function(event){
        start = true;
    });
  
}

function nextSequence()
{
    $("h1").text("level " + level);
    level++;
    userClickedPattern=[];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonsColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log('in random + length ',randomChosenColour + "   "+ gamePattern.length);
    makeSound(randomChosenColour);
}



function makeSound(but)
{   
    var audio = new Audio("sounds/" + but + ".mp3");   
    audio.play();
     buttonAnimation(but);
}

function buttonAnimation(but){

   $("#" + but).addClass("pressed");
    setTimeout(function()
    {
          $("#" +but).removeClass("pressed");
    },200);
}
