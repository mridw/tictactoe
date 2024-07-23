let boxes = document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let newGame= document.querySelector("#new-but");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count=0;
let turnO = true;
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkWinner();
        if(count===9&&!isWinner){
            tie();
        }
    })
});
const disableBut=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBut=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetGame=()=>{
    turnO=true;
    enableBut();
    
    msgContainer.classList.add("hide");
}
const showWinner=(winner)=>{
    msg.innerText= `Congratulations! Winner is ${winner}`;
    disableBut();
    msgContainer.classList.remove("hide");
}
const tie=()=>{
    msg.innerText= `Tie!`;
    disableBut();
    msgContainer.classList.remove("hide");
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2==pos3){ 
                showWinner(pos1);  
            }
             
        }
    }
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
