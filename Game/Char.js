class Char{
  constructor(img,pet,x,y){
    this.img=img;
    this.comp=pet;
    this.x=x;
    this.y=y;
    this.w=height/12;
    this.h=height/10;
  }
  move(delX,delY){
    var col=(credScore-300)*255/550;
    fill(255-col,col,0);
    noStroke();
    rect(this.x,this.y,this.w,this.h);
    rect(this.x+3*this.w/4,this.y+this.h-this.w/4,this.w/4,this.w/4);

    while(!(this.x+delX>=0)){//could potentially move opposite direction requested
      delX+=10;
    }
    while(!(this.x+delX<=width-this.w)){
      delX-=10;
    }
    while(!(this.y+delY<=height-this.h)){//could potentially move opposite direction requested
      delY-=10;
    }
    while(!(this.y+delY>=0)){
      delY+=10;
    }
    this.x+=delX;
    this.y+=delY;

    this.show();
    if(Array.isArray(curScene)){//if has options
      for(let i=0;i<curScene.length;i++){
        if(collision(this.x,this.y,this.w,this.h,curScene[i].x,curScene[i].y,curScene[i].w,curScene[i].h)){
            if(curScene[i].opt){
              if(curScene[i].link!=-1){
                curScene=scenes[curScene[i].link];
              }else{
                newGame();
              }
            }else{
              curScene=inpScenes[curScene[i].link];
            }
            drawScene();
        }
      }
    }
  }
  show(){
    image(this.img,this.x,this.y,this.w,this.h);
    image(this.comp,this.x+this.w-this.w/4,this.y+this.h-this.w/4,this.w/4,this.w/4);
  }
}
