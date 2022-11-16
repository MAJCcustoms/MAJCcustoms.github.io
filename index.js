const imgsresW = [1600, 1600, 1600, 1067, 1600, 1600, 1600,];
const imgsresH = [1067, 1067, 1067, 1600, 1067, 1067, 1067,];
let imgresMultiplier = [];
let currentImg = document.querySelector("#imgGallery");
let currentImgW = currentImg.offsetWidth - 40;
for (let x in imgsresW){
    imgresMultiplier[x] = (imgsresW[x] / imgsresH[x]);
}

let currentIndex = 1;
let previousIndex = currentIndex;

cycleImg();

function cycleImg(n) {
    if (n == null) {
        setTimeout( function () {
            previousIndex = currentIndex;
            currentIndex += 1;
            showImage();
            cycleImg();
        }, 3000);
    }
}

function changeImage(n) {
    previousIndex = currentIndex;
    currentIndex += n;
    showImage();
}

function showImage() {
    let images = document.getElementsByClassName("galImg");
    let cssvar = document.documentElement.style;
    if (currentIndex > images.length) {
        currentIndex = 1;
    }
    if (currentIndex < 1) {
        currentIndex = images.length;
    }

    let currentImgW = currentImg.offsetWidth - 40;

    let currentVarH = (currentImgW / imgresMultiplier[previousIndex - 1]) + "px";
    let nextVarH = (currentImgW / imgresMultiplier[currentIndex - 1]) + "px";

    cssvar.setProperty("--currentImage-height", currentVarH);
    cssvar.setProperty("--nextImage-height", nextVarH);

    for (i = 0; i < images.length; i++) {
        images[i].classList.remove("activeimg");
      }
    images[currentIndex - 1].classList.toggle("activeimg");

    console.log(previousIndex, currentIndex, currentImgW, imgresMultiplier[previousIndex - 1], imgresMultiplier[currentIndex - 1], currentVarH, nextVarH);
}
