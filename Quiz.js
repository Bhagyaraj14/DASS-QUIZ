const quizdata = [
    {
        question: "1. Do you find that you stay online longer than you intended? ",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
            },
    {
        question: "2. Do you neglect household chores to spend more time online?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question: "3. Do you prefer the excitement of the internet to intimacy with your partner?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question: "4.Do you form new relationships with fellow online users?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"5.Do others in your life complain to you about the amount of time you spend online?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"6. Does your work suffer because of the amount of time you spend online? (E.g.‚ postponing things‚ not meeting deadlines‚ etc.)",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"7.Do you check your email before something else you need to do?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"8. Does your job performance or productivity suffer because of the internet?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"9. Do you become defensive or secretive when anyone asks you what you do online? ",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"10.Do you block disturbing thoughts about your life with soothing thoughts of the internet?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"11. Do you find yourself anticipating when you will go online again?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"12. Do you fear that life without the internet would be boring‚ empty or joyless?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"13.Do you snap‚ yell‚ or act annoyed if someone bothers you while you are online? ",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"14.Do you lose sleep due to late night internet use?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"15. Do you feel preoccupied with the internet when not online‚ or fantasize about being online?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"16.Do you find yourself saying “Just a few more minutes” when online?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"17. Do you try to cut down on the amount of time you spend online and fail?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"18. Do you try and hide how long you’ve been online?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"19.Do you choose to spend more time online over spending time out with others?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    {
        question:"20.Do you feel depressed‚ moody‚ or nervous when you are not online‚ and do these feelings go awhile when you go back online?",
        a: "Rarely",
        b: "Occasionally",
        c: "Frequently",
        d: "Often",
        e: "Always",
        s1: "a",
        s2: "b",
        s3: "c",
        s4: "d",
        s5: "e",
    },
    
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizdata[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer = ""
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizdata[currentQuiz].s1) {
            score = score + 1
        }
        else if (answer === quizdata[currentQuiz].s2) {
            score = score + 2
        }
        else if (answer === quizdata[currentQuiz].s3) {
            score = score + 3
        }
        else if (answer === quizdata[currentQuiz].s4) {
            score = score + 4
        }
        else if (answer === quizdata[currentQuiz].s5) {
            score = score + 5
        }
       
        currentQuiz++

        if (currentQuiz < quizdata.length) {
            loadQuiz()
        }
        else {  
            if(score>=20 && score<=49 ){
                quiz.innerHTML =`<center><p style="font-weight: bold;font-size: x-large;color: #202020d1;background-color:rgba(255, 255, 255, 0.641);margin:20px;">You are an average on-line user <br></p>
                <h2>You have Completed your Quiz <span style="margin:10px"> <br>
            Your score is ${score} <br>
            You may surf the Web a bit too long at times‚ but you have control over your usage </h2>
            <span style="margin:10px"> 
            <center><button onclick="location.reload()">Reload</button>`
            }  
            else if(score<=79 && score>50 ){
                quiz.innerHTML =`<center><p style="font-weight: bold;font-size: x-large;color: #202020d1;background-color:rgba(255, 255, 255, 0.641);margin:20px;">You are experiencing occasional or frequent problems because of the Internet<br></p>
                <h2>You have Completed your Quiz <span style="margin:10px"> <br>
            Your score is ${score} <br>
            You should consider their full impact on your life </h2>
            <span style="margin:10px"> 
            <center><button onclick="location.reload()">Reload</button>`
            }     
            else if(score>=80){
                quiz.innerHTML =`<center><p style="font-weight: bold;font-size: x-large;color: #202020d1;background-color:rgba(255, 255, 255, 0.641);margin:20px;">Your Internet usage is causing significant problems in your life <br></p>
                <h2>You have Completed your Quiz <span style="margin:10px"> <br>
            Your score is ${score} <br>
            You should evaluate the impact of the Internet on your life and address the problems directly caused by your Internet usage </h2>
            <span style="margin:10px"> 
            <center><button onclick="location.reload()">Reload</button>`
            }
           
            

        }
        /*quiz.innerHTML=`
        <h2>You have Completed your Quiz <span style="margin:10px"> <br>
        Your score is ${score} <br> </h2>
        <span style="margin:10px"> 
        <center><button onclick="location.reload()">Reload</button>
        <p style="font-weight: bold;font-size: x-large;color: #202020d1;background-color:rgba(255, 255, 255, 0.641);margin:20px;"> 1=certainly yes; 2=probably yes; 3=likely yes; 4=can’t say; 5=probably no; 6=likely no; 7=certainly no. <br>
        Companionship=72 Conflict=68 <br> Closeness=76 Help=81 Security=58</p>
        </center>`*/
        
    }
})