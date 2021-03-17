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

if (letterLink) {
  letterLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    letterPopup.classList.add("modal-show");

    if (storage) {
      letterName.value = storage;
      letterMail.focus();
    } else {
      letterName.focus();
    }
  });

  letterClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    letterPopup.classList.remove("modal-show");
    letterPopup.classList.remove("modal-error");
  });

  letterForm.addEventListener("submit", function (evt) {
    if (!letterMail.value || !letterName.value || !letterText.value) {
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
        letterPopup.classList.remove("modal-error");
      }
    }
  });
}

// Map

const mapPopup = document.querySelector(".modal-map");
const mapClose = document.querySelector(".close-map");
const mapLink = document.querySelector(".map-link");

if (mapLink) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");

    if (mapPopup.classList.contains("modal-show")) {
      mapClose.focus();
    }
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
}

// Order

const buyLinks = document.querySelectorAll(".buy--button");
const orderPopup = document.querySelector(".modal-order");
const orderClose = document.querySelector(".order-close");
const shopping = document.querySelector(".continue-shopping");

for (i = 0; i <= buyLinks.length - 1; ++i) {
  buyLinks[i].addEventListener("click", function (event) {
    event.preventDefault(event);
    orderPopup.classList.add("modal-show");

    if (orderPopup.classList.contains("modal-show")) {
      orderClose.focus();
    }
  });
}

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

// Services

const infoButtons = document.querySelectorAll(".info-list a");

infoButtons.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    const id = this.getAttribute("data-tab");
    const content = document.querySelector(
      '.description[data-tab="' + id + '"]'
    );
    const activeButton = document.querySelector(".clicked");
    const activeContent = document.querySelector(".description--active");

    activeButton.classList.remove("clicked");
    item.classList.add("clicked");

    activeContent.classList.remove("description--active");
    content.classList.add("description--active");
  });
});

const slider = document.querySelector(".slider");

if (slider) {
  let activeSlideIndex = 0;
  const slides = Array.from(slider.querySelectorAll(".slider-item"));
  const dots = Array.from(slider.querySelectorAll(".slider-dots-button"));
  const sliderArrowPrev = slider.querySelector(".slider-nav--prev");
  const sliderArrowNext = slider.querySelector(".slider-nav--next");

  const disabledArrow = () => {
    if (Number(activeSlideIndex) === 0) {
      sliderArrowNext.removeAttribute("disabled");
      sliderArrowPrev.setAttribute("disabled", "");
    } else if (Number(activeSlideIndex) === slides.length - 1) {
      sliderArrowPrev.removeAttribute("disabled");
      sliderArrowNext.setAttribute("disabled", "");
    } else {
      sliderArrowPrev.removeAttribute("disabled");
      sliderArrowNext.removeAttribute("disabled");
    }
  };

  disabledArrow();

  const setPrevSlide = () => {
    if (activeSlideIndex > 0) {
      activeSlideIndex--;
      disabledArrow();

      slides[activeSlideIndex + 1].classList.remove("slider-item--active");
      slides[activeSlideIndex].classList.add("slider-item--active");
      dots[activeSlideIndex + 1].classList.remove("slider-dots-button--active");
      dots[activeSlideIndex].classList.add("slider-dots-button--active");
    }
  };

  const setNextSlide = () => {
    if (activeSlideIndex < slides.length - 1) {
      activeSlideIndex++;
      disabledArrow();

      slides[activeSlideIndex - 1].classList.remove("slider-item--active");
      slides[activeSlideIndex].classList.add("slider-item--active");
      dots[activeSlideIndex - 1].classList.remove("slider-dots-button--active");
      dots[activeSlideIndex].classList.add("slider-dots-button--active");
    }
  };

  const setSlideByDot = () => {
    disabledArrow();

    slides.forEach((slide) => {
      slide.classList.remove("slider-item--active");
    });

    dots.forEach((dot) => {
      dot.classList.remove("slider-dots-button--active");
    });

    slides[activeSlideIndex].classList.add("slider-item--active");
    dots[activeSlideIndex].classList.add("slider-dots-button--active");
  };

  const setActiveSlider = (mode) => {
    switch (mode) {
      case "PREV":
        setPrevSlide();
        break;
      case "NEXT":
        setNextSlide();
        break;
      case "DOTS":
        setSlideByDot();
        break;
    }
  };

  sliderArrowPrev.addEventListener("click", () => {
    setActiveSlider("PREV");
  });

  sliderArrowNext.addEventListener("click", () => {
    setActiveSlider("NEXT");
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      activeSlideIndex = dot.dataset.slide;
      setActiveSlider("DOTS");
    });
  });
}
