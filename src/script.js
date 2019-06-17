const videoPlayer = document.querySelector(".video-player");

// Load the YT API
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create the player
let player;

function onPlayerReady() {
    videoPlayer.classList.add("is-ready");
}

function onPlayerStateChanged(event) {
    if (event.data != YT.PlayerState.PLAYING)
        return;


}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('promo-video', {
        videoId: 'WpbJLEpFnL4',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChanged
        },
        playerVars: {
            fs: 1,
            color: "white",
            playsinline: 0,
            rel: 0
        }
    });
}

videoPlayer.addEventListener("click", function () {
    if (player == null)
        return;

    videoPlayer.classList.add("is-playing");
    player.playVideo();
});