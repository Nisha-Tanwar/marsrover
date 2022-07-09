canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
//Array_nasa=["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg"];
//random_num=Math.floor(Math.randon()*4);
//console.log(random_num);
//backgroundimg=Array_nasa[random_num];
//console.log("backgroundimg="+backgroundimg);

nasa_mars_images_array = ["nasa1.jpg", "nasa2.jpeg", "nasa3.jpg", "nasa4.jpg"];
 random_number = Math.floor(Math.random() * 4);
  console.log(random_number);
   backgroundimg = nasa_mars_images_array[random_number];
    console.log("background_image = " + backgroundimg);

roverwidth=100;
roverheight=90;
roverx=10;
rovery=10;
roverimg="rover.png";
function add()
{
    background_img_tag=new Image();
    background_img_tag.onload=uploadbackground;
    background_img_tag.src=backgroundimg;

    rover_img_tag=new Image();
    rover_img_tag.onload=uploadrover;
    rover_img_tag.src=roverimg;
    
}

function uploadbackground()
{
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover_img_tag,roverx,rovery,roverwidth,roverheight);
}
window.addEventListener("keydown",mykeydown);

function mykeydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='37')
    {
        Left();
        console.log("Left");
    }
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
}

function Left()
{
    if(roverx>=0)
    {
        roverx=roverx-10;
        console.log("when Left arrow pressed, x="+roverx+ "y="+rovery);
        uploadbackground();
        uploadrover();

        
    }
}

function right()
{
    if(roverx<=700)
    {
        roverx=roverx+10;
        console.log("when right arrow pressed, x="+roverx+ "y="+rovery);
        uploadbackground();
        uploadrover();
        
        
    }
}

function up()
{
    if(rovery>=0)
    {
        rovery=rovery-10;
        console.log("when up arrow pressed, x="+roverx+ "y="+rovery);
        uploadbackground();
        uploadrover();
        
        
    }
}

function down()
{
    if(rovery<=500)
    {
        rovery=rovery+10;
        console.log("when down arrow pressed, x="+roverx+ "y="+rovery);
        uploadbackground();
        uploadrover();
        
        
    }
}