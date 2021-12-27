
const colors:string[] = ['blue','yellow', 'green',  'red' ]
const sequence:string[] = []
const clickedSequence:string[] = []
const sounds:any = {
    blue: new Audio("audio/blue.mp3"),
    green: new Audio("audio/green.mp3"),
    red: new Audio("audio/red.mp3"),
    yellow: new Audio("audio/yellow.mp3"),
    wrong: new Audio("audio/wrong.wav"),
    correct: new Audio("audio/correct.mp3")
} 


const _configurations ={
    speed: 1000,
    gameOn:false,
}

const genius = document.querySelector('.genius') as HTMLDivElement
const startButton = document.querySelector('button[start]') as HTMLButtonElement
const score = document.querySelector('.scoreboard h2') as HTMLHeadingElement

async function flashScore(){
    await delayPromise(100)
    score.style.display='none'
    await delayPromise(100)
    score.style.display='initial'
}

async function clickAnimation(event:MouseEvent){
    const startButton = event.target as HTMLButtonElement
    startButton.classList.add('clicked')
    const delayPromise = new Promise<void>((res)=>{setTimeout(res, 600);})
    await delayPromise
    startButton.classList.remove('clicked')
}

const delayPromise = (ms:number) => new Promise<void>((res,rej)=>{setTimeout(res, ms);})

startButton.addEventListener('click', startGame)
startButton.addEventListener('click', clickAnimation)


const newRandomColor = async () => {
    let randomColor:string = colors[Math.floor(Math.random()*4)]
    sequence.push(randomColor)
    await delayPromise(500)
    await lightSequence(sequence)
    genius.addEventListener('click', clickColor)
}

async function startGame(){
    if(!_configurations.gameOn) return
    await lightSequence(colors,100)
    score.textContent= '00'
    await flashScore()
    newRandomColor()
}

async function lightColor(color:string){
    document.querySelector(`.${color}`)?.classList.toggle('selected')
    sounds[`${color}`].play()
    await delayPromise(300)
    document.querySelector(`.${color}`)?.classList.toggle('selected')
}

async function lightSequence(sequence:string[], time=_configurations.speed) {
    for (const color of sequence) {
        await delayPromise(time)
        await lightColor(color)
    }
}

async function clickColor(event:MouseEvent) {
    const clicked = event.target as HTMLDivElement
    if (clicked.hasAttribute('colorPicker')){
        const color:string = clicked.classList.value 
        await lightColor(color)
        clickedSequence.push(color)
        if(clickedSequence.length == sequence.length) {
            genius.removeEventListener('click',clickColor)
            checkSequence()
        }
    }
}

async function checkSequence() {
    if(JSON.stringify(sequence) == JSON.stringify(clickedSequence)){
        sounds.correct.play()
        score.textContent= sequence.length.toString().length == 1? `0${sequence.length}` : sequence.length.toString() 
        await flashScore()
        clickedSequence.length = 0
        newRandomColor()
        return
    }
    sounds.wrong.play()
    return gameOver()
}

function gameOver() {
    flashScore()
    clickedSequence.length = 0
    sequence.length = 0
    genius.removeEventListener('click',clickColor)
}

function gameOnOff(event:MouseEvent){
    if(_configurations.gameOn) {
        gameOver()
        score.textContent= ''
    }else {
        const score = document.querySelector('.scoreboard h2') as HTMLHeadingElement
        score.textContent= '00'
        flashScore()
    }
    const powerButton = event.target as HTMLDivElement
    powerButton.classList.toggle('game-on')
    powerButton.children[0].classList.toggle('game-on')
    _configurations.gameOn=!_configurations.gameOn
}

function setSpeed(event:MouseEvent, speed:number){
    const speedButtons = document.querySelectorAll('.speed-button button')
    speedButtons.forEach(btn=>btn.classList.remove('active'))
    const clickedButton = event.target as HTMLButtonElement
    clickedButton.classList.add('active')
    _configurations.speed = speed
}

