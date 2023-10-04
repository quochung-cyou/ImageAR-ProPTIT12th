document.addEventListener('DOMContentLoaded', function () {
    alert("Click vào màn hình để phát lại video");
    var video = document.querySelector('#video');
    var scene = document.getElementById('scene');
    scene.addEventListener('touchstart', function () { 
        alert("Đang phát lại video");
        video.play();
    });
});