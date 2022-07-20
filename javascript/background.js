const changeBackground = setInterval(function () {
    const imageId = Math.floor(Math.random() * 14);

    document.body.style.backgroundImage = "url(../images/image_" + imageId.toString() + ".jpg)";
}, 10 * 1000);
