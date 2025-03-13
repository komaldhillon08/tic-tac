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
    let boxtext = document.querySelectorAll(".boxtext");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won";
            isgameover = true;

            let excitedElements = document.getElementsByClassName("excited");

            // Loop through each element with the class 'excited'
            for (let i = 0; i < excitedElements.length; i++) {
                // Get the first 'img' element inside this 'excited' element
                let images = excitedElements[i].getElementsByTagName("img");

                // Check if there is at least one 'img' tag and modify its width
                if (images.length > 0) {
                    images[0].style.width = "200px";
                }
            }
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

    let excitedElements = document.getElementsByClassName("excited");

    // Loop through each element with the class 'excited'
    for (let i = 0; i < excitedElements.length; i++) {
        // Get the first 'img' element inside this 'excited' element
        let images = excitedElements[i].getElementsByTagName("img");

        // Check if there is at least one 'img' tag and modify its width
        if (images.length > 0) {
            images[0].style.width = "0px";
        }
    }

})