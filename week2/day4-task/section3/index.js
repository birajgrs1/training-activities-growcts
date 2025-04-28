function areCookiesEnabled() {
  try {
    document.cookie = "testcookie=1";
    const cookiesEnabled = document.cookie.indexOf("testcookie") !== -1;
    document.cookie = "testcookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"; 
    return cookiesEnabled;
  } catch (e) {
    return false;
  }
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const button = document.querySelector("[data-theme-toggle]");
  const newCta = theme === "dark" ? "Change to light theme" : "Change to dark theme";
  button.innerText = newCta;
  button.setAttribute("aria-label", newCta);
}

let currentThemeSetting = "light"; 
if (areCookiesEnabled()) {
  const storedTheme = getCookie("theme");
  if (storedTheme) {
    currentThemeSetting = storedTheme;
  } else {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme) {
      currentThemeSetting = localStorageTheme;
    }
  }
} else {
  localStorage.removeItem("theme"); 
}
applyTheme(currentThemeSetting);

const button = document.querySelector("[data-theme-toggle]");
button.addEventListener("click", () => {
  currentThemeSetting = currentThemeSetting === "dark" ? "light" : "dark";
  applyTheme(currentThemeSetting);
  if (areCookiesEnabled()) {
    localStorage.setItem("theme", currentThemeSetting);
    setCookie("theme", currentThemeSetting, 365); 
  }
});

function setCookieStorage(name, value, days) {
  setCookie(name, value, days);
}

function getCookieStorage(name) {
  return getCookie(name);
}

function setSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

function getSessionStorage(key) {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

document
  .getElementById("storageMethod")
  .addEventListener("change", function () {
    const cookieDaysGroup = document.getElementById("cookieDaysGroup");
    if (this.value === "cookie") {
      cookieDaysGroup.style.display = "block";
    } else {
      cookieDaysGroup.style.display = "none";
    }
  });

document
  .getElementById("setStorageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const storageMethod = document.getElementById("storageMethod").value;
    const name = document.getElementById("storageName").value;
    const value = document.getElementById("storageValue").value;
    const cookieDays = document.getElementById("cookieDays").value;

    if (storageMethod === "cookie") {
      const days = cookieDays ? parseInt(cookieDays) : 1;
      setCookieStorage(name, value, days);
      alert(`Cookie "${name}" set with value "${value}" for ${days} day(s).`);
    } else {
      setSessionStorage(name, value);
      alert(`SessionStorage "${name}" set with value "${value}".`);
    }
  });

document
  .getElementById("getStorageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const storageMethod = document.getElementById("getStorageMethod").value;
    const name = document.getElementById("getStorageName").value;
    let result;

    if (storageMethod === "cookie") {
      result = getCookieStorage(name);
    } else {
      result = getSessionStorage(name);
    }

    const storageResult = document.getElementById("storageResult");
    if (result) {
      storageResult.textContent = `"${name}" = "${result}"`;
    } else {
      storageResult.textContent = `No data found for "${name}".`;
    }
  });
