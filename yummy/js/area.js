document.querySelector('.areaLink').addEventListener('click', function() {
    const content = document.getElementById('content');
    fetchMealAreas().then(areas => {
        content.innerHTML = areas.map(area => `
            <div class="col-3 my-3">
                <div class="meal-card position-relative overflow-hidden rounded area" data-area="${area.strArea}">
                    <div class="icon">
                        <i class="fa-solid fa-house-fire text-white AreaIcon"></i>
                    </div>
                    <div class="name text-white fs-2 mt-2 text-capitalize">${area.strArea}</div>
                </div>
            </div>
        `).join('');
        document.querySelectorAll('.area').forEach(areaElement => {
            areaElement.addEventListener('click', function() {
                const areaName = this.getAttribute('data-area');
                fetchMealsByArea(areaName).then(meals => displayMeals(meals, 'content'));
            });
        });
    });
});