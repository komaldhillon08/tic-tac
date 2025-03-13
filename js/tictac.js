console.log("welcome to Tic Tac Toe");

let music = new Audio("./sound/music.mp3");
let audioTurn = new Audio("./sound/ting.mp3");
let gameover = new Audio("./sound/gameover.mp3");
let firstText = "X";
let isgameover = false;

// function change to turn 
const changeturn = () => {
    return firstText === "X" ? "0" : "X"
}

// function to check for a win 

const checkwin = () => {
    //  music.play();
    let boxtext = document.getElementsByClassName("boxtext");

    let wins = [
        [0, 1, 2, 1, 3.3, 0],
        [3, 4, 5, 1, 10.1, 0],
        [6, 7, 8, 1, 17, 0],
        [0, 3, 6, -11.7, 11, 90],
        [1, 4, 7, -0.6, 11, 90],
        [2, 5, 8, 10.5, 11.1, 90],
        [0, 4, 8, -0.5, 10.3, 32],
        [2, 4, 6, -0.5, 10.1, 148]
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won";
            isgameover = true;
            document.querySelector(".excited").getElementsByTagName('img')[0].style.width = "200px"

            // cerate new variable 
            const line = document.querySelector(".line");
            line.style.width = "90%";
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// game login AND MAIN LOGIC 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = firstText;
            firstText = changeturn();
            audioTurn.play();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + firstText;

            }
        }
    })
})

// add onclick to reset botton
reset.addEventListener('click', () => {
    let boxresets = document.querySelectorAll(".boxtext");
    Array.from(boxresets).forEach(element => {
        element.innerText = " ";
    });
    firstText = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + firstText;


    let excitedElement = document.getElementsByClassName("excited")[0]; // Access the first element
    let imgElement = excitedElement.getElementsByTagName("img")[0]; // Access the first image
    imgElement.style.width = "0px"; // Set the width to 0px

    // remove win line 
    const line = document.querySelector(".line");
    line.style.width = "0%";
})
