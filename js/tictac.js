console.log("welcome to Tic Tac Toe");

let music = new Audio ("./sound/music.mp3");
let audioTurn = new Audio("./sound/ting.mp3");
let gameover = new Audio("./sound/gameover.mp3");
let firstText = "X" ;

// function change to turn 
const changeturn = () =>{
    return firstText === "X" ? "0" : "X"
}

// function to check for a win 

const checkwin = () => {

}

// game login AND MAIN LOGIC 
let boxes = document.getElementsByClassName("box") ;
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext") ; 
    element.addEventListener('click' , (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = firstText ;
           firstText =  changeturn () ;
            audioTurn.play();
            checkwin () ;
                document.getElementsByClassName("info")[0].innerText = "Turn for " + firstText;

        }
    })
})
