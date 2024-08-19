const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYSER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;
const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (
    selection !== "Rock" &&
    selection !== "Paper" &&
    selection !== "Scissors"
  ) {
    alert(`Invalid choice! we cohse ${ROCK} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  //난수 0~0.33 ROCK, 0.34~0.67 SCISSORS
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const add=(a,b)=>a+b;

const getWinner = (cChoice, pChoice=DEFAULT_USER_CHOICE) => 
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

  /*if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  } 
    */
   // 내부 승패 로직

startGameBtn.addEventListener("click", () => {
  //익명함수
  if (gameIsRunning) {
    //버튼을 계속 클릭해도 새로운 게임이 실행되지 않도록 동작
    return;
  }
  gameIsRunning = true;
  console.log("Game is staring...");
  const playerChoice = getPlayerChoice(); //선택 기본값 반환
  const computerChoice = getComputerChoice(); //상수 생성해서 컴퓨터가 무엇을 낼지 호출
  let winner;
  if(playerChoice){
    winner=getWinner(computerChoice,playerChoice);//게임 시작시 호출
  }else{
    winner=getWinner(computerChoice,0);
  }

  let message=`you picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, computer picked ${computerChoice}`;
  if(winner===RESULT_DRAW){
    message=message+'had a draw.';
  }else if(winner===RESULT_PLAYER_WINS){
    message=message+'won.';
  }else{
    message=message+'lost.';
  }
  alert(message);
  gameIsRunning=false;//버튼 다시 클릭하면 게임이 재시작
});
