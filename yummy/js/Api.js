const API_URL = "https://www.themealdb.com/api/json/v1/1/";

function fetchMealsByName(name) {
    return fetch(`${API_URL}search.php?s=${name}`)
        .then(response => response.json())
        .then(data => data.meals);
}
function fetchMealsByFirstLetter(letter) {
    return fetch(`${API_URL}search.php?f=${letter}`)
        .then(response => response.json())
        .then(data => data.meals);
}
function fetchMealCategories() {
    return fetch(`${API_URL}categories.php`)
        .then(response => response.json())
        .then(data => data.categories);
}
function fetchMealsByCategory(category) {
    return fetch(`${API_URL}filter.php?c=${category}`)
        .then(response => response.json())
        .then(data => data.meals);
}
function fetchMealDetails(id) {
    return fetch(`${API_URL}lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => data.meals[0]);
}
function fetchMealsByArea(area) {
    return fetch(`${API_URL}filter.php?a=${area}`)
        .then(response => response.json())
        .then(data => data.meals);
}
function fetchMealAreas() {
    return fetch(`${API_URL}list.php?a=list`)
        .then(response => response.json())
        .then(data => data.meals.map(area => ({
            strArea: area.strArea
        })));
}
function fetchIngredients() {
    return fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(response => response.json())
        .then(data => data.meals);
}
function fetchMealsByIngredient(ingredient) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => response.json())
        .then(data => data.meals);
}
