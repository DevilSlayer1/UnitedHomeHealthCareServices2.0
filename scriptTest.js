let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let questions; // Declare questions globally

async function fetchQuestions() {
    try {
        const response = await fetch('./symptoms.json'); // Replace with the actual path to your JSON file
        const data = await response.json();
        questions = data; // Assign data to the global variable
    } catch (error) {
        console.error('Error fetching questions:', error);
        questions = [];
    }
}

async function startQuiz() {
    await fetchQuestions(); // Wait for questions to be fetched
    if (questions.length > 0) {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    } else {
        console.error('No questions available.');
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.state === "yes" || answer.state === "no" || answer.state === "maybe") {
            button.dataset.state = answer.state;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    selectedBtn.classList.add("selected");
    if (selectedBtn.dataset.state === "yes") {
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    // Add your score-based logic here
    if(score>=0 && score <=5)
    {
        questionElement.innerHTML=`"Your symptoms suggest a low risk of COVID-19. Continue to practice preventive measures and monitor your health."`;
    }
    else if(score>=6 && score <=10)
    {
        questionElement.innerHTML=`"You have moderate symptoms. Consider contacting a healthcare professional for further guidance."`;
    }
    else if(score>=11 && score<=15)
    {
        questionElement.innerHTML=`"Your symptoms indicate a high risk of COVID-19. Please seek immediate medical attention. You can access health facilities from our website."`;
    }
    else{

    }
    console.log(score);
    nextButton.innerHTML = 'Take the test again?';
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
//new

let startQuizBtn = document.getElementById('start-quiz');
let welcome=document.querySelector('.welcome');
let app=document.querySelector('.app');
startQuizBtn.addEventListener('click',()=>{
    app.style.animationName = 'anim1';
    app.style.animationDuration ='0.5s';
    welcome.classList.add('hidden');
    app.classList.remove('hidden');
})