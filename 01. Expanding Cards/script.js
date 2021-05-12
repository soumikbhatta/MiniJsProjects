const panels = document.querySelectorAll(".panel");
const panelContainer = document.querySelector(".container");

panelContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".panel");
  console.log(clicked);
  if (!clicked) {
    return;
  }
  removeActiveClasses();
  clicked.classList.add("active");
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

