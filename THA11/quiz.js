const questions = [
    {
        question:"Ques: Who does Heimdall manage to send to Earth during Thanos' attack?",
        option1 :"Loki",
        option2:"Hulk",
        option3:"Thor",
        option4:"Surtur",
        ans:"ans2"
    },
    {
        question:"Ques: What game do Tony and Nebula play to pass time while stranded in space?",
        option1 :" Handball",
        option2:"Book Cricket",
        option3:"Paper Football",
        option4:"None of these",
        ans:"ans3"
    },
    {
        question:"Ques: Pepper Potts is allergic to what?",
        option1 :"Chillies",
        option2:"Strawberries",
        option3:"Peanuts",
        option4:"Vinegar",
        ans:"ans2"
    },
    {
        question:"Ques: Avengers: Infinity War began with Thanos and his henchmen inside the Asgardian ship looking for the space stone. Who told Thanos that they had a Hulk on the Asgardian ship with them?",
        option1 :"Loki",
        option2:"Thor",
        option3:"Heimdall",
        option4:"Black Order",
        ans:"ans1"
    },
    {
        question:"Ques: Where does Natasha Romanoff locate Dr. Bruce Banner?",
        option1 :"Nigeria",
        option2:"Africa",
        option3:"India",
        option4:"Argentina",
        ans:"ans3"
    }
];

const enter = document.querySelector(".start");
const ques = document.querySelector(".ques");
const op1 = document.querySelector("#ans1");
const op2 = document.querySelector("#ans2");
const op3 = document.querySelector("#ans3");
const op4 = document.querySelector("#ans4");
const submit = document.querySelector(".submit");

var answers = document.querySelectorAll(".in");
let count=0;
let score = 0;

enter.addEventListener("click",()=>{
    enter.style.display="none";
    document.querySelector(".q").style.display = "block";
    loadQues();

    answers.forEach(e=>{
        e.addEventListener("click",()=>{
            if(e.id === questions[count].ans){
                e.style.background = "#68ed51";
                score++;
                
            }else{
                e.style.background = "red";
               
            }
            count++;
            setTimeout(()=>{
                e.style.background = "#0a0121";
                if(count<questions.length){
                    
                    loadQues();
                }else{
                    document.querySelector(".q").style.display = "none";
                    document.querySelector(".score").style.display = "block";
                    document.querySelector(".s").innerText = `Your score is ${score}/${questions.length}`;

                }
            },800)
            
    
        })
    });

})
document.querySelector(".play").addEventListener('click', () => {
    window.location.reload();
});
const loadQues = ()=>{
    ques.innerText = questions[count].question;
    op1.innerText = questions[count].option1;
    op2.innerText = questions[count].option2;
    op3.innerText = questions[count].option3;
    op4.innerText = questions[count].option4;
}