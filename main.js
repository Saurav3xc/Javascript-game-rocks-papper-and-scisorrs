let msg=document.getElementById("msg");
let boxs=document.querySelectorAll(".user");
let userScore=document.getElementById("user-score");
let compScore=document.getElementById("comp-score");
let userboard=0;
let compboard=0;
boxs.forEach((box)=>{
  box.addEventListener("click",(e)=>{
    let userChoice=box.getAttribute("id");
    
    playGame(userChoice);
  })
})

const genCompchoice=()=>{
  let choice=["rock","papper","scisorrs"];
  let randomNum=Math.floor(Math.random()*choice.length);
  return choice[randomNum];
}

const playGame=(userchoice)=>{
  let computerChoice=genCompchoice();
  console.log(userchoice,computerChoice)
  if(userchoice==computerChoice){
    drawgame();
  }
  else{
    let userwin=true;
    if(userchoice=="rock"){
      userwin=computerChoice=="papper"?false:true;
    }
    else if(userchoice=="papper"){
      userwin=computerChoice=="scisorrs"?false:true;
    }
    else{
      userwin=computerChoice=="rock"?false:true;
    }
    showWinner(userchoice,computerChoice,userwin)
  }
}

const drawgame=()=>{
  alert("game was draw");
  msg.innerHTML="Game draw";
  msg.style.backgroundColor="black";
}

const showWinner=(userchoice,computerChoice,userwin)=>{
  if(userwin){
    msg.innerHTML=`You win ${userchoice} beats ${computerChoice}`;
    userScore.innerHTML=userboard++;
    msg.style.backgroundColor="green"
  }
  else{
    msg.innerHTML=`You lose ${computerChoice} beats ${userchoice}`;
    compScore.innerHTML=compboard++;
    msg.style.backgroundColor="red";
  }
}