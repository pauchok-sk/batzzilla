export function headerSearch() {
  const headerSearch = document.querySelector("#header-search");

  if (headerSearch) {
    const btn = document.querySelector("#header-search-btn");

    handleTop();
    window.addEventListener("resize", handleTop);
    window.addEventListener("scroll", () => {
      if (headerSearch.classList.contains("_open")) {
        headerSearch.classList.remove("_open");
        btn.classList.remove("_active");
      }
    });

    document.body.addEventListener("click", handleClose);

    headerSearch.addEventListener("click", (e) => e.stopPropagation());

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!btn.classList.contains("_active")) {
        handleOpen();
      } else {
        handleClose();
      }
    });

    function handleOpen() {
      headerSearch.classList.add("_open");
      btn.classList.add("_active");
    }

    function handleClose() {
      headerSearch.classList.remove("_open");
      btn.classList.remove("_active");
    }

    function handleTop() {
      const height = document.querySelector(".header").clientHeight;

      headerSearch.style.top = `${height}px`;
    }
  }
}
