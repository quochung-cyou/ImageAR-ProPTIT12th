document.addEventListener('DOMContentLoaded', function () {

    var video = document.querySelector('#video');
    var sceneEl = document.getElementById('scene');
    let arSystem;
    sceneEl.addEventListener('loaded', function () {
        arSystem = sceneEl.systems['mindar-image-system'];
    });
    sceneEl.addEventListener('arReady', function () {
        setInterval(function () {
            playVideo();
        }, 1000 / 30);
    });
    sceneEl.addEventListener('touchstart', function () {
        playVideo();
    });
    window.addEventListener('click', function () {
        //Fix the problem of video not play (A-frame)
        playVideo();
    });

    function playVideo() {
        video.play();
    }
});