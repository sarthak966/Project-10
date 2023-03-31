var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["04710e27-2761-4223-b6c3-f66a925f5ca5","3b0a9fc1-9362-48ac-9381-80cc47d4404c","bae10bbe-784d-441e-8b54-4895d699e524","2a3d7332-e891-46bc-a46a-baba0e65ca46","99ff1b1a-b55c-4335-9c81-6cc2b6f93138","2771f2d7-1156-4e51-bebc-4a3975ae9cc1","58b27251-6d3c-41bf-aa0a-7d12d2776de6","c283d16e-4351-42ae-987b-b8af23c96722"],"propsByKey":{"04710e27-2761-4223-b6c3-f66a925f5ca5":{"name":"animalhead_chick_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5HVhgKMjWOBXHX_ce7zDr35W6rKKzF5R/category_animals/animalhead_chick.png","frameSize":{"x":268,"y":336},"frameCount":1,"looping":true,"frameDelay":1,"version":"5HVhgKMjWOBXHX_ce7zDr35W6rKKzF5R","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":268,"y":336},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5HVhgKMjWOBXHX_ce7zDr35W6rKKzF5R/category_animals/animalhead_chick.png"},"3b0a9fc1-9362-48ac-9381-80cc47d4404c":{"name":"Ph03nyx-Super-Mario-Retro-Mario-2.24 (1).png_1","sourceUrl":"assets/v3/animations/cTrjNl9AzEtGIgIkLiIsBVkMcYDhNIoXHl7RKJxN9Ms/3b0a9fc1-9362-48ac-9381-80cc47d4404c.png","frameSize":{"x":24,"y":24},"frameCount":1,"looping":true,"frameDelay":4,"version":"1FwW4NkvTqRUalGhTlcYTWzpGua_wCJH","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":24},"rootRelativePath":"assets/v3/animations/cTrjNl9AzEtGIgIkLiIsBVkMcYDhNIoXHl7RKJxN9Ms/3b0a9fc1-9362-48ac-9381-80cc47d4404c.png"},"bae10bbe-784d-441e-8b54-4895d699e524":{"name":"Ph03nyx-Super-Mario-Retro-Mario-2.64.png_1","sourceUrl":"assets/v3/animations/cTrjNl9AzEtGIgIkLiIsBVkMcYDhNIoXHl7RKJxN9Ms/bae10bbe-784d-441e-8b54-4895d699e524.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"yiqCqW0bwylGE.VOBKkkL4EAhHi3NgPg","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/cTrjNl9AzEtGIgIkLiIsBVkMcYDhNIoXHl7RKJxN9Ms/bae10bbe-784d-441e-8b54-4895d699e524.png"},"2a3d7332-e891-46bc-a46a-baba0e65ca46":{"name":"Ph03nyx-Super-Mario-Retro-Mario-2.48.png_1","sourceUrl":null,"frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"uwmgrrQOVSH6qKXhvZLRVJa1O6DG2HsY","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/2a3d7332-e891-46bc-a46a-baba0e65ca46.png"},"99ff1b1a-b55c-4335-9c81-6cc2b6f93138":{"name":"mario.png_1","sourceUrl":"assets/v3/animations/cTrjNl9AzEtGIgIkLiIsBVkMcYDhNIoXHl7RKJxN9Ms/99ff1b1a-b55c-4335-9c81-6cc2b6f93138.png","frameSize":{"x":48,"y":48},"frameCount":1,"looping":true,"frameDelay":4,"version":"l1mORDmFXVkkxR07rdTHo5Hjo0cdFm4T","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":48,"y":48},"rootRelativePath":"assets/v3/animations/cTrjNl9AzEtGIgIkLiIsBVkMcYDhNIoXHl7RKJxN9Ms/99ff1b1a-b55c-4335-9c81-6cc2b6f93138.png"},"2771f2d7-1156-4e51-bebc-4a3975ae9cc1":{"name":"icons8-waluigi-35.png_1","sourceUrl":"assets/v3/animations/cTrjNl9AzEtGIgIkLiIsBVkMcYDhNIoXHl7RKJxN9Ms/2771f2d7-1156-4e51-bebc-4a3975ae9cc1.png","frameSize":{"x":35,"y":35},"frameCount":1,"looping":true,"frameDelay":4,"version":"SVTMc2ZOn_rVSH9i4jSsfk5GjP6ujxzo","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":35},"rootRelativePath":"assets/v3/animations/cTrjNl9AzEtGIgIkLiIsBVkMcYDhNIoXHl7RKJxN9Ms/2771f2d7-1156-4e51-bebc-4a3975ae9cc1.png"},"58b27251-6d3c-41bf-aa0a-7d12d2776de6":{"name":"gameplayadventure_06_1","sourceUrl":null,"frameSize":{"x":271,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"uz.rwVlmjWtKA3sqDbYsKMwEmgPCftAR","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":271,"y":396},"rootRelativePath":"assets/58b27251-6d3c-41bf-aa0a-7d12d2776de6.png"},"c283d16e-4351-42ae-987b-b8af23c96722":{"name":"icons8-doll-35.png_1","sourceUrl":"assets/v3/animations/cTrjNl9AzEtGIgIkLiIsBVkMcYDhNIoXHl7RKJxN9Ms/c283d16e-4351-42ae-987b-b8af23c96722.png","frameSize":{"x":35,"y":35},"frameCount":1,"looping":true,"frameDelay":4,"version":"bkCY5Fu.piBYZGxTXqdya2bQvH9vV3fC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":35},"rootRelativePath":"assets/v3/animations/cTrjNl9AzEtGIgIkLiIsBVkMcYDhNIoXHl7RKJxN9Ms/c283d16e-4351-42ae-987b-b8af23c96722.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var land=createSprite(200,400,400,150);
land.shapeColor="green";

var mario=createSprite(200,315,48,48);
mario.velocityY=5;

var queen=createSprite(375,25,20,20);
queen.shapeColor="pink";
queen.setAnimation("icons8-doll-35.png_1");

mario.setAnimation("Ph03nyx-Super-Mario-Retro-Mario-2.48.png_1");

var mx=250;
var w1=createSprite(150,230,10,10);
w1.shapeColor="green";
if(mario.y<230){
      w1="";
    }
    else{
      w1=createSprite(150,230,360,10);
      w1.shapeColor="green";
       mario.bounceOff(w1);
    }

var w2=createSprite(250,50,400,10);
w2.shapeColor="green";

var w4=createSprite(250,45,400,10);
w4.shapeColor="brown";

var w3=createSprite(380,140,310,10);
w3.shapeColor="green";

var w6=createSprite(80,160,200,10);
w6.shapeColor="green";

var w5=createSprite(100,350,200,10);



var b1=createSprite(205,230,40,40);
b1.shapeColor="brown";
var b2=createSprite(250,230,40,40);
b2.shapeColor="brown";
var b3=createSprite(295,230,40,40);
b3.shapeColor="brown";


var b4=createSprite(55,130,40,40);
b4.shapeColor="brown";
var b5=createSprite(100,130,40,40);
b5.shapeColor="brown";
var b6=createSprite(145,130,40,40);
b6.shapeColor="brown";


var enemy=createSprite(350,140,20,20);
enemy.setAnimation("icons8-waluigi-35.png_1");
enemy.velocityX=-5;

var e2=createSprite(405,140,40,40);
e2.velocityX=-5;
e2.setAnimation("icons8-waluigi-35.png_1");

var e3=createSprite(460,140,40,40);
e3.velocityX=-5;
e3.setAnimation("icons8-waluigi-35.png_1");

var e4=createSprite(505,140,40,40);
e4.velocityX=-5;
e4.setAnimation("icons8-waluigi-35.png_1");

var b8=createSprite(380,305,45,45);



function draw(){
  background("white");
  mario.collide(land);
  mario.collide(b1);
mario.collide(b2);
mario.collide(b3);
mario.collide(b4);
mario.collide(b5);
mario.collide(b6);

mario.collide(b8);
 
  mario.bounceOff(w2);
  mario.bounceOff(w3);
  mario.bounceOff(w4);
  
  
    if(keyDown("space")){
      mario.velocityY=-10;
      playSound("assets/category_jump/classic_jump_2.mp3");
      
      
    }
    else{
      mario.velocityY=5;
    }
    
  
    
    
    if(keyDown("left")){
      mario.x=mario.x-5;
      mario.setAnimation("mario.png_1");
      playSound("assets/category_movement/footstep_on_gravel_3.mp3");
    }
    
    if(keyDown("right")){
      mario.x=mario.x+5;
      mario.setAnimation("Ph03nyx-Super-Mario-Retro-Mario-2.48.png_1");
      playSound("assets/category_movement/footstep_on_gravel_3.mp3");
    }
    
    if(mario.isTouching(enemy)){
      mario.x=200;
      mario.y=315;
      playSound("assets/category_alerts/playful_game_error_sound_4.mp3");
    }
    if(mario.isTouching(e2)){
      mario.x=200;
      mario.y=315;
       playSound("assets/category_alerts/playful_game_error_sound_4.mp3");
    }
    if(mario.isTouching(e3)){
      mario.x=200;
      mario.y=315;
      playSound("assets/category_alerts/playful_game_error_sound_4.mp3");
    }
    if(mario.isTouching(e4)){
      mario.x=200;
      mario.y=315;
      playSound("assets/category_alerts/playful_game_error_sound_4.mp3");
    }
    
    if(enemy.x<-5){
      enemy.x=405;
    }
    
    if(e2.x<-10){
      e2.x=410;
    }
    
    if(mario.x<-5 || mario.x>405){
       mario.x=200;
      mario.y=315;
      playSound("assets/category_alerts/playful_game_error_sound_4.mp3");
    }
    
    if(e3.x<-10){
      e3.x=420;
    }
    if(e4.x<-10){
      e4.x=430;
    }
    
    if(mario.isTouching(queen)){
      textSize(20);
      fill("green");
      text("You saved the Queen",100,20);
      playSound("assets/category_notifications/playful_quirky_positive_game_cue_2.mp3");
    }
    else{
      textSize(25);
      fill("red");
      text("Save the Queen",10,270);
    }
    
    
    
    
    
    
  
  
  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
