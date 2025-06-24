document.addEventListener('DOMContentLoaded', (event) => {
    let title = "Sutoreitso";
    let currentTitle = "";
    let direction = 1;
    let index = 0;

    setInterval(() => {
        if (direction === 1) {
            currentTitle += title[index];
            if (index === title.length - 1) {
                direction = -1;
            } else {
                index++;
            }
        } else {
            currentTitle = currentTitle.slice(0, -1);
            if (index === 0) {
                direction = 1;
            } else {
                index--;
            }
        }
        document.title = "/" + currentTitle;
    }, 1000);

    document.querySelector('.button').addEventListener('click', function() {
        let noise = document.getElementById('noise');
        if (noise) {
            noise.muted = false;
            noise.play();
        }

        let enter = document.getElementById('enter');
        if (enter) {
            enter.muted = false;
            enter.play();
        }
        setTimeout(() => {
            // Masquer le bouton après la transition
            this.style.display = 'none';
        }, 3000); 
        document.body.classList.add('transition-to-video');

        setTimeout(() => {
            this.style.display = 'none';
            document.body.classList.remove('transition-to-video');

            let video = document.getElementById('background-video');
            if (video) {
                video.style.display = 'block';
                video.muted = false;
                document.querySelector('.overlay').style.display = 'block';
                document.querySelector('.mute-button').style.display = 'block';
                video.classList.add('show');
                video.play();
            }
        }, 3000); // Delay the start of the video by 3 seconds to match the transition duration
    });

    let muteButton = document.getElementById('mute-button');
    if (muteButton) {
        muteButton.addEventListener('click', function() {
            let video = document.getElementById('background-video');
            if (video) {
                video.muted = !video.muted;
                let img = muteButton.querySelector('img');
                if (img) {
                    img.src = video.muted ? './img/mute.png' : './img/unmute.png';
                }
            }
        });
    }
});