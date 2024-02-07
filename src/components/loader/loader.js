const loader = document.querySelector("#load");

loader.innerHTML = `
<div class="loader">
<div class="loader_1"></div>
<div class="loader_2"></div>
</div>
`;
window.addEventListener("DOMContentLoaded", () => {
  showLoader();
});

window.addEventListener("load", () => {
  hideLoader();
  setTimeout(() => {}, 5000);
});

const showLoader = () => {
  loader.classList.add("show_loader");
};

const hideLoader = () => {
  loader.classList.remove("show_loader");
};
