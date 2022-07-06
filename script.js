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
