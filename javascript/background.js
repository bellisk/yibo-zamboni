const loadBackground = function() {
    const imageId = Math.floor(Math.random() * 15);

    var image = new Image();
    image.onload = function () {
        $("body").css("background-image", "url('" + image.src + "')");
    }
    image.src = "images/image_" + imageId.toString() + ".jpg";
}

document.addEventListener("DOMContentLoaded", loadBackground);

const changeBackground = setInterval(loadBackground, 10 * 1000);
