const btn = document.querySelector("button");

const body = document.querySelector("body");
let currentMode = "Light";

btn.addEventListener("click", () => {
  if (currentMode === "Light") {
    currentMode = "Dark";
    body.classList.add("dark");
    btn.textContent = "Change to light theme"
    body.classList.remove("light");
  } else {
    currentMode = "Light";
    body.classList.add("light");
    btn.textContent = "Change to dark theme"
  }
  console.log(currentMode);
});
