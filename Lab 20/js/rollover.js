/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var createRollOver = function (imgTag, secondUrl, secondAlt) {
    "use strict";
    //STORE FIRST IMAGE INFO
    var firstUrl, firstAlt, image;
    firstUrl = imgTag.src;
    firstAlt = imgTag.alt;
    
    //PRELOAD SECOND IMAGE
    image = new Image();
    image.src = secondUrl;
    
    //CREATE EVENT HANDLERS
    var mouseover = function () {
        imgTag.src = secondUrl;
        imgTag.alt = secondAlt;
    };
    var mountout = function () {
        imgTag.src = firstUrl;
        imgTag.alt = firstAlt;
    };
    
    evt.attach(imgTag, "mouseover", mouseover);
    evt.attach(imgTag, "mouseout", mountout);
};

window.addEventListener("load", function () {
    "use strict";
    createRollOver($("img1"), "images/wakeboard.jpg", "Zak wakeboards in his boat");
    createRollOver($("img2"), "images/race.jpg", "Zak tries to stay active");
});