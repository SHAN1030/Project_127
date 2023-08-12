function setup(){
    canvas = createCanvas(600,600);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose', gotPoses);
} 


function draw(){
    image(video, 0, 0, 600, 600);
}

song = "";
song2 = "";
leftwristx = "";
leftwristy = "";
rightwristx = "";
rightwristy = "";

function preload(){
    song = loadSound("disco.mp3");
    song2 = loadSound("pangea.mp3");
    console.log("Sounds Loaded")
}

function play(){
    song.play();
}

function modelloaded(){
    console.log("The poseNet is loaded.");
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
leftwristx = results[0].pose.leftWrist.x;
leftwristy = results[0].pose.leftWrist.y;
rightwristx = results[0].pose.rightWrist.x;
rightwristy = results[0].pose.rightWrist.y;
console.log(leftwristx + leftwristy + rightwristx + rightwristy);
}
}