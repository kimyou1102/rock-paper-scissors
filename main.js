//6:28
const startContainer = document.querySelector('.start_container');
const gameStart = document.querySelector('.game_start_btn');
const gameContainer = document.querySelector('.game_container');
const btnContainer = document.querySelector('.btn_container');
let emoji = document.querySelector('.emoji');

let emojiSelect = '';
gameStart.addEventListener('click', () => {
    startContainer.style.display = 'none';
    gameContainer.style.display = 'flex';
    init();
})

btnContainer.addEventListener('click', (event) => {
    clearInterval(emojiSelect);
    let id = event.target.id;
    score(id, emoji.innerText);
})

function init() {
    startBtn();
}

let i=0;
function changeEmoji() {
    const emojiArr = ['✊', '✌', '✋'];
    let select = emojiArr[i % emojiArr.length];
    emoji.innerHTML = select;
    console.log(select);
    i++;
}

function startBtn() {
    changeEmoji();
    emojiSelect = setInterval(changeEmoji, 100);
}

function score(user, computer) {
    if(user === 'rock' && computer === '✊') {
        gameover(`나의 선택: ✊, 컴퓨터의 선택: ${computer}로 비겼습니다`);
    } else if(user === 'rock' && computer === '✌') {
        gameover(`나의 선택: ✊, 컴퓨터의 선택: ${computer}로 이겼습니다!🎉`);
    } else if(user === 'rock' && computer === '✋') {
        gameover(`나의 선택: ✊, 컴퓨터의 선택: ${computer}로 졌습니다😥`); 
    } else if(user === 'scissiors' && computer === '✊') {
        gameover(`나의 선택: ✌, 컴퓨터의 선택: ${computer}로 졌습니다😥`);
    } else if(user === 'scissiors' && computer === '✌') {
        gameover(`나의 선택: ✌, 컴퓨터의 선택: ${computer}로 비겼습니다`);
    } else if(user === 'scissiors' && computer === '✋') {
        gameover(`나의 선택: ✌, 컴퓨터의 선택: ${computer}로 이겼습니다!🎉`);
    } else if(user === 'paper' && computer === '✊') {
        gameover(`나의 선택: ✋, 컴퓨터의 선택: ${computer}로 이겼습니다!🎉`);
    } else if(user === 'paper' && computer === '✌') {
        gameover(`나의 선택: ✋, 컴퓨터의 선택: ${computer}로 졌습니다😥`);
    } else if(user === 'paper' && computer === '✋') {
        gameover(`나의 선택: ✋, 컴퓨터의 선택: ${computer}로 비겼습니다`);
    } 
}

function gameover(message) {
    alert(message);
    i = 0;
    init();
}
