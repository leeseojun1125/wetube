const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
// let videoPlayer;
// 전역 변수로 선언. 다른 함수에서도 사용.

function handlePlayClick() {
  //버튼을 클릭하면
  if (videoPlayer.paused) {
    //video가 멈춰 있을때
    videoPlayer.play(); //video를 재생해라
  } else {
    videoPlayer.pause(); //재생중이면 멈춰라
  }
}

function init() {
  // const videoPlayer = videoContainer.querySelector("video");
  //init 함수 안에서만 사용 가능함.
  playBtn.addEventListener("click", handlePlayClick);
}

if (videoContainer) {
  init();
}
// videoContatiner가 있으면 init 함수 실행
