// console.log("Hello, World!");

document.addEventListener("DOMContentLoaded", function () {
  //  Handeling Theme in page

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

  // Form Validation
  const form = document.getElementById("myForm");


  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim(); 
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("issue").value.trim();

    const nameErr = document.getElementById("name-error");
    const contactErr = document.getElementById("contact-error");
    const emailErr = document.getElementById("email-error");
    const msgErr = document.getElementById("message-error");
    const successMsg = document.getElementById("success-message");

    nameErr.textContent = "";
    contactErr.textContent = "";
    emailErr.textContent = "";
    msgErr.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
      nameErr.textContent = "Please enter your name properly.";
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      emailErr.textContent = "Invalid email address.";
      isValid = false;
    }

    // || !contact.startsWith('97') || !contact.startsWith('96')
    // console.log( name);

// if (!contact.startsWith('98')) {
//   contactErr.textContent = "Phone must be 10 digits, starting with 98, 97, or 96.";
//   console.log("msg", name);
//   isValid = false;
// }

    if(!contact.length == 10 || (!contact.startsWith('98') && (!contact.startsWith('97') && (!contact.startsWith('96'))))){
        contactErr.textContent = "Phone must be 10 digits.";
        isValid = false;
    }

    if (message === "" || !/^\S.*(?:\r?\n\S.*)*$/u.test(message)) {
      msgErr.textContent = "Please enter your message properly.";
      isValid = false;
    }

    if (isValid) {
      successMsg.textContent = "Thank you for contacting me!";
      console.log("Submission:");
      console.log("Name:", name);
      console.log("Contact:", contact);
      console.log("Email:", email);
      console.log("Message:", message);
      counter.innerText = "0 / 200";
      form.reset();
    }
  });

  const issueInput = document.getElementById("issue");
  const maxLength = issueInput.getAttribute("maxlength");
  const counter = document.getElementById("char-counter");

  issueInput.addEventListener("input", () => {
    const currentLength = issueInput.value.length;
    counter.innerText = `${currentLength} / ${maxLength}`;
  });
});
