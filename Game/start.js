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




  inpScenes.push(new Input(['Enter oldest card age(months)','Enter 2nd oldest card age(months)'],closeCard,'The age of your credit history is important','https://www.creditkarma.com/credit-cards/i/how-to-cancel-credit-card/'));
  inpScenes.push(new Input(['Enter credit limit of new card'],newCard,'Opening a card can temporarily lower your score dues to a hard inqury','https://www.creditkarma.com/credit-cards?ckt=navClickL1'));
  inpScenes.push(new Input(['Enter amount for car loan'],carLoan,'For loans make sure to make payments on time to avoid hurting your credit score and help build it','https://www.creditkarma.com/shop/autos/index/type/newpurchase?ckt=navClickL2'));
  inpScenes.push(new Input([],function(){return 0;},'Checking your credit report on a site like Credit Karma does not hurt your credit score, this is considered a soft inquiry','https://www.creditkarma.com/'));
  inpScenes.push(new Input(['Enter number accounts past due','Enter number of months past due'],pastDue,'Making payments on time limits how much extra you pay in interest and helps impove your credit score','https://www.creditkarma.com/credit-cards/i/what-happens-if-you-miss-a-credit-card-payment/'));
  inpScenes.push(new Input(['Enter change in balance(- if paying it off)'],balChange,'How much of your credit limit is being utilized affects your credit score,(less than 30% is good usually)','https://www.creditkarma.com/credit-cards/i/carrying-a-balance-good-or-bad/'));
  inpScenes.push(new Input([],foreClose,'Foreclosure will hurt your credit score','https://help.creditkarma.com/hc/en-us/articles/360000023766-What-are-the-tax-effects-of-a-foreclosure-or-short-sale-of-my-home-'));
  inpScenes.push(new Input([],wageGarn,'Having your wages garnished is a bad sign and will harm you score','https://www.creditcards.com/credit-card-news/sandberg-rebuild-your-credit-after-wage-garnishment-1377.php'));
  inpScenes.push(new Input([],collections,'Having an account sent for collections is a bad sign and will harm you score','https://www.creditkarma.com/advice/i/accounts-in-collections/'));
  inpScenes.push(new Input([],denyCredit,'When you are declined for a credit application it will lower you score','https://www.creditkarma.com/advice/i/reapplying-after-credit-card-denied/'));
  inpScenes.push(new Input(['Enter amount for home loan'],homeLoan,'For loans make sure to make payments on time to avoid hurting your credit score and help build it','https://www.creditkarma.com/home-loans/mortgage-rates/educational'));
  inpScenes.push(new Input(['Enter amount for personal loan'],persLoan,'For loans make sure to make payments on time to avoid hurting your credit score and help build it, try to avoid unecessary loans','https://www.creditkarma.com/shop/personal-loans#newloans'));
  inpScenes.push(new Input(['Enter amount of credit limit increase'],limInc,'An increase in your credit limit is a good sign that you have been reliable and should help your score','https://www.creditkarma.com/credit-cards/i/how-to-ask-for-a-credit-limit-increase/'));
  inpScenes.push(new Input(['Enter amount of the balance transfering'],balTran,'Make sure you know about all the fees on a card you are transfering balance to','https://www.creditkarma.com/advice/i/how-does-a-balance-transfer-work/'));

  //TODO: Create option 'Scenes'
  let scene=[];
  //home scene
  scene.push(new Option(assets[2],1,width/4,height/4,true));//Opt that leads to option scene(bank one)
  scene.push(new Option(assets[3],3,width/4,height/2,false));//Opt that leads to scene(CK one)
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
