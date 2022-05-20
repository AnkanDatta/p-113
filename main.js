function setup()
{
    canvas = createCanvas(680, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.show();

    
}

function draw()
{
    image(video, 150, 150, 250, 250);

    fill(255, 0, 0);
    circle(100, 50, 100);

    fill(60, 179, 113);
    rect(140, 35, 400, 30);

    fill(255, 0, 0);
    circle(550, 50, 100);

    fill(60, 179, 113);
    rect(535, 100, 30, 400);

    fill(255, 0, 0);
    circle(548, 430, 100);

    fill(60, 179, 113);
    rect(100, 420, 400, 30);

    fill(255, 0, 0);
    circle(100, 430, 100);

    fill(60, 179, 113);
    rect(90, 100, 30, 285);
}
    

function take_snapshot()
{
    save('snapshot.png');
}

