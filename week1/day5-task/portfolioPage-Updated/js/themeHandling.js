document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const themeText = document.getElementById("theme-text");
  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");

  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateIcon(currentTheme);

  toggleButton.addEventListener("click", () => {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "dark"
        : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    if (theme === "dark") {
      lightIcon.style.display = "inline-block";
      darkIcon.style.display = "none";
      themeText.textContent = "Change to light Theme";
    } else {
      lightIcon.style.display = "none";
      darkIcon.style.display = "inline-block";
      themeText.textContent = "Change to dark Theme";
    }
  }
});
