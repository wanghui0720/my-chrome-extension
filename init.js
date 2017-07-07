document.body.addEventListener("onload",start(),false);
function start() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.shadowBlur=30;
    ctx.shadowColor="black";
    ctx.fillStyle="yellow";
    ctx.fillRect(20,20,100,80);
}