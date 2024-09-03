const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Display a fun alert message with emojis when the "Yes" button is clicked
yesButton.addEventListener('click', () => {
    alert('🎉 Woohoo! You made the right choice! ❤️');
});

// Move the "No" button to a random position when hovered over
noButton.addEventListener('mouseover', () => {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
