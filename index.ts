import 'regenerator-runtime/runtime'
const colors:string[] = ['blue', 'green', 'yellow', 'red' ]
const sequence:string[] = []
const clickedSequence:string[] = []

const genius = document.querySelector('.genius') as HTMLDivElement
document.querySelector('button[start]')?.addEventListener('click', startGame)
document.querySelector('button[gameover]')?.addEventListener('click', gameOver)
document.querySelectorAll('button')?.forEach(btn => {
    btn.addEventListener('click', async (e:any) => {
        const buttonClicked:HTMLButtonElement = e.target
        buttonClicked.classList.add('clicked')
        const delayPromise = new Promise<void>((res,rej)=>{setTimeout(res, 300);})
        await delayPromise
        buttonClicked.classList.remove('clicked')
    })
})




const newRandomColor: VoidFunction = () => {
    let randomColor:string = colors[Math.floor(Math.random()*4)]
    sequence.push(randomColor)
}

async function startGame(){
    newRandomColor()
    alert('Vamos começar, bom jogo!') 
    await lightSequence(sequence)
    genius.addEventListener('click', clickColor)
}

async function lightColor(color:string){
    document.querySelector(`.${color}`)?.classList.toggle('selected')

        const timeoutPromise = new Promise<void>((res, rej)=>{
            setTimeout(() => {
                document.querySelector(`.${color}`)?.classList.toggle('selected')
                res()
                },1000)
        })

        await timeoutPromise
}

async function lightSequence(sequence:string[]) {
    for (const color of sequence) {
        const delayPromise = new Promise<void>((res,rej)=>{setTimeout(res, 500);})
        await delayPromise
        await lightColor(color)
        await delayPromise
    }
}

async function clickColor(event:any) {
    const clicked:HTMLDivElement = event.target
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
        clickedSequence.length = 0
        alert('Parabens, você acertou. Vamos para o próximo nivel!')
        newRandomColor()
        const delayPromise = new Promise<void>((res,rej)=>{setTimeout(res, 500);})
        await delayPromise
        await lightSequence(sequence)
        genius.addEventListener('click', clickColor)
        return
    }
    alert(`Infelizmente você errou! Game Over! 
     Pontuação ${sequence.length-1}`)
    return gameOver()
}

function gameOver() {
    clickedSequence.length = 0
    sequence.length = 0
    genius.removeEventListener('click',clickColor)
}

