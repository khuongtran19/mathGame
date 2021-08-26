'use strict'

const start = document.getElementById('start')
const timeGauge = document.getElementById('timeGauge')
const game = document.getElementById('game')
const scoreDiv = document.getElementById('score')
const result = document.getElementById('result')
const questionTime = 50;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime
let count = 0;
let score = 0;
// let runningQuestion = 0;
let TIMER;

// random number generator
const ranNumGen = () => {
    return Math.floor(Math.random() * 100) + 1
}

const sum = (n1, n2) => {
    return n1 + n2
}

const nums = []
const renderQuestion = () => {
    for (let i = 0; i < 4; i++) {
        let num1 = ranNumGen();
        let num2 = ranNumGen();
        nums[i] = {
            n1: num1,
            n2: num2,
            sum: sum(num1, num2)
        }
    }
    for (let j = 0; j < nums.length; j++) {
        document.getElementById(`c${j + 1}`).textContent = `${nums[j].n1} + ${nums[j].n2}`
    }
    let keys = Object.keys(nums)
    let randomKey = keys[Math.floor(Math.random() * keys.length)]
    let randomValue = nums[randomKey].sum
    result.textContent = randomValue
    for (let k = 0; k < nums.length; k++) {
        if (randomValue === nums[k].sum) {
            nums[k].ans = "correct"
            nums.correct = `c${k + 1}`
        }
        else {
            nums[k].ans = "wrong"
        }
    }
}



const startGame = () => {
    start.style.display = 'none';
    renderQuestion();
    game.style.display = 'block';
    renderCounter();
    TIMER = setInterval(renderCounter, 1000)
}

const renderCounter = () => {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + 'px';
        count++
    } else {
        count = 0;
    }
}

const checkAnswer = answer => {
    if (answer == nums.correct) {
        console.log('correct')
        score++;
    } else {
        console.log('wrong')
        score--;
    }
}

// const scoreRender = () => {
//     scoreDiv.style.display = "block"
// }
console.log(nums)
start.addEventListener("click", startGame)