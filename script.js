var allVotes = 0;

var imageTracker = function (name, source) {
	this.imageSource = source;
	this.upVotes = 0;
	this.name = name;
}

var imageOptions = [
	new imageTracker("Banana", "images/banana.jpg"),
	new imageTracker("Bag", "images/bag.jpg"),
	new imageTracker("Boots", "images/boots.jpg"),
	new imageTracker("Chair", "images/chair.jpg"),
	new imageTracker("Cthulhu", "images/cthulhu.jpg"),
	new imageTracker("Dragon", "images/dragon.jpg"),
	new imageTracker("Pen", "images/pen.jpg"),
	new imageTracker("Scissors", "images/scissors.jpg"),
	new imageTracker("Shark", "images/shark.jpg"),
	new imageTracker("Sweep", "images/sweep.jpg"),
	new imageTracker("Unicorn", "images/unicorn.jpg"),
	new imageTracker("USB", "images/usb.jpg"),
	new imageTracker("Water-Can", "images/water_can.jpg"),
	new imageTracker("Wine-Glass", "images/wine_glass.jpg"),
];

var pickedImages = [];//This is our memory - tracks which images we have shown
document.getElementById("image-container").addEventListener("click", recordClick);

function getThreeImages() {
	pickedImages = []; //This is empty so that we can track 3 new images
	for(var imageID = 1; imageID <=3; imageID++) {
		do { // Get a random index value for our image
			var index = Math.floor(Math.random() * 14);
			}while(pickedImages.indexOf(index) >= 0); // keep trying until it's unique
			var source = imageOptions[index].imageSource; // Get the source for the image
			document.getElementById("image" + imageID).src = source; // update the image with the new source
			pickedImages.push(index); // add the image location to our memory for later use
	}
}

function recordClick(event){
	var clickedImage = event.target;
	console.log(clickedImage);
	var clickedImageSource = clickedImage.src;
	console.log("Clicked SRC: " +clickedImageSource);
	for (var index = 0; index < imageOptions.length; index++) {
		console.log("Compare to: " +imageOptions[index].imageSource);
		if (clickedImageSource.indexOf(imageOptions[index].imageSource) >= 0) {
			imageOptions[index].upVotes++;
			console.log(" Clicked Item: " +imageOptions[index].name);
			allVotes++;
			console.log(allVotes);
			document.getElementById('votes').innerHTML = imageOptions[index].upVotes + " of 15 votes";
		}
		if(allVotes == 15) {
			userResults();
		} else {
			getThreeImages();
		}
		}// if (clickedimageSource.indexOf(imageOptions[index].imageSource) >=0)
	}// for(var index = 0; index < imageOptions.length; index++)


function userResults () {
	var voteResults = document.createElement('ul');
	var voteResultsPosition = document.getElementById('voteResults');
	document.getElementById('voteResults').innerHTML = voteResults;
	for (var i = 0; i < imageOptions.length; i++) {
		var voteResultsLi = document.createElement('li');
		var voteResultsText = document.createTextNode(imageOptions[i].name + ": " + imageOptions[i].upVotes);
		voteResultsLi.appendChild(voteResultsText);
		voteResults.appendChild(voteResultsLi);
	}
}
