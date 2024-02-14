console.log("welcome to spotify");

let songIndex= 0;
let audioelement = new Audio('./songs/1.mp3');
let masterplay = document.getElementById("masterplay");
let myProgressbar= document.getElementById("myProgressbar");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs =[
    {song:"Justin biber", filePath:"./songs/1.mp3", coverpath:"./covers/1.jpg"},
    {song:"Justin biber", filePath:"./songs/2.mp3", coverpath:"./covers/2.jpg"},
    {song:"Justin biber", filePath:"./songs/3.mp3", coverpath:"./covers/3.jpg"},
    {song:"Justin biber", filePath:"./songs/4.mp3", coverpath:"./covers/4.jpg"},
    {song:"Justin biber", filePath:"./songs/5.mp3", coverpath:"./covers/5.jpg"},
    {song:"Justin biber", filePath:"./songs/6.mp3", coverpath:"./covers/6.jpg"},
    {song:"Justin biber", filePath:"./songs/7.mp3", coverpath:"./covers/7.jpg"},
    {song:"Justin biber", filePath:"./songs/8.mp3", coverpath:"./covers/8.jpg"},
    {song:"Justin biber", filePath:"./songs/9.mp3", coverpath:"./covers/9.jpg"},
    {song:"Justin biber", filePath:"./songs/10.mp3", coverpath:"./covers/10.jpg"}
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].song;
})

masterplay.addEventListener("click",()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-play-circle')
        gif.style.opacity=0;
    }
})
audioelement.addEventListener("timeupdate",()=>{
    progress =parseInt((audioelement.currentTime/audioelement.duration)*100);
    myProgressbar.value=progress;
});
myProgressbar.addEventListener("change",()=>{
    audioelement.currentTime = myProgressbar.value*audioelement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove('fa-pause-circle')
    element.classList.add('fa-play-circle')
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioelement.src = `songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].song;
        audioelement.currentTime =0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex=0;
    }
    else{
       songIndex += 1; 
    }
audioelement.src = `songs/${songIndex+1}.mp3`
masterSongName.innerText = songs[songIndex].song;
        audioelement.currentTime =0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex=9;
    }
    else{
       songIndex -= 1; 
    }
audioelement.src = `songs/${songIndex+1}.mp3`
masterSongName.innerText = songs[songIndex].song;
audioelement.currentTime =0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
})