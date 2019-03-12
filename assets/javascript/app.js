//Connecting java to html
const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const counter = document.getElementById("counter");
const progress = document.getElementById("progress");

const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");

const scoreDiv = document.getElementById("score");

//Questions
let questions = [ 
    { question : "What are Doritos ?",
      choice1  : "Chips",
      choice2  : "A car brand",
      choice3  : "Cloths",
      correct  : "1",
      wrong    : "Cloths" + "A car brand"
    
    },
    { question : "How much did Doritos make in retail sales in 1993 ?",
      choice1  : "5 billion dollars",
      choice2  : "600 million dollars",
      choice3  : "1.3 billion dollars",
      correct  : "3",
      wrong    : "600 million dollars" + "5 billion dollars"

    },
    { question : "What company has produced Doritos since 1964 ?",
      choice1  : "Frito-Lay",
      choice2  : "Little Debbie",
      choice3  : "Dove",
      correct  : "1",
      wrong    : "Little Debbie" + "Dove"
    },
    { question : "What year were Doritos released nationwide ?",
      choice1  : "1966",
      choice2  : "1860",
      choice3  : "2006",
      correct  : "1",
      wrong    : "1860" + "2006"

    },
    { question : "March of 2012 gave birth the the what line of Doritos",
      choice1  : "Flaming hot nacho",
      choice2  : "Jacked",
      choice3  : "Blaze",
      correct  : "2",
      wrong    : "Flaming hot nacho" + "Blaze"
    },
];

const lastQuestion = questions.length - 1;
let currentQuestion = 0;

const questionTime = 10;
const time = 10;
let count = 0;

let TIMER;
let score = 0;

function renderQuestion() {
    let q = questions[currentQuestion];

    question.innerHTML ="<p>" + q.question + "</p>";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
};



start.addEventListener("click", startQuiz);
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
    renderQuestion();
    quiz.style.display = "block";
}

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000);

}



function renderProgress(){
    for(let q = 0; q <= lastQuestion; q++) {
        progress.innerHTML += "<div class='prog' id="+ q+"></div>";
    }
}


// currentQuestion = 0;
// renderQuestion();
// currentQuestion++;

function renderCounter() {
    if(count <= time) {
        counter.innerHTML = count;
        count++;

    }else{
        count = 0;
        if (currentQuestion < lastQuestion) {
            currentQuestion++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

function checkAnswer(answer){
    if(answer  == questions[currentQuestion].correct) {
        score++;
    }
    count = 0;
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}


function scoreRender(){
    scoreDiv.style.display="block";
    const scorePer = Math.round(100 * score/questions.legnth);
    scoreDiv.innerHTML += "<p>" + scorePer + "%</p>"
}
