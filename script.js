console.log("Well come to tic tac toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn= "x"
let isgameover = false;

//Function to change the turn 
const changeTurn = ()=>{
    return turn === "x"?"0": "x"
}

//function to check for a win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
let Wins =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]
Wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="") ){
    document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
    isgameover=true
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
    }
})

}

//game logic //click listener
  music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(' .boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
           turn = changeTurn();
            audioTurn.play();
            checkwin();
            
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    })
})

//Add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(' .boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""

    });
    turn = "x";
    isgameover =false
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})