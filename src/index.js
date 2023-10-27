import "../src/assets/scss/pages/index.scss";

import { Popup } from "./assets/components/Popup";
import { Menu } from "./assets/components/Menu";

// Popus open/close logic
const sliderButton = document.querySelector(".slider__button");
const detailsPopup = document.querySelector(".popup__details");

const aboutButton = document.querySelector(".about__button");
const brochurePopup = document.querySelector(".popup__brouchure");

const popupUniqueOffer = document.querySelector(".popup__unique-offer");

const uniqueOffer = new Popup(popupUniqueOffer);
const brochure = new Popup(brochurePopup);
const details = new Popup(detailsPopup);

setTimeout(() => uniqueOffer.open(), 30000);
aboutButton.addEventListener("click", () => {
  brochure.open();
});

sliderButton.addEventListener("click", () => {
  details.open();
});

// scroll logic

const scroll = new Menu();
scroll.setEventListeners();
