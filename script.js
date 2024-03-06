let slides = document.querySelectorAll(".slide");

let counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}% `
    }
);
let goPrev = () => {
    counter--;
    slideImage();
}
let goNext = () => {
    counter++;
    slideImage();
}
let slideImage = () => {
    if (counter < 0) {
        counter = slides.length - 1; // Set counter to the last slide index
    } else if (counter >= slides.length) {
        counter = 0; // Set counter to the first slide index
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};