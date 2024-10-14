document.addEventListener('DOMContentLoaded', () => {
    const letter = "Dear Rhian,\nI made this for you\nTo show you that\nI am willing to love you\nIn every way possible.\nAnd no matter what it is\n I will always \n make it just for you.\nYours truly, Raniel";
    const letterContainer = document.getElementById('letter');
    const circleBackground = document.getElementById('circle');
    const finalImage = document.getElementById('final-image');
    const dot = document.querySelector('.dot');
    const backgroundMusic = document.getElementById('background-music');
    const clickSound = document.getElementById('click-sound');

    // Set up background music
    backgroundMusic.volume = 0.2;
    backgroundMusic.muted = true; // Start muted

    // Attempt to play background music
    backgroundMusic.play().then(() => {
        backgroundMusic.muted = false; // Unmute after it starts playing
    }).catch(error => {
        console.log('Playback failed:', error);
        // Optionally provide feedback to users
    });

    dot.style.animation = 'expand 3s forwards';

    setTimeout(() => {
        circleBackground.style.opacity = 1;
        typeWriter();
    }, 3000); // Wait for the dot expansion to finish

    const typeWriter = () => {
        let index = 0;
        const typeNextCharacter = () => {
            if (index < letter.length) {
                letterContainer.textContent += letter.charAt(index);
                index++;
                setTimeout(typeNextCharacter, 100);
            } else {
                enableClickToContinue();
            }
        };
        typeNextCharacter();
    };

    const enableClickToContinue = () => {
        document.body.addEventListener('click', () => {
            clickSound.play();
            fillScreenWithPink();
        }, { once: true });
    };

    const fillScreenWithPink = () => {
        document.body.style.transition = 'background-color 1s';
        document.body.style.backgroundColor = 'pink';
        circleBackground.style.transition = 'opacity 1s';
        circleBackground.style.opacity = 0;
        letterContainer.style.opacity = 0;
        setTimeout(showImage, 3000);
    };

    const showImage = () => {
        finalImage.style.opacity = 1;
    };
});
