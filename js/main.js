// Letter

const letterLink = document.querySelector(".button--write-us");
const letterPopup = document.querySelector(".modal-letter");
const letterClose = document.querySelector(".modal-close");
const letterForm = document.querySelector(".letter");
const letterMail = document.querySelector(".letter-mail");
const letterText = document.querySelector("letter-text");
const letterName = document.querySelector(".user-name");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

letterLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  letterPopup.classList.add("modal-show");

  if (storage) {
    letterName.value = storage;
    letterMail.focus();
  } else {
    letterName.focus();
  }

});

letterClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-show");
  letterPopup.classList.remove("modal-error");
});

letterForm.addEventListener("submit", function(evt) {
 if(!letterMail.value || !letterName.value || !letterText.value) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-error");
  letterPopup.offsetWidth = letterPopup.offsetWidth;
  letterPopup.classList.add("modal-error");
 } else {
   if (isStorageSupport) {
    localStorage.setItem("name", letterName.value);
   }
 }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      letterPopup.classList.remove("modal-show");
      letterPopup.classList.add("modal-error");
    }
  }
});

// Map

const mapPopup = document.querySelector(".modal-map");
const mapClose = document.querySelector(".close-map");
const mapLink = document.querySelector(".map-link");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

// Order

const buyLinks  = document.querySelectorAll(".buy--button");
const orderPopup = document.querySelector(".modal-order");
const orderClose = document.querySelector(".order-close");
const shopping = document.querySelector(".continue-shopping");

for (i = 0; i <= buyLinks.length - 1; ++i) {
	buyLinks[i].addEventListener("click", function (event) {
		event.preventDefault(event);
		orderPopup.classList.add("modal-show");
	})
};

orderClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
});

shopping.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (orderPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      orderPopup.classList.remove("modal-show");
    }
  }
});

console.log(buyLink);

// Services

const infoButtons = document.querySelectorAll(".info-list a");

infoButtons.forEach(function(item) {
  item.addEventListener("click", function(evt) {
    evt.preventDefault();
    const id = this.getAttribute("data-tab");
    const content = document.querySelector('.description[data-tab="'+id+'"]');
    const activeButton = document.querySelector(".clicked");
    const activeContent = document.querySelector(".description--active");

    activeButton.classList.remove("clicked");
    item.classList.add("clicked");

    activeContent.classList.remove("description--active");
    content.classList.add("description--active");

  });
});

// Slider

// const sliderItems = document.querySelectorAll(".slider-item");
// const sliderDots = document.querySelectorAll(".slider-dots-button");
// const navNext = document.querySelector(".slider-nav--next");
// const navPrev = document.querySelector(".slider-nav--prev");
// let idx = 0

// navNext.addEventListener("click", moveLeft);
// function moveLeft(){
//   sliderItems[idx].classList.remove("slider-item--active");
//   sliderItems[++idx].classList.add("slider-item--active");
// }

// navPrev.addEventListener('click', moveRight);
// function moveRight(){
//   sliderItems[idx].classList.remove("slider-item--active");
//   sliderItems[--idx].classList.add("slider-item--active");
// }

