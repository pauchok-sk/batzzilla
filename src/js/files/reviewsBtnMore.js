import reviewsHide from "./reviewsHide.js";

export default function reviewsBtnMore() {
  const btn = document.querySelector(".s-reviews__btn-more");

  if (btn) {
    btn.addEventListener("click", reviewsHide);
  }
}
