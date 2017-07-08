window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}

posX=posY=10;
tyleCount=25;
gridSize=600/tyleCount;
objX=objY=15;
xVelocity=yVelocity=0;
trail=[];
origL=5;
tail = origL;


function game() {
    posX+=xVelocity;
    posY+=yVelocity;
    if(posX<0) {
        posX= tyleCount-1;
        alert('game over');
    }
    if(posX>tyleCount) {
        posX= 0;
        alert('game over');
    }
    if(posY<0) {
        posY= tyleCount-1;
        alert('game over');
    }
    if(posY>tyleCount) {
        posY= 0;
        alert('game over');
    }
    /*setting up the background*/
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    /***************************/

    /*drawing the snake "tail"*/
    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gridSize,trail[i].y*gridSize,gridSize-2,gridSize-2);
        if(trail[i].x==posX && trail[i].y==posY && (xVelocity != 0 || yVelocity != 0)) {
            //detects collisions, reset to original length
            tail = origL;
            alert('game over');
        }
    }
    /***************************/
    trail.push({x:posX,y:posY});
    while(trail.length>tail) {
        trail.shift();
    }
    /*An apple a day keeps the snake growing*/
    if(objX==posX && objY==posY) {
        tail++;
        objX=Math.floor(Math.random()*tyleCount);
        objY=Math.floor(Math.random()*tyleCount);
    }
    ctx.fillStyle="red";
    ctx.fillRect(objX*gridSize,objY*gridSize,gridSize-2,gridSize-2);
    /****************************************/
}


function keyPush(evt) {
    switch(evt.keyCode) {
        case 37: //left
            xVelocity=-1;yVelocity=0;
            break;
        case 38: //up
            xVelocity=0;yVelocity=-1;
            break;
        case 39: //right
            xVelocity=1;yVelocity=0;
            break;
        case 40: //down
            xVelocity=0;yVelocity=1;
            break;
    }
}