let gear = document.querySelector(".gear");
let sideBar = document.querySelector("aside");
gear.addEventListener("click", () => {
  sideBar.classList.toggle("show");
});
