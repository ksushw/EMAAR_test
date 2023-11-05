class Menu {
  constructor() {
    this.container = document.querySelector(".projects");
    this.scrollButtons = Array.from(
      this.container.querySelectorAll(".menu__ratio")
    );
    this.elements = Array.from(
      this.container.querySelectorAll(".projects__card")
    );
  }

  scroll(id, e) {
    e.preventDefault();
    document.getElementById(`${id}_card`).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  watchScroll() {
    const scrollPosition = window.pageYOffset;
    const containerPosition =
      this.container.getBoundingClientRect().y + window.pageYOffset;
    this.elements.map((element) => {
      if (
        containerPosition + element.offsetTop - 200 <= scrollPosition &&
        containerPosition + element.offsetTop + element.offsetHeight >=
          scrollPosition
      ) {
        document.getElementById(element.id.replace("_card", "")).checked = true;
      } else {
        document.getElementById(
          element.id.replace("_card", "")
        ).checked = false;
      }
    });
  }

  setEventListeners() {
    this.scrollButtons.map((button) => {
      button.addEventListener("click", (e) => this.scroll(button.id, e));
    });
    document.addEventListener("scroll", () => this.watchScroll());
  }
}

export { Menu };
