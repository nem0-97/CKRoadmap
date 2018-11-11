class Option{
  constructor(img,link,x,y,opt){//link is scene to go to/inputs to get when collide with this option
    this.link=link;//Just a number
    this.opt=opt; //True if leads to another scene with options, false if leads to input
    this.x=x;
    this.y=y;
    this.img=img;
    this.w=height/12;
    this.h=height/10;
  }
  show(){
    image(this.img,this.x,this.y,this.w,this.h);
  }
}
