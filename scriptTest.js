const questions=[
    {
        question:"Do you currently have a fever?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Have you experienced a persistent cough?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Are you having difficulty breathing or shortness of breath?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Have you noticed a sudden loss of taste or smell?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Do you have muscle or body aches?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Have you been experiencing fatigue or weakness?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Do you have a sore throat?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Have you had close contact with someone diagnosed with COVID-19 in the last 14 days?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Have you recently traveled to an area with a high number of COVID-19 cases?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Do you have chills or repeated shaking with chills?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Have you experienced nausea, vomiting, or diarrhea?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Have you been in crowded places or attended large gatherings recently?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Do you have any pre-existing health conditions that may increase the severity of COVID-19 symptoms?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Are you currently pregnant or have you recently given birth?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    },
    {
        question:"Are you over the age of 65 or in a high-risk group?",
        answers:[
            {text:"Yes", state:"yes"},
            {text:"No", state:"no"},
            {text:"Maybe", state:"maybe"}
        ]
    }
]


let questionElement=document.getElementById("question");
let answerButtons=document.getElementById("answer-buttons");
let nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    showQuestion();
}
function showQuestion()
{
    resetState()
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    //console.log(questionNo);
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.state==="yes" || answer.state==="no" ||answer.state==="maybe") 
        {
            button.dataset.state = answer.state;
        }
        button.addEventListener('click',selectAnswer)
    })
}

function resetState()
{
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
   // const isCorrect= selectedBtn.dataset.state="yes";
   selectedBtn.classList.add("selected");
   if(selectedBtn.dataset.state=="yes")
   {
    score++;
   }
    Array.from(answerButtons.children).forEach(button=>{
        button.disabled=true;
    });
    nextButton.style.display="block";
}
    
function showScore(){
    resetState();
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
    console.log(score)
    nextButton.innerHTML='Take the test again?'
    nextButton.style.display="block";
}

function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton()
    }
    else{
        startQuiz();
    }
})
startQuiz();

