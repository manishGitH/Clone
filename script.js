console.log("Welcome to spotify")
//Intializing variables
let songIndex=0;
let audioelement= new Audio('Choo Lo.mp3');
let masterPlay= document.getElementById('masterPlay');
let myBar= document.getElementById('myBar');
let gif=document.getElementById('gif');
let musicName = document.getElementById('musicName');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Choo Lo" ,filePath: "Choo loo.mp3", coverPath: "1.jpg"},
    {songName: "Teri Hogaiyaan" ,filePath: "Teri Hogyiyaan.mp3", coverPath: "2.jpg"},
    {songName: "Let me love you" ,filePath: "Choo loo.mp3", coverPath: "3.jpg"},
    {songName: "Despacito" ,filePath: "Despacito.mp3", coverPath: "4.jpg"},
    {songName: "We don't talk anymore" ,filePath: "We-Don't-Talk-Anymore---Charlie-Puth.mp3", coverPath: "5.jpg"},
    {songName: "Heartattack" ,filePath: "Heart-Attack.mp3", coverPath: "6.jpg"},
    {songName: "Believer" ,filePath: "Believer.mp3", coverPath: "7.jpeg"},
    
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play'); 
        masterPlay.classList.add('fa-circle-pause'); 
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-circle-pause'); 
        masterPlay.classList.add('fa-circle-play'); 
        gif.style.opacity = 0;
    }
})

//Listen to events
audioelement.addEventListener('timeupdate',()=>{
   // console.log('timeupdate');

//Update Seekbar
progress= parseInt((audioelement.currentTime/audioelement.duration)*100);

myBar.value=progress;
})

myBar.addEventListener('change',()=>{
    audioelement.currentTime=myBar.value * audioelement.duration/100;
})

const makeAllPlays=()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
        //console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src= `songs/${songIndex+1}.mp3`;
        musicName.innerText =  songs[songIndex].songName;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play'); 
        masterPlay.classList.add('fa-circle-pause'); 

     })
    })

    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=7){
            songIndex =0;
        }
        else{
            songIndex+=1;
        }
        audioelement.src= `songs/${songIndex+1}.mp3`;
        musicName.innerText =  songs[songIndex].songName;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play'); 
        masterPlay.classList.add('fa-circle-pause'); 

    })
    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex =0;
        }
        else{
            songIndex-=1;
        }
        audioelement.src= `songs/${songIndex+1}.mp3`;
        musicName.innerText =  songs[songIndex].songName;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-circle-play'); 
        masterPlay.classList.add('fa-circle-pause');
        
    })