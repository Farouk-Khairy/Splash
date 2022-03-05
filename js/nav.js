let myList = document.querySelector("nav .list"),
  toggle = document.querySelector("nav .toggle");
toggle.addEventListener("click", () => {
  myList.classList.toggle("active");
});
