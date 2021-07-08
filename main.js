var nose_y = 0
var nose_x = 0  
var nose_size = 60
function preload(){
clown_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet=ml5.poseNet(video, modelLoaded)
    posenet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("model is loaded!")
}
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x - nose_size/2  
        nose_y = results[0].pose.nose.y - nose_size/2    
        console.log("nose X="+nose_x)
        console.log("nose Y="+nose_y)
    }
}
function draw(){
image(video,0,0,300,300)
image(clown_nose,nose_x,nose_y,nose_size,nose_size)
}
function take_screenshot(){
    save("filtered_image")
}