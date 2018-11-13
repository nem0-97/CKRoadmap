//TODO: Figure out showing score change in submitAct(not giving it enough time?)

class Input{
  constructor(prompts,funct,msg,res){//Messages to show next to number inputs
    this.prompts=prompts;//for each prompt show it and input next to it
    this.msg=msg;
    this.res=res;//URL for external site with edu material to open in new tab
    this.funct=funct;

    this.inputs=[];
  }
  show(){//TODO:Figure out positions
      if(this.prompts.length==1){
        this.inputs.push(createInput(this.prompts[0]));
        this.inputs[0].position(width/2-30,height/4);
      }
      if(this.prompts.length==2){
        this.inputs.push(createInput(this.prompts[0]));
        this.inputs[0].position(width/4,height/4);

        this.inputs.push(createInput(this.prompts[1]));
        this.inputs[1].position(3*width/4,height/4);
      }

      let button = createButton('Continue');

      button.position(width/2,3*height/4);

      button["inpObj"]=this;

      button.mousePressed(function(){this.hide();this.inpObj.confirm();});
  }
  confirm(){//TODO: figure out positions
    for(let i=0;i<this.inputs.length;i++){
      this.inputs[i].hide();
    }
    //textSize(24);
    fill(0,0,255);
    textAlign(CENTER);
    text(this.msg,width/4,height/4,width/2,80);

    let butts=[];
    butts.push(createButton('Learn More'));
    butts.push(createButton('Yes'));
    butts.push(createButton('No'));


    butts[0].position(width/2,height/2);//TODO: Figure out position
    butts[0]['res']=this.res;
    butts[0].mousePressed(function(){window.open(this.res);});

    butts[1].position(width/4,3*height/4);//TODO: Figure out position
    butts[1]["inpObj"]=this;
    butts[1]['butts']=butts;
    butts[1].mousePressed(function(){this.inpObj.submitAct();
      for(let i=0;i<this.butts.length;i++){
          this.butts[i].hide();
        }});

    butts[2].position(3*width/4,3*height/4);//TODO: Figure out position
    butts[2]["inpObj"]=this;
    butts[2]['butts']=butts;
    butts[2].mousePressed(function(){this.inpObj.goHome();
      for(let i=0;i<this.butts.length;i++){
          this.butts[i].hide();
        }});
  }
  goHome(del){
    this.inputs=[];
    curScene=scenes[0];
    drawScene();
    if(del){
      fill(0);
      stroke(255);
      rect(width/2,height/8,width/9,height/10);
      fill(255);
      textAlign(CENTER);
      text('Your score changed by '+del+' points', width/2+10,height/8+10,width/9-20,height/10-20);
      //up to here
      setTimeout(function(){
            var col=(credScore-300)*255/550;
            fill(255-col,col,0);
            noStroke();
            rect(width/2,height/8,width/8,height/9);
            },5000);
    }
  }
  submitAct(){
    let inps=[];
    for(let i=0;i<this.inputs.length;i++){
      inps.push(Number(this.inputs[i].value()));
    }

    let del=this.funct(inps);
    this.goHome(del);
  }
}
