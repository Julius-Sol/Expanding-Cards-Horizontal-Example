const panels = document.querySelector(".container");

panels.addEventListener("click", (event) => {
  if (event.target.classList.contains("panel")) {
    let actives = document.querySelectorAll(".active");
    actives.forEach((panel) => {
      panel.classList.remove("active");
    });
    event.target.classList.add("active");
  }
});
