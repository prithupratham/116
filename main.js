noseX = "0";
noseY = "0";
function preload(){
    clown_nose = loadimage('https://i.postimg.cc/gkxW6Mnj/clown-nose-clipart-2.png');
}
function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet Is Initialized');
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose x =" + noseX);
console.log("nose y =" + noseY);
}
}
function draw(){
    image(video,0,0,350,350);
    fil(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}
function Takesnapshot(){
    save('filterimg.png');
}
