document.addEventListener('DOMContentLoaded', function () {

    var video = document.querySelector('#video');
    var sceneEl = document.getElementById('scene');
    let arSystem;
    sceneEl.addEventListener('loaded', function () {
        arSystem = sceneEl.systems['mindar-image-system'];
    });
    sceneEl.addEventListener('arReady', function () {
        alert("Click vào màn hình để phát lại video");
        window.addEventListener('targetFound', function () {
            // Get video element by id
            var videoElement = document.getElementById("video");

            // Play the video
            videoElement.play();
        });
        sceneEl.addEventListener('touchstart', function () {
            //Fix the problem of video not play (A-frame)
            if (video.paused == true) {
                video.play();
                alert("Video đang được phát lại");
            } else {
                video.pause();
            }
        });
        window.addEventListener('click', function () {
            //Fix the problem of video not play (A-frame)
            if (video.paused == true) {
                video.play();
                alert("Video đang được phát lại");
            } else {
                video.pause();
            }

        });
    });
});