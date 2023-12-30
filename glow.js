let limit = 0;

let marker = 100;

let limit_int = marker/60;

let fill_c = 0;

let op_sc = 1;

let set_trans = true;

let text_num = 0;

let text_c = 255;

let text_op = 0;

let set_video = true;

let show_link = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Dancing Script');
}

function draw(){
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  fill(fill_c);
  rect(0,0,windowWidth, windowHeight);
  if(fill_c<255){
    glow();
    textFont('Dancing Script');
    set_text();
    text_op-=5;
    if(text_op<0){
      text_op==0;
    }
    if(fill_c>150){
      if(set_video){
        vid_trans();
      }
      set_video=false;
    }
    if(fill_c>200){
      if(show_link){
        amaz_trans();
      }
      show_link=false;
    }
  }
}

function glow(){
  for(let i = 0; i<limit ; i+=abs(limit_int)){
    noStroke();
    fill(255, i/7);
    ellipse(width/10, height-height/10, limit-i+10, limit-i+10);
  }
  limit=limit+limit_int;
  if(marker<800){
    if(limit>marker){
      limit_int=-limit_int;
      text_num+=1;
      text_op=255;
    }
  }else if(limit>marker){
    fill_c+=2;
    if(set_trans){
        trans();
        text_num+=1;
        text_op=255;
    }
    set_trans=false;
  }
  if(limit<0){
    marker=marker*2;
    limit_int=marker/60;
  }
}

function set_text(){
    textAlign(CENTER);
    textFont('Dancing Script');
    if(text_num==1){
      textFont('Dancing Script');
        fill(text_c, text_op);
        textSize(width*height/9000);
        text('Light', width/2, height/2);
    }
    if(text_num==2){
        fill(text_c, text_op);
        textSize(width*height/9000);
        text('Will', width/2, height/2);
    }
    if(text_num==3){
        fill(text_c, text_op);
        textSize(width*height/9000);
        text('Win', width/2, height/2);
    }
    if(text_num==4){
        fill(text_c, text_op);
        textSize(width*height/7000);
        text('Out!', width/2, height/2);
    }
}