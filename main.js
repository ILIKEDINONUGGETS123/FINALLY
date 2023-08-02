difference = 0;
rightWristX = 0;
rightWristY = 0;
leftWristY = 0;
leftWristX = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 150);


canvas = createCanvas(550, 150);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPose);
}

function modelLoaded() {
  console.log('PoseNet is Initialized!');
}

function gotPose(results)
{
  if(results.length > 0)
  {
console.log(results);

  leftWristX = results[0].pose.leftWrist.x;
  rightWristX = results[0].pose.rightWrist.x;
  difference = floor(leftWristX - rightWristX);

  console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX = "difference = " + difference );
  }
}

function draw() {
  background('#6C91C2');

   document.getElementById("font_size").innerHTML = "font size of the text will be = " + difference +"px";
   textSize(difference);
   fill('#FFE787');
   text('Mercury', 50, 400);
}

