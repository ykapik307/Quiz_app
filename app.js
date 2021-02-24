let AoptText=document.querySelector('#a-option');
let BoptText=document.querySelector('#b-option');
let CoptText=document.querySelector('#c-option');
let DoptText=document.querySelector('#d-option');
let Ques=document.querySelector('.question');
let butt=document.querySelector('.sub');
let choice=document.getElementsByName('opt');
let res=document.querySelector('.result');
let count=1;
let score=0;


// let api=`https://opentdb.com/api.php?amount=15&category=9&type=multiple`;
let api=`https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple`;
fetch(api)
.then(response => response.json())
.then(data =>{
    let question=data.results[0].question;
    let correctAns=data.results[0].correct_answer;
    let options=data.results[0].incorrect_answers;
    options[3]=correctAns;
    Ques.innerHTML=question;
    AoptText.innerHTML=options[0];
    BoptText.innerHTML=options[1];
    CoptText.innerHTML=options[2];
    DoptText.innerHTML=options[3];
   

    butt.addEventListener('click',() =>{
        let selected="";
        for(i=0;i<choice.length;i++)
        {
            if(choice[i].checked)
            {
                selected=i;
            }
        }
        let optn=options[selected]
       
        if(optn==correctAns)
        {
            score++;
            res.style.opacity=1;
            res.innerHTML="Correct Answer";
            res.style.backgroundColor="lightgreen";
           
        }
        else if(optn!=correctAns)
        {
            res.style.opacity=1;
            res.innerHTML="Sorry Wrong choice , the correct answer is : "+correctAns;
            res.style.backgroundColor="rgb(255,99,71)";
        }
        if(count>=15)
        {
            res.style.opacity=1;
            res.innerHTML="Your total score is : "+score+" , Refresh to play again";
        }
        console.log(correctAns);
        question=data.results[count].question;
        correctAns=data.results[count].correct_answer;
        Soptions=data.results[count].incorrect_answers;
        Soptions[3]=correctAns;
        options=shuffle(Soptions);
        function shuffle(arra1) {
            var ctr = arra1.length, temp, index;
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = arra1[ctr];
                arra1[ctr] = arra1[index];
                arra1[index] = temp;
            }
            return arra1;
        }
        Ques.innerHTML=question;
        AoptText.innerHTML=options[0];
        BoptText.innerHTML=options[1];
        CoptText.innerHTML=options[2];
        DoptText.innerHTML=options[3];
        count++;
        // console.log(count);
        // 
        // console.log(selected);
        // if(selected==correctAns)
        // {
        //     score++;
        // }

        //    
        // if(count>=14)
        // {
        //     console.warn(score);
        // }
    })

})

