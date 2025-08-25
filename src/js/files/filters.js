export default function filters() {
  const filters = document.querySelector("#filters");

  if (filters) {
    const btnOpen = document.querySelector("#filters-open");
    const btnClose = document.querySelector("#filters-close");
    const overlay = document.querySelector("#filters-overlay");

    btnOpen.addEventListener("click", () => {
      if (btnOpen.classList.contains("_active")) {
        handleClose();
      } else {
        handleOpen();
      }
    });
    btnClose.addEventListener("click", handleClose);

    overlay.addEventListener("click", handleClose);

    function handleOpen() {
      filters.classList.add("_open");
      overlay.classList.add("_active");
      btnOpen.classList.add("_active");

      if (window.matchMedia("(max-width: 991px)").matches) {
        document.body.classList.add("body-hidden");
      }
    }
    function handleClose() {
      filters.classList.remove("_open");
      overlay.classList.remove("_active");
      btnOpen.classList.remove("_active");

      document.body.classList.remove("body-hidden");
    }
  }
}
