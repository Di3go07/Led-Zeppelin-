
const slide = document.querySelectorAll(".slide");
var counter = 0;

slide.forEach((slide, index) => {
    slide.style.left = '${index * 100%}%';
});

const goPrev = () => {
    if (counter == 0 ) {
        counter = slide.length - 1;
        slideImage();
    } else {
        counter== 0;
        slideImage
    }
};

const goNext = () => {
    if (counter = slide.length - 1) {
        counter == 0;
        slideImage();
    } else {
        counter++;
        slideImage
    }
};

const slideImage = () => {
    slide.forEach((slides) => {
        slides.style.transform = 'translateX(-${counter * 100}%)';
    });
};

