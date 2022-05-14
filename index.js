window.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#burger").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.add("active");
  })
  document.querySelector("#cross").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.remove("active");
  })
  })
