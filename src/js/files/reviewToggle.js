export default function reviewToggle() {
  const buttons = document.querySelectorAll(".s-reviews__item-btn");

  if (buttons.length) {
    const modalName = document.querySelector("#review-name");
    const modalDate = document.querySelector("#review-date");
    const modalStars = document.querySelector("#review-stars");
    const modalContent = document.querySelector("#review-content");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".s-reviews__item");
        const name = item.querySelector(".s-reviews__item-name");
        const date = item.querySelector(".s-reviews__item-date");
        const stars = item.querySelector(".s-reviews__item-stars");
        const content = item.querySelector(".s-reviews__item-content");

        modalName.innerHTML = name.innerHTML;
        modalDate.innerHTML = date.innerHTML;
        modalStars.innerHTML = stars.innerHTML;
        modalContent.innerHTML = content.innerHTML;
      })
    })
  }
}