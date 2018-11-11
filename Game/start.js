let credScore=Number(getParameterByName('cred'));
let credLim=Number(getParameterByName('credLim'));
let bal=Number(getParameterByName('bal'));

if(credScore==0){
  credScore=300;
}

var inpScenes=[]//array containig inputobj
var scenes=[];//Array of arrays of options(maybe make scene object to also contain graphics)
var curScene;
var charac;
var assets=[];//All images needed for first scene(home)

function preload(){
  //TODO: really only need to load in assests for first scene here
  //(the rest should finish loading by the time user has moved to another scene since loaded from setup)
  //but need to load them fist isnce changed option's constructor

  //Character assets
  assets.push(loadImage('Assets/char.png'));
  assets.push(loadImage('Assets/pet.png'));

  //First scene's options
  assets.push(loadImage('Assets/bank.png'));
  assets.push(loadImage('Assets/CK.png'));
  assets.push(loadImage('Assets/car.png'));
  assets.push(loadImage('Assets/closeCard.png'));
  assets.push(loadImage('Assets/creditCard.png'));
}

function setup() {
  createCanvas(innerWidth,innerHeight);

  charac=new Char(assets[0],assets[1],(width-height/12)/2,9*height/20);

  //TODO:Create input Scenes(one for each function)
  inpScenes.push(new Input(['Enter oldest card age(months)','Enter 2nd oldest card age(months)'],closeCard,'The age of your credit history is important','https://google.com'));
  inpScenes.push(new Input(['Enter credit limit of new card'],newCard,'Opening a card can temporarily lower your score dues to a hard inqury','https://youtube.com'));
  inpScenes.push(new Input(['Enter amount for car loan'],carLoan,'For loans make sure to make payments on time to avoid hurting your credit score and help build it','https://youtube.com'));

  //TODO: Create option 'Scenes'
  let scene=[];
  //home scene
  scene.push(new Option(assets[2],1,width/4,height/4,true));//Opt that leads to option scene(bank one)
  scene.push(new Option(assets[3],1,width/4,height/2,true));//Opt that leads to scene(CK one)
  scene.push(new Option(assets[4],2,width/4,3*height/4,false));//Opt that leads to input scene(car one)
  scenes.push(scene);

  //bank scene
  scene=[];
  scene.push(new Option(assets[5],0,width/4,height/4,false));//Opt that leads to inputs scene(close card)
  scene.push(new Option(assets[6],1,3*width/4,height/4,false));//Opt that leads to inputs scene(open card)
  scenes.push(scene);

  //mall scene...
  scene=[];

  //start at home
  curScene=scenes[0];
  drawScene();
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    charac.move(-100,0);
  } else if (keyCode === RIGHT_ARROW) {
    charac.move(100,0);
  }else if (keyCode === UP_ARROW) {
    charac.move(0,-100);
  }else if (keyCode === DOWN_ARROW) {
    charac.move(0,100);
  }
}
