//Import Styles
import "../src/styles.scss";

//Import images
//Main
import "../src/assets/img/main-background.jpg";
//Popular
import "../src/assets/img/istanbul.jpg";
import "../src/assets/img/kl.jpg";
import "../src/assets/img/seoul.jpg";
//Special
import "../src/assets/img/Discover-sajek-valley 1.jpg";
import "../src/assets/img/Discover-sajek-valley 2.jpg";
import "../src/assets/img/Discover-sajek-valley 3.jpg";
import "../src/assets/img/china-great-wall-and-mountain 1.jpg";
import "../src/assets/img/usa-best-places-new-york 1.jpg";

// Icons
import "../src/assets/img/Star.svg";
import "../src/assets/img/arrow_right.svg";
import "../src/assets/img/arrow_left.svg";
import "../src/assets/img/place.svg";

/*//Import images
import "../src/assets/img/01.jpg";
import "../src/assets/img/02.jpg";
import "../src/assets/img/03.jpg";

const mountains = document.querySelector('.parallax__mountains');
const hero = document.querySelector('.parallax__hero');
const siteTitle = document.querySelector('.main__content');
const socials = document.querySelector('.main__socials');

window.addEventListener('scroll', function() {
  var value = window.scrollY;

  var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  mountains.style.top = 25 - (value * 0.12) + '%';
  hero.style.top = 50 - (value * 0.1) + '%';

  siteTitle.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 2));
  socials.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 2));

})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()
   
  const blockID = anchor.getAttribute('href').substr(1)
   
  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'center'
  })
  })
}



const slidebarItems = document.querySelectorAll('.sidebar__item');

for(const slidebarItem of slidebarItems) {
  slidebarItem.addEventListener("click", ()=> {
    slidebarItems.forEach((slidebarItem)=> {
      slidebarItem.classList.remove("sidebar__item_active");
    })
  slidebarItem.classList.add("sidebar__item_active");
  })
}


const scrollImations = (entries, observer) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting && entry.intersectionRatio == 1) {
			
      console.log(entry);
		} else {
			console.log('pau');
		}
	});
}

const options = {
	threshold: 1.0,
};
const observer = new IntersectionObserver(scrollImations, options);

const boxes = document.querySelectorAll('.ancor');
boxes.forEach((box) => {
	observer.observe(box);
});





/*

//Slider

import noUiSlider from 'nouislider';
import '../node_modules/nouislider/dist/nouislider.min.css'

var nonLinearStepSlider = document.getElementById('slider-non-linear-step');

noUiSlider.create(nonLinearStepSlider, {
    start: [500, 4000],
    range: {
        'min': [0],
        '10%': [500, 500],
        '50%': [4000, 1000],
        'max': [9000]
    }
});

var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');

nonLinearStepSlider.noUiSlider.on('update', function (values) {
  let cleanValues = [];
  for (const value of values) {
    cleanValues.push('$' + Math.round(value));
  }
  nonLinearStepSliderValueElement.innerHTML = cleanValues.join(' - ');
});

const sliderContainer = document.querySelector(".slider__container");
const sliderHeader = document.querySelector(".slider__header");

sliderHeader.addEventListener("click", ()=> {
  if(sliderContainer.classList.contains("slider__container_active")) {
    hideSlider();
  } else {
    showSlider();
  }
  
})

function showSlider() {
  sliderContainer.classList.add("slider__container_active");
}

function hideSlider() {
  sliderContainer.classList.remove("slider__container_active");
}

//Search options
const searchOptions = document.querySelectorAll(".main-section__search-options-btn");

for (const searchOption of searchOptions) {
  searchOption.addEventListener("click", ()=> {
    searchOptions.forEach((searchOption)=> {
      searchOption.classList.remove("main-section__search-options-btn_active")
    })
  searchOption.classList.add("main-section__search-options-btn_active")
  })
}

//Search dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
const dropdownMenus = document.querySelectorAll('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');
const dropdownTexts = document.querySelectorAll('.dropdown__text');

dropdowns.forEach((dropdown, i) => {
  dropdown.addEventListener('click', () => {
    showDropdownMenu(i);
  })
})

function showDropdownMenu(n) {
  if(dropdownMenus[n].classList.contains('dropdown__list_active')) {
    hideDropdowns();
  }
  else {
    hideDropdowns();
    dropdownMenus[n].classList.add('dropdown__list_active');
    dropdownTexts[n].classList.add('dropdown__text_target');
  }
}

function hideDropdowns() {
  dropdownMenus.forEach((dropdownMenu) => {
    dropdownMenu.classList.remove('dropdown__list_active');
  })
  dropdownTexts.forEach((dropdownText) => {
    dropdownText.classList.remove('dropdown__text_target');
  })
}

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.dropdown__list') && !target.closest('.dropdown')) {
    hideDropdowns();
  }
  if (!target.closest('.slider__container') && !target.closest('.slider__header')) {
    hideSlider();
  }
})

dropdownItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.textContent.length > 10) {
      document.querySelector('.dropdown__text_target').textContent = item.textContent.substring(0, 10) + '...';
    } else {
      document.querySelector('.dropdown__text_target').textContent = item.textContent;
    }
  })
})

//Like button
const likes = document.querySelectorAll(".property-card__like");

for (const like of likes) {
  like.addEventListener("click", ()=> {
    if (like.classList.contains("property-card__like_clicked")) {
      like.classList.remove("property-card__like_clicked")
    }
    else {
      like.classList.add("property-card__like_clicked")
    }
  })
}

//Reviews slider
const slides = document.querySelectorAll(".reviews__block");
const dots = document.querySelectorAll(".reviews__slider-dot");

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlides(i);
    showUp(slides[i]);
  })
})

function showSlides(n) {
  slides.forEach((slide) => {
    slide.classList.remove("reviews__block_active")
  })
  dots.forEach((dot) => {
    dot.classList.remove("reviews__slider-dot_active")
  })
  slides[n].classList.add("reviews__block_active")
  dots[n].classList.add("reviews__slider-dot_active")
}

function showUp(target) {
  target.style.opacity = 0;
  var opacity = 0.1;
  var steps = 5;
  var d0 = opacity / steps;
  setInterval(function() {
    if(opacity <= 1) {
      opacity += d0;
      target.style.opacity = opacity;
      steps++;
    }
  })
}*/
