document.getElementById("bjoke").addEventListener("click", async function () {
  let apiKey = "7ed3b7cd7f065ff030t5ab6d86o72477";
  let prompt = "tell me a joke";
  let context = "Make sure to provide a clear and precise answer";
  let jokeElement = document.getElementById("joke");

  jokeElement.textContent = "Loading joke...";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let response = await fetch(apiUrl);
  let data = await response.json();
  jokeElement.textContent = data.answer;
});
