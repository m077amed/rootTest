// document.querySelector('.categoryLink').addEventListener('click', function() {
//     const content = document.getElementById('content');
//     fetchMealCategories().then(categories => {
//         content.innerHTML = categories.map(category => `
//             <div class="col-3 my-3">
//                 <div class="meal-card position-relative overflow-hidden rounded category" data-category="${category.strCategory}">
//                     <div class="img-container">
//                         <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-100">
//                     </div>
//                     <div class="overlay center flex-column position-absolute w-100 h-100 fs-6 text-center categoryText">
//                         <p class="fs-4">${category.strCategory}</p>
//                         <p class="description">${category.strCategoryDescription}</p>
//                     </div>
//                 </div>
//             </div>
//         `).join('');
//         document.querySelectorAll('.category').forEach(categoryElement => {
//             categoryElement.addEventListener('click', function() {
//                 const category = this.getAttribute('data-category');
//                 fetchMealsByCategory(category).then(meals => displayMeals(meals));
//             });
//         });
//     });
// });

// function displayMeals(meals) {
//     const searchResults = document.getElementById('search-results');
//     if (meals) {
//         searchResults.innerHTML = meals.map(meal => `
//             <div class="col-3 p-3">
//                 <div class="meal-card position-relative overflow-hidden rounded">
//                     <div class="img-container">
//                         <img src="${meal.strMealThumb}" class="w-100" alt="${meal.strMeal}">
//                     </div>
//                     <div class="overlay center position-absolute w-100 h-100">${meal.strMeal}</div>
//                 </div>
//             </div>
//         `).join('');
//     } else {
//         searchResults.innerHTML = '<p class="text-white">No meals found.</p>';
//     }
// }


document.querySelector('.categoryLink').addEventListener('click', function() {
    const content = document.getElementById('content');
    fetchMealCategories().then(categories => {
        content.innerHTML = categories.map(category => `
            <div class="col-3 my-3">
                <div class="meal-card position-relative overflow-hidden rounded category" data-category="${category.strCategory}">
                    <div class="img-container">
                        <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-100">
                    </div>
                    <div class="overlay center flex-column position-absolute w-100 h-100 fs-6 text-center categoryText">
                        <p class="fs-4">${category.strCategory}</p>
                        <p class="description">${category.strCategoryDescription}</p>
                    </div>
                </div>
            </div>
        `).join('');
        document.querySelectorAll('.category').forEach(categoryElement => {
            categoryElement.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                fetchMealsByCategory(category).then(meals => displayMeals(meals, 'content'));
            });
        });
    });
});

function displayMeals(meals, targetId) {
    const target = document.getElementById(targetId);
    if (meals) {
        target.innerHTML = meals.map(meal => `
            <div class="col-3 p-3 meal" data-meal-id="${meal.idMeal}">
                <div class="meal-card position-relative overflow-hidden rounded">
                    <div class="img-container">
                        <img src="${meal.strMealThumb}" class="w-100" alt="${meal.strMeal}">
                    </div>
                    <div class="overlay center position-absolute w-100 h-100">${meal.strMeal}</div>
                </div>
            </div>
        `).join('');
        document.querySelectorAll('.meal').forEach(mealElement => {
            mealElement.addEventListener('click', function() {
                const mealId = this.getAttribute('data-meal-id');
                fetchMealDetails(mealId).then(meal => displayMealDetails(meal, 'content'));
            });
        });
    } else {
        target.innerHTML = '<p class="text-white">No meals found.</p>';
    }
}

