let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let bigBox = document.querySelectorAll(".bigBox");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw
let checker = true;

const winPatterns0 = [
  [0, 1, 2],[0, 3, 6],[0, 4, 8],[1, 4, 7],[2, 5, 8],[2, 4, 6],[3, 4, 5],[6, 7, 8],
];
const winPatterns1 = [
  [9,10,11],[12,13,14],[15,16,17],[9,12,15],[10,13,16],[11,14,17],[9,13,17],[11,13,15],
];
const winPatterns2 = [
  [18,19,20],[21,22,23],[24,25,26],[18,21,24],[19,22,25],[20,23,26],[18,22,26],[20,22,24],
];
const winPatterns3 = [
  [27,28,29],[30,31,32],[33,34,35],[27,30,33],[28,31,34],[29,32,35],[27,31,35],[29,31,33],
];
const winPatterns4 = [
  [36,37,38],[39,40,41],[42,43,44],[36,39,42],[37,40,43],[38,41,44],[36,40,44],[38,40,42],
];
const winPatterns5 = [
  [45,46,47],[48,49,50],[51,52,53],[45,48,51],[46,49,52],[47,50,53],[45,49,53],[47,49,51],
];
const winPatterns6 = [
  [54,55,56],[57,58,59],[60,61,62],[54,57,60],[55,58,61],[56,59,62],[54,58,62],[56,58,60],
];
const winPatterns7 = [
  [63,64,65],[66,67,68],[69,70,71],[63,66,69],[64,67,70],[65,68,71],[63,67,71],[65,67,69],
];
const winPatterns8 = [
  [72,73,74],[75,76,77],[78,79,80],[72,75,78],[73,76,79],[74,77,80],[72,76,80],[74,76,78],
];


const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
  for(bigbox of bigBox){
    bigbox.classList.add("hide");
    bigbox.innerText =""; 
  }
 
  for(box of boxes){
    box.classList.remove("hide");
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    // count++;
      checkWinner();
    // if (count === 9 && !isWinner) {
    //   gameDraw();
    // }
  });
});


const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// const checkBigGridWinner = () => {
//   for (let pattern of winPatterns0) {
//     let pos1ValBig = bigBox[pattern[0]].innerText;
//     let pos2ValBig = bigBox[pattern[1]].innerText;
//     let pos3ValBig = bigBox[pattern[2]].innerText;
//     if (pos1ValBig != "" && pos2ValBig != "" && pos3ValBig != "") {
//     if (pos1ValBig === pos2ValBig && pos2ValBig === pos3ValBig) {
//       showWinner(pos1ValBig);
//       return true;
//     }
//   }
// }
// };

const checkWinner = () => {
  for (let pattern of winPatterns0) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        addBig0(pos1Val);
        removeSmall0();
        return true;
      }
    }
  }

  for (let pattern of winPatterns1) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        addBig1(pos1Val);
        removeSmall1();
        return true;
      }
    }
  }

  for (let pattern of winPatterns2) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        addBig2(pos1Val);
        removeSmall2();
        return true;
      }
    }
  }

  for (let pattern of winPatterns3) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        addBig3(pos1Val);
        removeSmall3();
        return true;
      }
    }
  }

  for (let pattern of winPatterns4) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        addBig4(pos1Val);
        removeSmall4();
        return true;
      }
    }
  }

  for (let pattern of winPatterns5) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        addBig5(pos1Val);
        removeSmall5();
        return true;
      }
    }
  }

  for (let pattern of winPatterns6) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        addBig6(pos1Val);
        removeSmall6();
        return true;
      }
    }
  }

  for (let pattern of winPatterns7) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        addBig7(pos1Val);
        removeSmall7();
        return true;
      }
    }
  }

  for (let pattern of winPatterns8) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        addBig8(pos1Val);
        removeSmall8();
        return true;
      }
    }
  }
};

const addBig0 = (pos1Val) => {
    bigBox[0].classList.remove("hide");
    bigBox[0].innerHTML=pos1Val;
}

const removeSmall0 = () =>{
  for(i = 0 ; i<9;i++){
    boxes[i].classList.add("hide");
  }
}

const addBig1 = (pos1Val) => {
  bigBox[1].classList.remove("hide");
  bigBox[1].innerHTML=pos1Val;
}

const removeSmall1 = () =>{
for(i = 9 ; i<18;i++){
  boxes[i].classList.add("hide");
}
}

const addBig2 = (pos1Val) => {
  bigBox[2].classList.remove("hide");
  bigBox[2].innerHTML=pos1Val;
}

const removeSmall2 = () =>{
for(i = 18 ; i<27;i++){
  boxes[i].classList.add("hide");
}
}

const addBig3 = (pos1Val) => {
  bigBox[3].classList.remove("hide");
  bigBox[3].innerHTML=pos1Val;
}

const removeSmall3 = () =>{
for(i = 27 ; i<36;i++){
  boxes[i].classList.add("hide");
}
}

const addBig4 = (pos1Val) => {
  bigBox[4].classList.remove("hide");
  bigBox[4].innerHTML=pos1Val;
}

const removeSmall4 = () =>{
for(i = 36 ; i<45;i++){
  boxes[i].classList.add("hide");
}
}

const addBig5 = (pos1Val) => {
  bigBox[5].classList.remove("hide");
  bigBox[5].innerHTML=pos1Val;
}

const removeSmall5 = () =>{
for(i = 45 ; i<54;i++){
  boxes[i].classList.add("hide");
}
}

const addBig6 = (pos1Val) => {
  bigBox[6].classList.remove("hide");
  bigBox[6].innerHTML=pos1Val;
}

const removeSmall6 = () =>{
for(i = 54 ; i<63;i++){
  boxes[i].classList.add("hide");
}
}

const addBig7 = (pos1Val) => {
  bigBox[7].classList.remove("hide");
  bigBox[7].innerHTML=pos1Val;
}

const removeSmall7 = () =>{
  for(i = 63 ; i<72;i++){
    boxes[i].classList.add("hide");
  }
}

const addBig8 = (pos1Val) => {
  bigBox[8].classList.remove("hide");
  bigBox[8].innerHTML=pos1Val;
}

const removeSmall8 = () =>{
  for(i = 72 ; i<81;i++){
  boxes[i].classList.add("hide");
  }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);