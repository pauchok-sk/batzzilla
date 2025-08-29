export default function placeDay() {
  const items = document.querySelectorAll(".s-places__item");

  if (items.length) {
    const day = new Date().getDay();

    items.forEach(item => {
      const days = item.querySelectorAll(".s-places__item-day");
      const index = day === 0 ? 6 : day - 1;

      days[index].classList.add("_active");
    })
  }
}