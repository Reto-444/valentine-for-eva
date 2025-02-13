document.getElementById('loveButton').addEventListener('click', function() {
    const messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'block';

    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);

    let startX = Math.random() * window.innerWidth;
    let startY = window.innerHeight;
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;

    let animationDuration = Math.random() * 3 + 2;

    heart.style.animation = `floatUp ${animationDuration}s linear infinite`;

    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000);
}
