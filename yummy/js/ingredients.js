document.querySelector('.ingredientLink').addEventListener('click', function() {
    const content = document.getElementById('content');
    fetchIngredients().then(ingredients => {
        content.innerHTML = ingredients.map(ingredient => `
            <div class="col-3 my-3">
                <div class="meal-card position-relative overflow-hidden rounded ingredient" data-ingredient="${ingredient.strIngredient}">
                    <div class="icon text-white text-center">
                        <i class="fa-solid fa-drumstick-bite AreaIcon"></i>
                    </div>
                    <div class="name text-white fs-4 mt-2 text-capitalize text-center">${ingredient.strIngredient}</div>
                    <div class="text-white mt-2 text-center ingredientHeight mb-2">${ingredient.strDescription}</div>
                </div>
            </div>
        `).join('');
        document.querySelectorAll('.ingredient').forEach(ingredientElement => {
            ingredientElement.addEventListener('click', function() {
                const ingredientName = this.getAttribute('data-ingredient');
                fetchMealsByIngredient(ingredientName).then(meals => displayMeals(meals, 'content'));
            });
        });
    });
});