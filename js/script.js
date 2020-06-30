'use strict';

let mainBtnYes = document.getElementById('yes');
let mainBtnNo = document.getElementById('no');
let sureBtnYes = document.getElementById('sure-yes');
let sureBtnNo = document.getElementById('sure-no');

let answers = document.querySelector('.answers');
let areYouSure = document.querySelector('.are-you-sure');
let done = document.querySelector('.done');

function displayAreYouSure(){
    areYouSure.style.top = 0;
}

function hideAreYouSure(){
    areYouSure.style.top = '1000%';
}

function displayDone(){
    done.style.top = 0;
}


//closure example
function moveButton(){
    let count = 3;

    function move(){
        switch (count) {
            case 3:
                answers.style.gridTemplateAreas = `
                ". . ." 
                "yes . ." 
                "no . ."`;
                count--;
                break;
            case 2:
                answers.style.gridTemplateAreas = `
                ". no ." 
                "yes . ." 
                ". . ."`;
                count--;
                break;
            case 1:
                answers.style.gridTemplateAreas = `
                ". . ." 
                "yes . no" 
                ". . ."`;
                count--;
                break;
            case 0:
                displayAreYouSure();
                break; 
        }
    }

    return move;
}

let makeMove = moveButton();
let mouseEnterHandler = function(){makeMove();};



function changeMainQuestions(){

    mainBtnNo.innerText = 'Одобряю';
    mainBtnNo.style.fontSize = '5vmin';
    hideAreYouSure();
    
    mainBtnNo.removeEventListener('mouseenter', mouseEnterHandler);
    mainBtnNo.addEventListener('click', () => {displayDone();});
}

mainBtnNo.addEventListener('mouseenter', mouseEnterHandler);
mainBtnYes.addEventListener('click', () => {displayDone();});
sureBtnYes.addEventListener('click', () => {displayDone();});
sureBtnNo.addEventListener('click', () => {changeMainQuestions();});