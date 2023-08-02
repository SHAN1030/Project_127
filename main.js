function setup(){
    canvas = createCanvas(600,600);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function draw(){
    image(video, 0, 0, 600, 600);
}

song = "";
song2 = "";

function preload(){
    song = loadSound("disco.mp3");
    song2 = loadSound("pangea.mp3");
    console.log("Sounds Loaded")
}

function play(){
    song.play();
}