function setup() {
    createCanvas(800,800);

}
function draw() {

colorMode(RGB, 255,255,255,100);
background(145, 142, 230);

//NEW FIGURE
stroke(1);
//Alien legs
fill(207,72,119);
rect(400,520,30,60);
rect(430,520,30,60);

//Alien body
fill(28,121,214);
rect(400,400,60,120);

//Alien anteni
fill(180,79,219);
rect(410,267,15,50);
rect(435,267,15,50);
fill(173,114,181);
circle(417,260,25);
circle(443,260,25);

//Alien head
fill(183,0,255);
circle(430,355,90);

//Alien facial features
//Alien eye bags
fill(1,84,117);
circle(417,350,18);
circle(445,350,18);

//Alien eyes (main)
fill(255);
circle(415,347,18);
circle(443,347,18);

//Alien circles within the eyes
fill(0);
circle(413,345,4);
circle(441,345,4);

//Alien mouth
fill(255)
ellipse(430,375,8,10);

//Alien arms
//Left arm
fill(18,179,106);
triangle(400,480,350,450,400,420)
//Right arm
triangle(460,480,510,450,460,420)

//Main part
fill(112,110);
ellipse(540,120,230,95);
fill(211,211,230);
ellipse(540,105,170,70);

//Spaceship windows
fill(192,192,192);
circle(465,140,15);
circle(500,150,15);
circle(540,153,15);
circle(575,151,15);
circle(615,142,15);

//Spaceship rays
line(480,170,420,230);
line(600,170,645,230);

}
