object = [];
video_lambo = "";
status_123 = "";

function preload()
{
    video_lambo = createVideo("video.mp4");
    video_lambo.hide();
}

function setup()
{
    canvas = createCanvas(750 ,500);
    canvas.center();

    video_cap = createCapture(VIDEO);
    video_cap.hide();
}

function draw()
{
    image(video_lambo ,0 , 0, 750 ,500)

    if(status_123 =! "")
    {
     object.detect(video_lambo ,gotResult);
     for (i = 0; i < object.lenght; i++)
     {
         document.getElementById("status").innerHTML = "Status : Object detected";
         document.getElementById("objects").innerHTML = "Number of objects detected are : "+ objects.length;

         fill("#FF0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
     }
    }
}

function video123()
{
 object = ml5.objectDetector("cocossd" , modelLoaded);
 document.getElementById("status").innerHTML = "Status : Detecting object";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status_123 = true;
    video_lambo.loop();
    video_lambo.speed(1.0);
    video_lambo.volume(2.5)
}

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }