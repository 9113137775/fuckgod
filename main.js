song1 = "";
song2 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
scoreLeftWrist = 0;
function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide()
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
    }
    function modelLoaded() {
        console.log("PoseNet is Initialized.")
    }
    function gotPoses(results) {
        if (results.length > 0){
            console.log(results);
            scoreLeftWrist = results[0].poses.
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            console.log("LeftWristX :"+ leftWristX+ "LeftWristY :" + leftWristY);
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y; 
        }
    }
    function draw()
{
    image(video, 0, 0, 600, 500);
}

function play() {
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}