// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#chk");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If we already visited and enabled the DarkMode, it will start enabled.

if (darkMode === "enabled") {
  darkModeToggle.checked = true; /*This keep the button at the same place if it's dark. */
  enableDarkMode();
}

// When we click on the button:

const toggleColor = document.querySelector(".label");
darkModeToggle.addEventListener("click", () => {
  // get the darkMode setting (in localStorage)
  darkMode = localStorage.getItem("darkMode");

  // if it is not currently enabled, enable it!
  if (darkMode !== "enabled") {
    toggleColor.style.backgroundColor = "#232326FF";
    enableDarkMode();
    // if it has been enabled, turn it off !
  } else {
    toggleColor.style.backgroundColor = "#e2e8f0";
    disableDarkMode();
  }
});
