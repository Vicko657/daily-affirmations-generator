function displayAffirmations(response) {
  new Typewriter("#affirmation", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 30,
  });
}

function generateAffirmations(event) {
  event.preventDefault();

  const wordInput = document.querySelector("#users-word");

  const apiKey = "t6a8db7630cb9o483fccd0984e54c304";
  const prompt = `User Instructions: Generate affirmations based on ${wordInput.value}`;
  const context =
    "You are a mental health expert in affirmations. Create a list of 8 affirmations in basic HTML. No bullets, links, titles and code should be seen. Please keep them short, appropriate and follow the user instructions. Sign the affirmations with 'SheCodes AI inside a <strong> element";
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAffirmations);

  const affirmationElement = document.querySelector("#affirmation");
  affirmationElement.classList.remove("hidden");
  affirmationElement.innerHTML = `⏳ Generating a list of affirmations on your ${wordInput.value} emotion`;
}

const affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmations);
