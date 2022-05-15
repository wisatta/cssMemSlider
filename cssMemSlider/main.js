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

// Animation 

const removeSlideAnimation = () => {
    slides.forEach(function (el) {
        el.classList.remove('slide-animation')
    })
}

const slideAnimation = () => {
    slides.forEach(function (slide) {
        slide.classList.add('slide-animation')
    })
    setTimeout(removeSlideAnimation,450);
}

const removeTextAnimation = () => {
    text.forEach(function (el) {
        el.classList.remove('text-animation')
    })
}

const textAnimation = () => {
    text.forEach(function (txt) {
        txt.classList.add('text-animation')
    })
    setTimeout(removeTextAnimation,450);
}

// Current slide

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
    activeText(index);
    slideAnimation();
    textAnimation();
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