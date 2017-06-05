// JAVASCRIPT BACKGROUND CODE p5js.org. 
// Modifications made and noted under the creative commons license, which allows
// Adapt — remix, transform, and build upon the material
// @edited by Grace Guan, 12/16/16

var horiztonal;
var teal, lime;

// TURTLE STUFF:
var x, y; // the current position of the turtle
var x2, y2; // the current position of the turtle
var currentangle = 30; // which way the turtle is pointing
var step = 10; // how much the turtle moves with each 'F'
var angle = 30; // how much the turtle turns with a '-' or '+'
var currentangle2 = -150; // which way the turtle is pointing
var angle2 = -30;

// LINDENMAYER STUFF (L-SYSTEMS)
var thestring = 'A'; // "axiom" or start of the string
var thestring2 = 'A'; // duplicate
var numloops = 5; // how many iterations to pre-compute
var therules = []; // array for rules
therules[0] = ['A', '-BF+AFA+FB-']; // first rule
therules[1] = ['B', '+AF-BFB-FA+']; // second rule
//therules[1] = ['B', '−[[B]+B]+F[+BX]−X']; // second rule

var whereinstring = 0; // where in the L-system are we?
var whereinstring2 = 0; // where in the L-system are we?

function setup() {
  var thisCanvas = createCanvas(windowWidth, windowHeight);
  thisCanvas.parent('default');
  horizontal = false;
  teal = color('#2fd0d0');
  lime = color('#89e389');

  frameRate(60);
  background(0);
  stroke(0, 0, 0, 0);
  
  // start the x and y position at lower-left corner
  x = 0;
  y = height / 2 - 7;
    x2 = width;
  y2 = height / 2 - 7;
  
  /**for (i = 0; i < 45; i++) {
        var newX = randomGaussian(windowWidth * 4, windowWidth * 4);
        var newY = randomGaussian(windowHeight / 2, windowHeight / 10);
        if (i % 2 == 0) {
            stroke(teal);
            line(newX,0,newX,windowHeight);
        } 
        else {
            stroke(lime);
            line(0,newY,windowWidth,newY);
        }
    }**/
  
  // COMPUTE THE L-SYSTEM
  for (var i = 0; i < numloops; i++) {
    thestring = lindenmayer(thestring);
    thestring2 = lindenmayer(thestring2);
  }
}

function draw() {
    
  
  // draw the current character in the string:
  drawIt(thestring[whereinstring]); 
  drawIt2(thestring2[whereinstring2]); 
  
  // increment the point for where we're reading the string.
  // wrap around at the end.
  whereinstring++;
  whereinstring2++;
  if (whereinstring > thestring.length-1) whereinstring = 0;
  if (whereinstring2 > thestring2.length-1) whereinstring2 = 0;

}

// interpret an L-system
function lindenmayer(s) {
  var outputstring = ''; // start a blank output string
  
  // iterate through 'therules' looking for symbol matches:
  for (var i = 0; i < s.length; i++) {
    var ismatch = 0; // by default, no match
    for (var j = 0; j < therules.length; j++) {
      if (s[i] == therules[j][0])  {
        outputstring += therules[j][1]; // write substitution
        ismatch = 1; // we have a match, so don't copy over symbol
        break; // get outta this for() loop
      }
    }
    // if nothing matches, just copy the symbol over.
    if (ismatch == 0) outputstring+= s[i]; 
  }
  
  return outputstring; // send out the modified string
}

// this is a custom function that draws turtle commands
function drawIt(k) {

  if (k=='F') { // draw forward
    // polar to cartesian based on step and currentangle:
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    line(x, y, x1, y1); // connect the old and the new

    // update the turtle's position:
    x = x1;
    y = y1;
  } else if (k == '+') {
    currentangle += angle; // turn left
  } else if (k == '-') {
    currentangle -= angle; // turn right   
  }

  // give me some random color values:
  var r = random(5, 105);
  var g = random(105, 255);
  var b = random(105, 255);
  var a = randomGaussian(((x1 / windowWidth) * 255), 100);// + ((y1 / windowHeight) * 127);

  // pick a gaussian (D&D) distribution for the radius:
  var radius = 0;
  radius += random(0, 15);
  radius += random(0, 15);
  radius += random(0, 15);
  radius = radius/3;
  
  // draw the stuff:
  stroke(0, 0, 0, 15);
  fill(r, g, b, a);
  ellipse(x, y, radius, radius);
}


function drawIt2(k) {

  if (k=='F') { // draw forward
    // polar to cartesian based on step and currentangle:
    var x3 = x2 + step*cos(radians(currentangle2));
    var y3 = y2 + step*sin(radians(currentangle2));
    line(x2, y2, x3, y3); // connect the old and the new

    // update the turtle's position:
    x2 = x3;
    y2 = y3;
  } else if (k == '+') {
    currentangle2 -= angle2; // turn right
  } else if (k == '-') {
    currentangle2 += angle2; // turn left   
  }

  // give me some random color values:
  var r = random(55, 155);
  var g = random(155, 255);
  var b = random(155, 255);
  var a = randomGaussian(((x3 / windowWidth) * 255), 100);// + ((y1 / windowHeight) * 127);

  // pick a gaussian (D&D) distribution for the radius:
  var radius = 0;
  radius += random(0, 15);
  radius += random(0, 15);
  radius += random(0, 15);
  radius = radius/3;
  
  // draw the stuff:
  stroke(0, 0, 0, 15);
  fill(r, g, b, a);
  ellipse(x2, y2, radius, radius);
}
