$(document).ready(function() {
    let toggleButton = $('.toggleButton');
    let sideBar = $('.sideBar');
    let toggleIcon = $('.toggleButton i');
    let links = $('.sideBar ul li');

    toggleButton.click(function() {
        sideBar.toggleClass('showLinksBox');
        if (sideBar.hasClass('showLinksBox')) {
            toggleIcon.removeClass('fa-sliders').addClass('fa-x');
            $('.linksBox').addClass('showLinks');
            links.hide().each(function(index) {
                $(this).delay(100 * index).slideDown(300);
            });
        } else {
            toggleIcon.removeClass('fa-x').addClass('fa-sliders');
            links.slideUp(300, function() {
                $('.linksBox').removeClass('showLinks');
            });
        }
    });
    links.click(function() {
        sideBar.removeClass('showLinksBox');
        toggleIcon.removeClass('fa-x').addClass('fa-sliders');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    fetchMealsByName('').then(meals => displayMeals(meals, 'search-results'));
});

function displayMealDetails(meal, targetId) {
    const target = document.getElementById(targetId);
    target.innerHTML = `
        <div class="col-4">
            <div class="img-container overflow-hidden rounded">
                <img src="${meal.strMealThumb}" class="w-100" alt="${meal.strMeal}">
            </div>
            <div class="mealName text-white fs-2 text-center mt-3">${meal.strMeal}</div>
        </div>
        <div class="col-8 text-white">
            <h1>Instructions</h1>
            <p>${meal.strInstructions}</p>
            <div class="location fs-3 fw-bold my-1">Area : <span>${meal.strArea}</span></div>
            <div class="Category fs-3 fw-bold my-1">Category  : <span>${meal.strCategory}</span></div>
            <div class="Recipes fs-3 fw-bold my-1">Recipes  : 
                <div class="integrated d-flex flex-wrap">
                    ${ingredients(meal)}
                </div>
            </div>
            <div class="Tags fs-3 fw-bold my-1">Tags  : 
                <div class="buttons">
                    <div class="btn btn-success"><a href="${meal.strSource}" class="text-white text-decoration-none">source</a></div>
                    <div class="btn btn-danger"><a href="${meal.strYoutube}" class="text-white text-decoration-none">youtube</a></div>
                </div>
            </div>
        </div>
    `;
}
function ingredients(meal) {
    let ingredientsHTML = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '') {
            ingredientsHTML += `
                <div class="text-white bg-info rounded m-2 fs-6 px-2 py-1">${measure} ${ingredient}</div>
            `;
        }
    }
    return ingredientsHTML;
}
