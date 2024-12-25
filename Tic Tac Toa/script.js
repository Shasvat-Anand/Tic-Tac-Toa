let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");

let newgamebtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");

let masg=document.querySelector("#msg");

let turnO=true // player X and player O

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
});
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
     masg.innerText= `Congraulation Winner is ${winner}`;
     msgcontainer.classList.remove("hide");
     disablebox();
}


const checkWinner =  ()=>{
    for(let pattern of winpatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){

                 showWinner(pos1Val);

            }
        }
    }
}

const resetGame=()=>{
    trueO=true;
    enablebox();
    msgcontainer.classList.add("hide");
}

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click", resetGame);

// resetbtn.addEventListener("click",()=>{
//     boxes.forEach((box) =>{
//         box.innerText="";
//         box.disabled=false;
//         msgcontainer.classList.add("hide");
//     })
// })