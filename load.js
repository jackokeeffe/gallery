var imageLoadCount = 0;
var landscape = [4, 5, 7, 10, 13, 15, 16, ]

function loadImages() {
    while (imageLoadCount <= 20) {
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
}

loadImages();
