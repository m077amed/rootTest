document.querySelector('.searchLink').addEventListener('click', function() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="search">
            <h2 class="text-white text-center mb-5">Search On Meals</h2>
            <div class="d-flex">
                <div class="w-50">
                    <input type="text" id="meal-name" placeholder="Search by meal name" class="w-100 p-2 bg-dark border border-white rounded text-white">
                </div>
                <div class="w-50">
                    <input type="text" id="meal-letter" placeholder="Search by first letter" class="w-100 p-2 bg-dark border border-white rounded ms-2 text-white" maxlength="1">
                </div>
            </div>
            <div id="search-results" class="mt-5 d-flex flex-wrap"></div>
        </div>
    `;

    document.getElementById('meal-name').addEventListener('input', function() {
        const mealName = document.getElementById('meal-name').value;
        if (mealName) {
            fetchMealsByName(mealName).then(meals => displayMeals(meals, 'search-results'));
        } else {
            document.getElementById('search-results').innerHTML = '';
        }
    });

    document.getElementById('meal-letter').addEventListener('input', function() {
        const mealLetter = document.getElementById('meal-letter').value;
        if (mealLetter) {
            fetchMealsByFirstLetter(mealLetter).then(meals => displayMeals(meals, 'search-results'));
        } else {
            document.getElementById('search-results').innerHTML = '';
        }
    });
});
