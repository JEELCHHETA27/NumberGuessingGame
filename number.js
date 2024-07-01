document.addEventListener('DOMContentLoaded', (event) => {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const resetButton = document.getElementById('resetButton');
    const message = document.getElementById('message');
    const attempts = document.getElementById('attempts');
    
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attemptCount = 0;

    guessButton.addEventListener('click', () => {
        const userGuess = Number(guessInput.value);
        attemptCount++;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed it right in ${attemptCount} attempts.`;
            message.style.color = 'green';
            guessButton.disabled = true;
            guessInput.disabled = true;
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'orange';
        } else {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'orange';
        }

        attempts.textContent = `Attempts: ${attemptCount}`;
        guessInput.value = '';
        guessInput.focus();
    });

    resetButton.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attemptCount = 0;
        message.textContent = '';
        attempts.textContent = '';
        guessButton.disabled = false;
        guessInput.disabled = false;
        guessInput.value = '';
        guessInput.focus();
    });
});
