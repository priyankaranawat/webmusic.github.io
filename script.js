console.log("Welcome to spotify")

//Initialize the variables 
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Roy",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"kesariya",filePath: "songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Deva",filePath: "songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"apna bana le",filePath: "songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"hawayein",filePath: "songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"tera yaar hoon ",filePath: "songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"bezubaan",filePath: "songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"journey",filePath: "songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"piku",filePath: "songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"pikachu",filePath: "songs/10.mp3",coverPath:"covers/9.jpg"},
]
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innnerText=songs[i].songName;

    
})

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//listen to events 
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})  

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
})

const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{

        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        
        


        var x;
        if(e.target.id==0)
            x=0;
            if(e.target.id==1)
            x=1;
            if(e.target.id==2)
            x=2;
            if(e.target.id==3)
            x=3;
            if(e.target.id==4)
            x=4;
            if(e.target.id==5)
            x=5;
            if(e.target.id==6)
            x=6;
            if(e.target.id==7)
            x=7;
            if(e.target.id==8)
            x=8;
            if(e.target.id==9)
            x=9;
        songIndex=x;    

        masterSongName.innerText=songs[songIndex].songName;


    audioElement.src='songs/'+(songIndex+1)+'.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
        songIndex=0;
    else
       { songIndex+=1;} 
        audioElement.src='songs/'+(songIndex+1)+'.mp3';
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
        songIndex=0;
    else
       { songIndex-=1;} 
        audioElement.src='songs/'+(songIndex+1)+'.mp3';
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})