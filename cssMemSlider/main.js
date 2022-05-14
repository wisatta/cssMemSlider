const slides = document.querySelectorAll('.slide'),
    prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    dots = document.querySelectorAll('.dot'),
    text = document.querySelectorAll('.text');

let index = 0;

// Change active class

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const activeText = n => {
    for (txt of text) {
        txt.classList.remove('active');
    }
    text[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
    activeText(index);
}

// Next slide

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

next.addEventListener('click', nextSlide);

// Prev slide

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

prev.addEventListener('click', prevSlide);

// Dots slider

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})