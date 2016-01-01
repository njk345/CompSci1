var imageList = ["Jets.png", "giants.png", "Bills.png"];
var imageNumber = 0;
var totalImages = imageList.length;

function cycleImages() {

imageNumber++;
if (imageNumber === totalImages) {
imageNumber = 0;
}

document.banner.src = imageList[imageNumber];

setTimeout("cycleImages()", 1000);
}

window.onload = cycleImages;
