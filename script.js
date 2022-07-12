console.log("Welcome to Spotify");

let songIndex=0;
let audioElement=new Audio('ganda-gana.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let songItems=Array.from(document.getElementsByClassName('songItems'));
let songs=[
    
    {songName: "Let Me Love You", filePath:"ganda-gana.mp3",coverPath:"covers/1.jpg"},
   // {songName: "Let Me Love You", filePath:"E:\downloads/1.mp3",coverPath:"covers/1.jpg"},
    //{songName: "Let Me Love You", filePath:"E:\downloads/1.mp3",coverPath:"covers/1.jpg"},
    //{songName: "Let Me Love You", filePath:"E:\downloads/1.mp3",coverPath:"covers/1.jpg"},
    //{songName: "Let Me Love You", filePath:"E:\downloads/1.mp3",coverPath:"covers/1.jpg"}
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
    
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    
    }
    
})

//listen to event
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
