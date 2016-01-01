//This function makes a rotating display of photos from the organization


//defines array of images
var pics = new Array();
pics[0] = "schools.gif";
pics[1] = "Kenya-Emorijoi-Library.jpg";
pics[2] = "Lai_block_1_with-kids.jpg";
pics[3] = "Kenya-AGM-2011-138.jpg";
pics[4] = "San-Miguel-Ecuador-Highschool-computer-lab.jpg";


//counter variables
var imageNum = 0;
var totImages = pics.length;

function rotPhoto () {
imageNum++;
//exception case where function continues by restarting counter variable
if (imageNum === totImages) {
imageNum = 0;
}

document.banner.src = pics[imageNum];
setTimeout("rotPhoto()", 4000);
}
window.onload = rotPhoto;

