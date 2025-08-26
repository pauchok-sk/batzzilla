export default function reviewsHide() {
  const contents = document.querySelectorAll(".s-reviews__item-content");

  if (contents.length) {
    contents.forEach(content => {
      const body = content.closest(".s-reviews__item-body");

      if (!body.classList.contains("_hide") && body.clientHeight > 0) {
        const btn = body.nextElementSibling;
  
        let maxHeight = window.matchMedia("(max-width:991px)").matches ? 116 : 130;
  
        if (content.clientHeight >= maxHeight) {
          body.classList.add("_hide");
        } else {
          btn?.remove();
        }
      };
    })
  }
}