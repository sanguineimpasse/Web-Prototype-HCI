const sedan = document.querySelectorAll('.sedan');
const suv = document.querySelectorAll('.suv');
const hatchback = document.querySelectorAll('.hatchback');

const noSearchesDisplay = document.querySelector('.no-searches-found');

function filterCarType(){
    let filterSelect = document.getElementById('sortby-cartype');
    console.log("filterSelect.value = " + filterSelect.value);

    switch(filterSelect.value){
        case 'all':
            console.log('setting to \'all\'');
            sedan.forEach(function(element) {
                element.style.display = 'block';
            });
            suv.forEach(function(element) {
                element.style.display = 'block';
            });
            hatchback.forEach(function(element) {
                element.style.display = 'block';
            });

            noSearchesDisplay.style.display = 'none';
            break;
        case 'sedan':
            console.log('setting to \'sedan\'');
            sedan.forEach(function(element) {
                element.style.display = 'block';
            });

            suv.forEach(function(element) {
                element.style.display = 'none';
            });
            hatchback.forEach(function(element) {
                element.style.display = 'none';
            });

            noSearchesDisplay.style.display = 'none';
            break;
        case 'suv':
            console.log('setting to \'suv\'');
            suv.forEach(function(element) {
                element.style.display = 'block';
            });

            hatchback.forEach(function(element) {
                element.style.display = 'none';
            });
            sedan.forEach(function(element) {
                element.style.display = 'none';
            });

            noSearchesDisplay.style.display = 'none';
            break;
        case 'hatchback':
            hatchback.forEach(function(element) {
                element.style.display = 'block';
            });

            suv.forEach(function(element) {
                element.style.display = 'none';
            });
            sedan.forEach(function(element) {
                element.style.display = 'none';
            });

            noSearchesDisplay.style.display = 'none';
            break;
        case 'hardtop':
            suv.forEach(function(element) {
                element.style.display = 'none';
            });
            sedan.forEach(function(element) {
                element.style.display = 'none';
            });
            hatchback.forEach(function(element) {
                element.style.display = 'none';
            });

            noSearchesDisplay.style.display = 'block';
            break;
        case 'convertible':
            suv.forEach(function(element) {
                element.style.display = 'none';
            });
            sedan.forEach(function(element) {
                element.style.display = 'none';
            });
            hatchback.forEach(function(element) {
                element.style.display = 'none';
            });

            noSearchesDisplay.style.display = 'block';
            break;
    }
}