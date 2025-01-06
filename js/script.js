function generateAffirmations(event) {
  event.preventDefault();
  alert("Generating affirmations");

  new Typewriter("#affirmation", {
    strings: "I am good enough",
    autoStart: true,
    cursor: "",
    delay: 30,
  });
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmations);
