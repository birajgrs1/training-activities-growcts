document.getElementById("analyzeBtn").addEventListener("click", () => {
  const text = document.getElementById("inputTexts").value.trim();
  const substring = document.getElementById("inputSubstring").value.trim();
  const resultsDiv = document.getElementById("results");

  if (text === "") {
    resultsDiv.innerHTML =
      "<p class='text-red-500'> Please enter some text to analyze.</p>";
    return;
  }

  const words = text.match(/\b\w+\b/g) || [];
  const characters = text.length;
  const regex = new RegExp(substring, "gi");
  const substringCount = substring ? (text.match(regex) || []).length : 0;

  resultsDiv.innerHTML = `
          <p> <strong>Characters:</strong> ${characters}</p>
          <p> <strong>Words:</strong> ${words.length}</p>
          <p> <strong>Occurrences of "${substring}":</strong> ${substringCount}</p>
        `;
});
