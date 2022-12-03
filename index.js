var menuIsOut = false;
function pulloutMenu() {
    let menuIconBars = document.getElementsByClassName("menuIcn");
    let nav = document.getElementById("nav");
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