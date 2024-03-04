document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.button').addEventListener('click', function() {
        let noise = document.getElementById('noise');
        noise.muted = false;
        noise.play();
        this.classList.add('cracked');
  
        setTimeout(() => {
            let enter = document.getElementById('enter');
            enter.muted = false;
            enter.play();
            document.querySelector('.propagation').classList.add('expand');
            this.style.display = 'none';
            setTimeout(function() {
                let hello = document.getElementById('hello');
                hello.innerHTML = 'Please, come in..';
                hello.style.display = 'block';
                hello.style.opacity = '1';
                setTimeout(function() {
                    hello.style.opacity = '0';
                    setTimeout(function() {
                        hello.remove();
                        document.querySelector('.propagation').style.display = 'none';
                        let video = document.getElementById('background-video');
                        if (video.readyState >= 3) { // 3 = HAVE_FUTURE_DATA
                            video.style.display = 'block';
                            video.muted = false;
                            document.querySelector('.overlay').style.display = 'block';
                            document.querySelector('.mute-button').style.display = 'block';
                            video.play();
                        } else {
                            video.addEventListener('canplay', function() {
                                video.style.display = 'block';
                                video.muted = false;
                                document.querySelector('.overlay').style.display = 'block'; 
                                document.querySelector('.mute-button').style.display = 'block';
                                video.play();
                            });
                        }
                        video.addEventListener('error', function() {
                            console.error('Video error:', video.error);
                        });
                    }, 2000);
                }, 2000);
            }, 1000);
        }, 2000); // Delay the start of the propagation animation by 2 seconds
    
    });

    let muteButton = document.getElementById('mute-button');
    muteButton.addEventListener('click', function() {
        let video = document.getElementById('background-video');
        video.muted = !video.muted;
        let img = muteButton.querySelector('img');
        if (video.muted) {
            img.src = './img/mute.png';
        } else {
            img.src = './img/unmute.png';
        }
    });
});