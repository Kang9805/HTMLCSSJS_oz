const today = new Date();
const target = new Date("2025-08-04T11:06");

const timetag = document.getElementById("datetime");

function updatetime() {
  const now = new Date();
  timetag.textContent = now.toLocaleString();
}

setInterval(updatetime, 1000);
updatetime;

// 다크모드
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("color-theme") || "light";
  document.documentElement.setAttribute("color-theme", savedTheme);
});

const toggleButton = document.querySelector(".dark-light-toggle");

toggleButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("color-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("color-theme", newTheme);
  localStorage.setItem("color-theme", newTheme);
});

const toggleBtn = document.querySelector(".dark-light-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // 상태 저장
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
