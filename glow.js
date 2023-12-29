let limit = 0;

let marker = 100;

let limit_int = marker/60;

let fill_c = 0;

let op_sc = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  fill(fill_c);
  rect(0,0,windowWidth, windowHeight);
  if(fill_c<255){
    glow();
  }
}

function glow(){
  for(let i = 0; i<limit ; i+=abs(limit_int)){
    noStroke();
    fill(255, i/7);
    ellipse(100, height-100, limit-i+10, limit-i+10);
  }
  limit=limit+limit_int;
  if(marker<400){
    if(limit>marker){
      limit_int=-limit_int;
    }
  }else{
    if(limit>marker){
        fill_c+=2;
    }
  }
  if(limit<0){
    marker=marker*2;
    limit_int=marker/60;
  }
}