const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg = "sunrise1.png";


function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);    
    }else{
        background(247, 128, 15);
    }
    // add condition to check if any background image is there to add

    ;
    Engine.update(engine);

    // write code to display time in correct format here
        time();    
    text("Time: " + final + " AM",width-1300,100);
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var fetchhe = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var json = await fetchhe.json();
    var split = json.datetime;

    // write code slice the datetime
    var cut = split.slice(11,13);

   // text("Time: " + cut + " AM",width-100,100);
    // add conditions to change the background images from sunrise to sunset

    if(cut >= 01 && cut < 03){
       bg = "sunrise1.png"
    }else if(cut >= 03 && cut < 05){
        bg = "sunrise2.png"
    }else if(cut >= 05 && cut < 07){
        bg = "sunrise3.png"
    }else if(cut >=  07&& cut <09 ){
        bg = "sunrise4.png"
    }else if(cut >=  09&& cut < 11){
        bg = "sunrise5.png"
    }else if(cut >= 11 && cut < 13){
        bg = "sunrise6.png"
    }else if(cut >= 13 && cut < 15){
        bg = "sunset7.png"
    }else if(cut >=  15 && cut < 17){
        bg = "sunset8.png"
    }else if(cut >= 17 && cut < 19){
        bg = "sunset9.png"
    }else if(cut >=  19&& cut <21 ){
        bg = "sunset1png"
    }else if(cut >=  21&& cut < 23){
        bg = "sunset11.png"
    }else if(cut >=  23&& cut < 24){
        bg = "sunset12.png"
    }
     

    //load the image in backgroundImg variable here
     backgroundImg = loadImage(bg);
}

async function time(){

var put = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var getJson = await put.json();
var getDatetime = getJson.datetime;    
var final = getDatetime.slice(11,13)
}
