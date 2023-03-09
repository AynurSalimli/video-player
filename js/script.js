const $ = (data) => document.querySelector(data);
const playPauseBtn = $(".play_pause");
const prevBtn = $(".prevBtn");
const nextBtn = $(".nextBtn");
const videoE1 = $("video");
const playlist = $(".playlist");
const progressBar = $('.progress-bar')
const progressBarControl = $(".progress-bar-control")




const videos = [
  {
    title: "4K Forest - Cinematic Forest - 4K Nature Video Ultra HD",
    time: "1: 50",
  },
  {
    title: "Paris in 4K",
    time: "4: 10",
  },
  {
    title: "COSTA RICA IN 4K 60fps HDR (ULTRA HD)",
    time: "5: 13",
  },
  {
    title: "Alaska in 8K 60p HDR  (Dolby Vision)",
    time: "4: 27",
  },
  {
    title: "Japan in 8K ULTRA HD - Land of The Rising Sun (60 FPS)",
    time: "5: 29",
  },
];



let currentVideo = 0;
let lastVideo = videos.length - 1;

function createElement() {
  videos.forEach((item, index) => {
    let playlistItem = document.createElement("div");
    playlistItem.setAttribute("data-title", `${item.title}`);
    playlistItem.classList = "playlist--item";
    playlistItem.innerHTML = `
    <img src="./images/${item.title}.jpg" alt="">
    <p>${
      item.title.length > 25 ? item.title.slice(0, 22) + "..." : item.title
    }</p>
    <span>${item.time}</span>
 `;

    playlist.appendChild(playlistItem);
    playlistItem.addEventListener("click", (e) => {
      currentVideo = index;
      changeVideo(index);
    });
  });
}

nextBtn.addEventListener("click", () => {
  if (currentVideo == lastVideo) {
    currentVideo = 0
  }
  else{
  currentVideo++;
  }
  changeVideo(currentVideo)
});

prevBtn.addEventListener("click", ()=>{
  if (currentVideo == 0) {  
    currentVideo = lastVideo;
  }
  else{
    currentVideo--;
  }
  changeVideo(currentVideo)
})

playPauseBtn.addEventListener("click", ()=>{
  if (videoE1.paused) {
    videoE1.play()
    playPauseBtn.innerHTML = "❚ ❚"
  }
  else{
    videoE1.pause();
    playPauseBtn.innerHTML = "►"

  }
})

videoE1.addEventListener("timeupdate", (e)=>{
 const {currentTime, duration} = videoE1;
 let percent = (currentTime / duration) * 100
 progressBar.style.width = percent + "%"
})

function changeVideo(index) {
  videoE1.src = `./videos/${videos[index].title}.mp4`;
  videoE1.play();
}

createElement();
