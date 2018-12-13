document.addEventListener("DOMContentLoaded", function(event) {
                           doAddHtmlPic();
    safari.extension.dispatchMessage("Hello World!");
});

function doAddHtmlPic()
{
    var newElement = document.createElement("img");
    //  newElement.src = safari.extension.baseURI + "myCat.jpg";
    newElement.src = "https://cn.bing.com/rs/2R/ti/ic/e19fde19/ce98ce99.png";
    document.body.insertBefore(newElement,
                               document.body.firstChild);
}
