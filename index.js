var menuIsOut = false;
var scrollArrow = document.getElementById("scrollArrow");
var menuIconBars = document.getElementsByClassName("menuIcn");
var nav = document.getElementById("nav");
var mainBlock = document.getElementById("content");
var scrollState = mainBlock.scrollTop;

mainBlock.onscroll = function() {
    scrollState = this.scrollTop;
    console.log(scrollState);
}

scrollArrow.onload = scrollAnimation();

function scrollAnimation() {
    var isOverflowing = mainBlock.clientHeight < mainBlock.scrollHeight;
    console.log(isOverflowing);
    if (!isOverflowing) {
        scrollArrow.classList.add("noScroll");
    }
    else if (isOverflowing) {
        scrollArrow.classList.remove("noScroll");
    }
    if (scrollState > 0) {
        scrollArrow.classList.remove("scrollArrowDown");
        scrollArrow.classList.remove("scrollArrowUp");
        scrollArrow.classList.add("scrollArrowGone");
        setTimeout( function () {
            scrollAnimation();
        }, 1500)
    }
    else {
        scrollArrow.classList.remove("scrollArrowGone");
        setTimeout( function () {
            scrollArrow.classList.remove("scrollArrowDown");
            scrollArrow.classList.add("scrollArrowUp");
        }, 1500)
        setTimeout( function () {
            scrollArrow.classList.remove("scrollArrowUp");
            scrollArrow.classList.add("scrollArrowDown");
            scrollAnimation();
        }, 3000)
    }
}

function pulloutMenu() {
    if (!menuIsOut) {
        menuIconBars[0].classList.toggle("topOutSlide");
        menuIconBars[2].classList.toggle("botOutSlide");
        nav.classList.toggle("navOut");
        setTimeout( function () {
            menuIconBars[1].classList.toggle("midOutOpac");
        }, 150)
        setTimeout( function () {
            menuIconBars[0].classList.toggle("topOutRotate");
            menuIconBars[2].classList.toggle("botOutRotate");
        }, 300)
        menuIsOut = true;
    }
    else if (menuIsOut) {
        menuIconBars[0].classList.toggle("topOutRotate");
        menuIconBars[2].classList.toggle("botOutRotate");
        nav.classList.toggle("navOut");
        setTimeout( function () {
            menuIconBars[1].classList.toggle("midOutOpac");
        }, 150)
        setTimeout( function () {
            menuIconBars[0].classList.toggle("topOutSlide");
            menuIconBars[2].classList.toggle("botOutSlide");
        }, 300)
        menuIsOut = false;
    }
}