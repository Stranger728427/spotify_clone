<<<<<<< HEAD
console.log("Welcome to Spotify");
// initialize the variable
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from (document.getElementsByClassName('songItems'));
let songs=[
    
    {songName: "Let Me Love You", filePath:"ganda-gana.mp3/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Let Me Love You", filePath:"E:\downloads/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Let Me Love You", filePath:"E:\downloads/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Let Me Love You", filePath:"E:\downloads/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Let Me Love You", filePath:"E:\downloads/1.mp3",coverPath:"covers/1.jpg"}
]

songItems.forEach((element,i)=>{
    console.log(element,i)
  element.getElemenstByTagName("img")[0].src=songs[i].filePath;
})


//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    
})

//listen to event
audioElement.myProgressBar.addEventListener('time' ,()=>{
console.log('timeupdate');
//update Seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value=progress;

})
 myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
 })
=======
console.log("Welcome to Spotify");
// initialize the variable
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songs=[
    
    {songName: "Let Me Love You", filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Let Me Love You", filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Let Me Love You", filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Let Me Love You", filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
]


//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

//listen to event
myProgressBar.addEventListener('time',()=>{
console.log('timeupdate');
//update Seekbar

})
>>>>>>> 717d5fa425f9afbc935e046a3e714d6cacd4cca2
