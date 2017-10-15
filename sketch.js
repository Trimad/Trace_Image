/*Hey Tristan,
if this program isn't tracing the image properly,
make sure it is NOT transparent.
*/

var img;
var trace;

function preload() {

	img = loadImage("03.png");

}

function setup() {

	createCanvas(img.width, img.height);
	image(img, 0, 0);
	drawImg();

}

function draw() {}

var threshold = 245;
var detail = 1;

function drawImg() {

	img.loadPixels();
	stroke(0);
	strokeWeight(2);
	noFill();
	beginShape();

	//From left to right
	for (var x = 0; x < img.width; x += detail) {
		for (var y = 0; y < img.height; y += detail) {


			var index = (x + y * img.width) * 4;

			var r = img.pixels[index + 0];
			var g = img.pixels[index + 1];
			var b = img.pixels[index + 2];
			var a = img.pixels[index + 3];
			var bright = (r + g + b + a) / 4;

			if (bright < threshold && bright !== null) {
				vertex(x, y);
				break;
			}
		}
	}

	//From right to left
	for (var x = img.width; x > 0; x -= detail) {
		for (var y = img.height; y > 0; y -= detail) {


			var index = (x + y * img.width) * 4;

			var r = img.pixels[index + 0];
			var g = img.pixels[index + 1];
			var b = img.pixels[index + 2];
			//var a = img.pixels[index + 3];
			var bright = (r + g + b + a) / 4;

			if (bright < threshold) {
				vertex(x, y);
				break;
			}
		}
	}

	endShape();


}