// fancifymytext.js

// 1. Increase font size to 24pt
function makeBigger() {
  const textArea = document.getElementById("text-input");
  textArea.style.fontSize = "24pt";
}

// 2. Apply or remove "fancy" styles when radio buttons change
function applyStyle() {
  const textArea = document.getElementById("text-input");
  const isFancy = document.getElementById("fancy").checked;

  if (isFancy) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    // BoringBetty
    textArea.style.fontWeight = "normal";
    textArea.style.color = "";
    textArea.style.textDecoration = "none";
  }
}

// 3. Uppercase + add "-Moo" suffix to last word of each sentence
function mooify() {
  const textArea = document.getElementById("text-input");
  // Convert entire text to uppercase
  let text = textArea.value.toUpperCase();

  // Split into sentences by period
  const parts = text.split(".");
  const processed = parts
    .map((segment) => {
      const s = segment.trim();
      if (!s) return "";              // skip empty segments
      const words = s.split(" ");
      // append "-Moo" to the last word
      words[words.length - 1] = words[words.length - 1] + "-Moo";
      return words.join(" ");
    })
    .filter((seg) => seg !== "");

  // Rejoin with ". " and ensure it ends with a period
  textArea.value = processed.join(". ") + ".";
}
