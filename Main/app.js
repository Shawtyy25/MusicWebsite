const playBtn = document.querySelector("#mainPlayBtn");
const audio = document.querySelector("#audio");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const trackTitle = document.querySelector(".track-title");
const artistName = document.querySelector(".artist-name");
const cover = document.querySelector(".cover");
const slider = document.querySelector(".slider");
const thumb = document.querySelector(".slider-thumb");
const progress = document.querySelector(".progress");
const time = document.querySelector(".time");
const fullTime = document.querySelector(".fulltime");
const volumeSlider = document.querySelector(".volume-slider .slider");
const volumeProgress = document.querySelector(".volume-slider .progress");
const volumeIcon = document.querySelector(".volume-icon");
const musicTopIcon = document.querySelector("#musicTopIcon");
const musicDropdown = document.querySelector(".musicDropdown");
const li1 = document.querySelector("#musicDropdownLi1");
const icon1 = document.querySelector("#musicDropdownIcon1");
const li2 = document.querySelector("#musicDropdownLi2");
const icon2 = document.querySelector("#musicDropdownIcon2");
const navDropdownProfile = document.querySelector(".navDropdownProfile");
const navDropdownProfileInteract = document.querySelector(".navDropdownProfileInteract");
const navDropdownNotificationsInteract = document.querySelector(".navDropdownNotificationsInteract");
const navDropdownNotifications = document.querySelector(".navDropdownNotifications");

window.addEventListener("load", () =>{
    document.querySelector(".loader").classList.add("loaderHidden");
    document.querySelector(".loader").addEventListener("transitionend", () =>{
        document.body.removeChild(document.querySelector(".loader"));
    })
});

// is the track playing
let trackPlaying = false;
// is the volume muted
let volumeMuted = false;
// which track is currently
let trackId = 0;

const tracks = [
    "Immortal",
    "No talk",
    "Enough",
    "Skylines"
];

const artists = [
    "NEFFEX",
    "VYEN",
    "",
    ""
];

const covers = [
    "musicpfp1",
    "musicpfp2",
    "musicpfp3",
    "musicpfp4"
];

playBtn.addEventListener("click", playTrack);


function playTrack(){
    if(trackPlaying === false){
        audio.play();
        playBtn.innerHTML = '<span class="musicIcons"><i class="fa-solid fa-stop"></i></span>';
        cover.style.animationName = "musicDisc"
        trackPlaying = true;
    } else{
        audio.pause();
        playBtn.innerHTML = '<span class="musicIcons"><i class="fa-solid fa-play"></i></span>';
        cover.style.animationName = ""
        trackPlaying = false;
    }
}

function switchTrack(){
    if (trackPlaying === true){
        audio.play();
    }
}

const trackSrc = '../Main/assets/tracks/' + tracks[trackId] + ".mp3";

function loadTrack(){
    audio.src = '../Main/assets/tracks/' + tracks[trackId] + ".mp3";
    audio.load();
    trackTitle.innerHTML = tracks[trackId];
    artistName.innerHTML = artists[trackId];
    cover.src = '../Main/assets/covers/' + covers[trackId] + ".jpg";
    progress.style.width = 0;
    thumb.style.left = 0;

    audio.addEventListener("loadeddata", () =>{
        setTime(fullTime, audio.duration);
        slider.setAttribute("max", audio.duration);
    });
}

loadTrack();

btnPrev.addEventListener("click", () =>{
    trackId--;
    if(trackId < 0){
        trackId = tracks.length - 1;
    }
    loadTrack();
    switchTrack();
});

btnNext.addEventListener("click", nextTrack);

function nextTrack(){
    trackId++;
    if(trackId > tracks.length - 1){
        trackId = 0;
    }
    loadTrack();
    switchTrack();
}

audio.addEventListener("ended", nextTrack)

function setTime(output, input) {
    const minutes = Math.floor(input / 60);
    const seconds = Math.floor(input % 60);
    if(seconds < 10){
        output.innerHTML = minutes + ":0" + seconds;
    } else{
        output.innerHTML = minutes + ":" + seconds;
    }
}

setTime(fullTime, audio.duration)

audio.addEventListener("timeupdate", () =>{
    const currentAudioTime = Math.floor(audio.currentTime);
    const timePercentage = (currentAudioTime / audio.duration) * 100 + "%";
    setTime(time, currentAudioTime)
    progress.style.width = timePercentage;
    thumb.style.left = timePercentage;
})

function customSlider(){
    const val = (slider.value / audio.duration) * 100 + "%";
    progress.style.width = val;
    thumb.style.left = val;
    setTime(time,slider.value);
    audio.currentTime = slider.value;
}

customSlider();

slider.addEventListener("input", customSlider);

let val;
function customVolumeSlider(){
    const maxVal = volumeSlider.getAttribute("max");
    val = (volumeSlider.value / maxVal) * 100 + "%";
    volumeProgress.style.width = val;
    audio.volume = volumeSlider.value / 100;

    if(audio.volume > 0.5) {
        volumeIcon.innerHTML = '<span class="musicIcons"><i class="fa-solid fa-volume-high"></i></span>';
    } else if (audio.volume === 0) {
        volumeIcon.innerHTML = '<span class="musicIcons"><i class="fa-solid fa-volume-xmark"></i></span>';
    } else {
        volumeIcon.innerHTML = '<span class="musicIcons"><i class="fa-solid fa-volume-low"></i></span>';
    }
}

customVolumeSlider();

volumeSlider.addEventListener("input", customVolumeSlider);

volumeIcon.addEventListener("click", () =>{
    if(volumeMuted === false) {
        volumeIcon.innerHTML = '<span class="musicIcons"><i class="fa-solid fa-volume-xmark"></i></span>';
        audio.volume = 0;
        volumeProgress.style.width = 0;
        volumeMuted = true;
    } else {
        volumeIcon.innerHTML = '<span class="musicIcons"><i class="fa-solid fa-volume-low"></i></span>';
        audio.volume = 0.5;
        volumeProgress.style.width = val;
        volumeMuted = false;
    }
});

musicClick = false;
musicTopIcon.addEventListener("click", () =>{
    if(musicClick === false){
        musicDropdown.style.display = "block";
        musicClick = true;
    } else{
        musicDropdown.style.display = "none"
        musicClick = false;
    }
});


li1.addEventListener("mouseover", () =>{
    icon1.style.color = "white";
});

li1.addEventListener("mouseout", () =>{
    icon1.style.color = "";
});



li2.addEventListener("mouseover", () =>{
    icon2.style.color = "white";
});

li2.addEventListener("mouseout", () =>{
    icon2.style.color = "";
});

dropdownProfilClick = false;
navDropdownProfileInteract.addEventListener("click", () =>{
    if (dropdownProfilClick === false){
        navDropdownProfile.style.display = "block";
        dropdownProfilClick = true;
    } else{
        navDropdownProfile.style.display = "none";
        dropdownProfilClick = false;
    }
});

dropdownNotifClick = false;
navDropdownNotificationsInteract.addEventListener("click", () =>{
    if (dropdownNotifClick === false){
        navDropdownNotifications.style.display = "block";
        dropdownNotifClick = true;
    } else{
        navDropdownNotifications.style.display = "none";
        dropdownNotifClick = false;
    }
});