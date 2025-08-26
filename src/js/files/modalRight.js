export default function modalRight() {
  const buttons = document.querySelectorAll("[data-modal-right-btn]");

  if (buttons.length) {
    const overlay = document.querySelector(".modal-right-overlay");
    const buttonsClose = document.querySelectorAll(".modal-right__close");

    buttonsClose.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.closest(".modal-right").dataset.modalRight;

        handleClose(id);
      });
    });

    overlay.addEventListener("click", () => handleClose());

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        overlay.classList.add("_active");
        const id = btn.dataset.modalRightBtn;

        handleOpen(id);
      });
    });
    function handleOpen(id) {
      const currentModal = document.querySelector(`[data-modal-right="${id}"]`);
      overlay.classList.add("_active");
      currentModal.classList.add("_open");
      document.body.classList.add("body-hidden");
    }

    function handleClose(id) {
      const currentModal = id
        ? document.querySelector(`[data-modal-right="${id}"]`)
        : document.querySelector(`.modal-right._open`);

      console.log(currentModal);
      overlay.classList.remove("_active");
      currentModal.classList.remove("_open");
      document.body.classList.remove("body-hidden");
    }
  }
}
