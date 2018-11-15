function collision(x1,y1,xscale1,yscale1,x2,y2,xscale2,yscale2){
  return((x1<=x2&&x2<=x1+xscale1)&&((y1<=y2&&y2<=y1+yscale1)||(y2<=y1&&y1<=y2+yscale2)) || (x2<=x1&&x1<=x2+xscale2)&&((y1<=y2&&y2<=y1+yscale1)||(y2<=y1&&y1<=y2+yscale2)));
}
function newGame(){
  location.replace('start.html');
}
function windowResized() {
  resizeCanvas(innerWidth,innerHeight);
  drawScene();
}
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function sleep(milliseconds) {
  var start = new Date().getTime();
    while ((new Date().getTime() - start) < milliseconds){
    }
}
function drawScene(){
  clear();
  var col=(credScore-300)*255/550;
  background(255-col,col,0);
  charac.x=(width-height/12)/2;
  charac.y=9*height/20;
  charac.show();
  if(Array.isArray(curScene)){
    for(let i=0;i<curScene.length;i++){
      curScene[i].show();
    }
  }else{
    curScene.show();
  }
}

//To update credit score,limit and balance(13 functs)
function pastDue(inps){
  let delCred=inps[0]*-2*inps[1];
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function balChange(inps){
  let delCred=(inps[0])/(credLim*10);
  bal+=inps[0];
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function closeCard(inps){
  let delCred=(inps[0]-inps[1])*-2;
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function foreClose(){
  let delCred=-15
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function wageGarn(){
  let delCred=-20
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function collections(){
  let delCred=-22
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function denyCredit(){
  let delCred=-10
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function homeLoan(inps){
  let delCred;
  let amount=inps[0];
  if(amount<1000){
    delCred=-3;
  }else if(amount<5000){
    delCred=-6;
  }else if(amount<10000){
    delCred=-7;
  }else {
    delCred=-10;
  }
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function carLoan(inps){
  let delCred;
  let amount=inps[0];
  if(amount<1000){
    delCred=-4;
  }else if(amount<5000){
    delCred=-7;
  }else if(amount<10000){
    delCred=-9;
  }else {
    delCred=-11;
  }
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function persLoan(inps){
  let delCred;
  let amount=inps[0];
  if(amount<1000){
    delCred=-5;
  }else if(amount<5000){
    delCred=-8;
  }else if(amount<10000){
    delCred=-10;
  }else {
    delCred=-13;
  }
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function limInc(inps){
  let delCred=(bal/(credLim+inps[0]))-(bal/credLim)/10;
  credLim+=inps[0];
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function newCard(inps){
  let delCred=-10;
  credLim+=inps[0];
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
function balTran(inps){
  let delCred=-10;
  if(credScore+delCred>=300&&credScore+delCred<=850){
    credScore+=delCred;
  }
  return delCred;
}
