var canvas=document.getElementById("MyCanvas");
var c=canvas.getContext("2d");
var x=20;
var y=50;
var dx=2;
var dy=-2;
var r=20;
var paddleHeight=10;
var paddleWidth=100;
var paddleX = (canvas.width-paddleWidth) / 2;
var score=0;
function DrawPaddle()
{
    c.beginPath();
    c.rect(paddleX, canvas.height-paddleHeight-20, paddleWidth, paddleHeight);
    c.fillStyle="White";
    c.fill();
    c.closePath();
}
function drawBall()
{
    c.beginPath();
    c.arc(x,y,r,0,Math.PI*2);
    c.fillStyle="Yellow";
    c.fill();
    c.closePath();
}
function draw()
{
    c.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    x+=dx;
    y+=dy;
    if((x+dx)<r || (x+dx)>canvas.width-r)
    {
        dx=-dx;
    }
    else if((y+dy)<r) 
    {
        dy=-dy;
        
    }
    else if((y+dy)>canvas.height-r)
    {
        GetScore();
        clearInterval(yo);
    }
    else if( (canvas.height-paddleHeight-20)==(y+r) && ((paddleX-20)<=x && (paddleX+120)>=x ))
    {
        score=score+1;
        dy=-dy;
    }
    DrawPaddle();
}
function myFunctionL()
{
    paddleX-=20;
}
function myFunctionR()
{
    paddleX+=20;
}
var yo=setInterval(draw,10);
function GetScore()
{
    document.getElementById("scoretext").innerHTML = "<b>Your score is: </b>" + score;
}