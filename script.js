const generateBtn = document.getElementById("generateBtn");
const mealCard = document.getElementById("mealCard");
const mealImg = document.getElementById("mealImg");
const mealName = document.getElementById("mealName");
const mealCategory = document.getElementById("mealCategory");
const mealArea = document.getElementById("mealArea");
const mealInstructions = document.getElementById("mealInstructions");
const youtubeLink = document.getElementById("youtubeLink");

function getRandomMeal() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals[0]))
    .catch((err) => console.error("Error fetching meals:", err));
}

function displayMeal(meal) {
  mealImg.src = meal.strMealThumb;
  mealName.textContent = meal.strMeal;
  mealCategory.textContent = meal.strCategory;
  mealArea.textContent = meal.strArea || "No specified area";
  mealInstructions.textContent = meal.strInstructions;

  // if there is a youtube link, show the btn else hide it
  if (meal.strYoutube) {
    youtubeLink.href = meal.strYoutube;
    youtubeLink.classList.remove("hidden");
  } else youtubeLink.classList.add("hidden");

  mealCard.classList.remove("hidden");
}

generateBtn.addEventListener("click", getRandomMeal);

getRandomMeal();
