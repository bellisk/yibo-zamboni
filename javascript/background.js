const changeBackground = setInterval(function () {
    const imageId = Math.floor(Math.random() * 14);

    var image = new Image();
    image.onload = function () {
        $("body").css("background-image", "url('" + image.src + "')");
    }

    image.src = "images/image_" + imageId.toString() + ".jpg";
}, 10 * 1000);
