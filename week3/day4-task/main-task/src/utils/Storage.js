export const setCookie = (name, value, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
};

export const getCookie = (name) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
};

export const setSession = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSession = (key) => {
  const item = sessionStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
