const p1b = document.querySelector('#p1b');
const p2b = document.querySelector('#p2b');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const res = document.querySelector('#reset');
const choice = document.querySelector('#opt');
let p1score = 0;
let p2score = 0;
let ws = 1;
let isGame = false;
let isGame1 = false;
p1b.addEventListener('click', () => {
    if (!isGame && p1score < ws) {
        p1score += 1;
        p1.textContent = p1score;
        if (p1score === ws) {
            isGame = true;
            p1.classList.add('winner');
            p2.classList.add('loser');
            p1b.setAttribute('disabled', 'disabled');
            p2b.setAttribute('disabled', 'disabled');

            // Trigger fireworks
            fireworksEffect();
        }

    }
});
const reset = () => {
    isGame = false;
    isGame1 = false;
    p1score = 0;
    p2score = 0;
    p1.textContent = p1score;
    p2.textContent = p2score;
    p2.classList.remove('winner', 'loser');
    p1.classList.remove('winner', 'loser');
    p1b.removeAttribute('disabled');
    p2b.removeAttribute('disabled');

}
p2b.addEventListener('click', () => {
    if (!isGame && p2score < ws) {
        p2score += 1;
        p2.textContent = p2score;
        if (p2score === ws) {
            isGame1 = true;
            p2.classList.add('winner');
            p1.classList.add('loser');
            p1b.setAttribute('disabled', 'disabled');
            p2b.setAttribute('disabled', 'disabled');

            // Trigger fireworks
            fireworksEffect();
        }

    }
});
res.addEventListener('click', reset)
choice.addEventListener('change', () => {
    ws = parseInt(choice.value);
    reset()

})
function fireworksEffect() {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.classList.add('fireworks-container');
    document.body.appendChild(fireworksContainer);

    const fireworks = document.createElement('div');
    fireworks.classList.add('fireworks');
    fireworksContainer.appendChild(fireworks);

    setTimeout(() => {
        fireworks.remove();
        fireworksContainer.remove();
    }, 1200); // Adjust the timeout to match your animation duration
}





