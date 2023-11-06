class Slider {
  constructor(slider) {
    this.slider = slider;
    this.arrowIconLeft =
      '<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="50px" id="Layer_1" style="enable-background:new 0 0 50 50;" version="1.1" viewBox="0 0 512 512" width="50px" color="#fff" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/></svg>';
    this.slides = this.slider.querySelectorAll(".slider__slide");
    this.slideSayisi = this.slides.length;

    this.prev = this.slider.querySelector(".slider__arrow_direction_left");
    this.next = this.slider.querySelector(".slider__arrow_direction_right");
    this.loop = 0 + 1000 * this.slideSayisi;
  }

  start() {
    const slidesCount = this.slides.length;

    for (let index = 0; index < slidesCount; index++) {
      const element = this.slides[index];
      element.style.transform = "translateX(" + 100 * index + "%)";
    }
  }

  goNext() {
    this.loop++;
    const slidesCount = this.slides.length;
    for (let index = 0; index < slidesCount; index++) {
      const element = this.slides[index];
      element.style.transform =
        "translateX(" + 100 * (index - (this.loop % this.slideSayisi)) + "%)";
    }
  }

  goPrev() {
    this.loop--;
    const slidesCount = this.slides.length;
    for (let index = 0; index < slidesCount; index++) {
      const element = this.slides[index];
      element.style.transform =
        "translateX(" + 100 * (index - (this.loop % this.slideSayisi)) + "%)";
    }
  }

  setEventListeners() {
    this.next.addEventListener("click", () => this.goNext());
    this.prev.addEventListener("click", () => {
      this.goPrev();
    });
    this.slider.addEventListener("touchend", function (e) {
      console.log(e);
      if (e.code === "ArrowRight") {
        this.goNext();
      } else if (e.code === "ArrowLeft") {
        this.goPrev();
      }
    });
  }
}

export { Slider };
