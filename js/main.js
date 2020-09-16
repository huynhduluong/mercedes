//scroll effect
var s = skrollr.init();

/**
 * ẩn hiện dropdown menu trên nút share của nav
 */
var shareClick = 0;
document.getElementById("menu__share").addEventListener("click", function () {
    var width = window.innerWidth;
    if (width > 768) {
        document.querySelector(".dropdown__menu").style.visibility = "visible"; 
        return;
    }
    
    if (shareClick == 0) {    
    document.querySelector(".dropdown__menu").style.top = "-336px";
    shareClick = 1;
    } else {
    document.querySelector(".dropdown__menu").style.top = "60px";
    shareClick = 0;
    };
});

