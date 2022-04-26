var imageLoadCount = 21;
var firstTime = true;
var landscape = [4, 5, 7, 10, 13, 15, 16, ]
var numberCounter = 28;

function loadImages(numberCounter, firstTime) {
    while (imageLoadCount <= numberCounter) {
        var image = document.createElement("img");
        image.src = "images/" + imageLoadCount + ".jpg";

        image.width = "20%";

        if (landscape.includes(imageLoadCount)) {
            console.log(imageLoadCount)
            image.id = "landscape"
        }

        document.getElementById("images").appendChild(image);
        imageLoadCount++;
    }
    if (firstTime == true) {
        imageLoadCount = 0;
        numberCounter = 20;
        firstTime = false;
        loadImages(numberCounter, firstTime);
    }
}

loadImages(numberCounter, firstTime);