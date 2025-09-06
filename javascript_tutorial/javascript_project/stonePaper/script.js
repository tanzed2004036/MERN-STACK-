let yourScore = 0;
let comScore = 0;
let you = document.querySelector("#you");
let computer = document.querySelector("#computer");
let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#mgs");

const genComChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
};

const playgame = (userchoice) => {
  console.log(`user choose = ${userchoice}`);
  let comChoice = genComChoice();
  console.log("computer choose", comChoice);
  if (userchoice === comChoice) {
    console.log("it's draw");
    message.innerText = "It's Draw";
  } else {
    if (userchoice === "rock") {
      if (comChoice == "paper") {
        console.log("Computer win");
        message.innerText = "Computer win";
        comScore++;
        computer.innerText = comScore;
      } else {
        console.log("You win");
        message.innerText = "You win";
        yourScore++;
        you.innerText = yourScore;
      }
    } else if (userchoice === "paper") {
      if (comChoice == "scissors") {
        console.log("Computer win");
        message.innerText = "Computer win";
        comScore++;
        computer.innerText = comScore;
      } else {
        console.log("You win");
        message.innerText = "You win";
        yourScore++;
        you.innerText = yourScore;
      }
    } else if (userchoice === "scissors") {
      if (comChoice == "rock") {
        console.log("Computer win");
        message.innerText = "Computer win";
        comScore++;
        computer.innerText = comScore;
      } else {
        console.log("You win");
        message.innerText = "You win";
        yourScore++;
        you.innerText = yourScore;
      }
    }
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    // console.log("choose ", userchoice);
    playgame(userchoice);
  });
});
