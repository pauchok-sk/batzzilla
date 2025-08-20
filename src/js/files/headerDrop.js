export default function headerDrop() {
  const buttons = document.querySelectorAll("[data-header-drop-btn]");

  if (buttons.length) {
    const overlay = document.querySelector(".header-drop-overlay");

    overlay.addEventListener("mouseenter", handleClose);

    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", handleOpen);
      btn.addEventListener("mouseleave", handleClose);
    });

    window.addEventListener("scroll", () => {
      const btnActive = document.querySelector(
        "[data-header-drop-btn]._active"
      );

      if (btnActive) {
        const currentDrop = btnActive.querySelector(".header-drop");

        updateSizeDrop(currentDrop);
      }
    });

    function handleOpen(e) {
      const currentDrop = e.target.querySelector(".header-drop");

      overlay.classList.add("_active");
      e.target.classList.add("_active");

      updateSizeDrop(currentDrop);
    }

    function handleClose() {
      overlay.classList.remove("_active");
      buttons.forEach((btn) => btn.classList.remove("_active"));
    }

    function updateSizeDrop(drop) {
      const headerTopHeight =
        document.querySelector(".header-top").clientHeight;
      const headerHeight = document.querySelector(".header").clientHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const offsetTop =
        scrollTop <= headerTopHeight
          ? headerTopHeight + headerHeight - 1
          : headerHeight - 1;

      drop.style.top = `${offsetTop}px`;
      drop.style.maxHeight = `calc(100vh - ${offsetTop}px)`;
    }
  }
}
