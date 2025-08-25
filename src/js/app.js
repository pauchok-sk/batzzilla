import "../scss/style.scss";
import burger from "./files/burger.js";
import filters from "./files/filters.js";
import headerDrop from "./files/headerDrop.js";
import headerScroll from "./files/headerScroll.js";
import { headerSearch } from "./files/headerSearch.js";
import inputmask from "./files/inputmask.js";
import sliders from "./files/sliders.js";
import sortSelect from "./files/sortSelect.js";
import spoller from "./files/spoller.js";

spoller();
burger();
headerDrop();
headerSearch();
sliders();
headerScroll();
sortSelect();
filters();
inputmask();

Fancybox.bind("[data-fancybox]");
Shareon.init();

// Fancybox.show([{src: "#modal-connect", type: "inline"}])
