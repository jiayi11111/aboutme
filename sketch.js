let data;
let button;
let inputfield;
let answer = "";
let chatbox;
let robot;
let speakingbot;
let displayTime = 0;


function preload() {
  data = loadJSON("Class.Json");
  chatbox=loadImage('chatbox.png');
  // robot=loadImage('robot.png');
  robot=loadImage('memain.gif');
  speakingbot=loadImage('aboutremove.gif')
}

function setup() {
  // createCanvas(1000, 1000);
  //createCanvas() with screen weidth and height
  createCanvas(windowWidth, windowHeight);
 


  inputfield = createInput("");
   inputfield.size(450, 30);
  
   inputfield.position(340, 150);

  button = createButton("Answer");
  button.size(90, 30);
  button.position(810, 155);
  button.style("background-color", "white");

  button.mousePressed(answerme);
}

function answerme() {
  let str = inputfield.value();
  str = str.toLowerCase();
  console.log(str);

  loop1: for (let i = 0; i < data.brain.length; i++) {
    loop2: for (let j = 0; j < data.brain[i].triggers.length; j++) {
      if (str.indexOf(data.brain[i].triggers[j]) !== -1) {
        answer = random(data.brain[i].responses);
        
        let img=createImg(data.brain[i].url);
        img.position(1185,560);
        img.size(200,200);
        displayTime = 0.1;


        break loop1;
      } else {
        answer = random(data.catchall);
      }
    }
  }
}

function draw() {
  background(255, 240, 245);
  text(answer, 810, 400);
  textSize(17);
  textAlign(CENTER, CENTER);

    //  image(robot, 40, 400, 450, 450);
    // image(chatbox, 290, 250, 950, 420);
    if (answer.length > 0) {
       image(chatbox, 290, 250, 950, 420+answer.length/2);
       if (displayTime > 0 && displayTime < 9000) {
        image(speakingbot,40, 400, 450, 450);
        displayTime += frameRate();
      }
     
  
    } if (displayTime >= 9000) {
      image(robot, 40, 400, 450, 450);

    }
    



  
}


