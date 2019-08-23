let min=1,
	max=10,
	guessesLeft=3;
	winningNum=getRandomNumber(min,max);

const game= document.querySelector('#game'),
    minNum= document.querySelector('.min-num'),
	maxNum=document.querySelector('.max-num'),
	guessInput= document.querySelector('#guess-input'),
	guessBtn=document.querySelector('#guess-value'),
	message=document.querySelector('.message');

//Assign Values
minNum.textContent= min; 
maxNum.textContent= max;

guessBtn.addEventListener('click', gameOn)
game.addEventListener('mousedown', function playAgain(e){
	if(e.target.className==='play-again'){
		window.location.reload()
	}
})

function gameOn(){
	let guess= parseInt(guessInput.value)

	if(isNaN(guess)||guess>max||guess<min){
		setMessage(`Enter number between ${min} & ${max}`, 'red')
	}


	if(guess===winningNum){

		gameOver(`Congrats! You win`,true)
	}else{
		guessesLeft= guessesLeft-1
		if(guessesLeft===0){
			gameOver(`You Loose the number was ${winningNum}`,false)
		}else{
			guessInput.style.borderColor='red';
			setMessage(`Wrong, you have ${guessesLeft} guesses left`, 'red')
			guessInput.value=''
		}
	}
}

function gameOver(msg,won){
	let color; 
	won===true?color='green':color='red'

	guessInput.style.borderColor=color;
	guessInput.disabled=true;
	message.style.color=color;
	setMessage(msg)

	//play Again
	guessBtn.value='play-again'
	guessBtn.className='play-again'

}
function getRandomNumber(min,max){
	return Math.floor(Math.random()*(max-min+1)+min)

}

function setMessage(msg,color){
	message.textContent=msg;
	message.style.color=color;
}