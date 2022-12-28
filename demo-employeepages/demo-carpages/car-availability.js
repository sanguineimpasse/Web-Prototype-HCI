const availabilityButton = document.getElementById('car-button');

function changeAvailability(carAvailability){
    if(carAvailability){
        availabilityButton.style.background = 'var(--buttonred)';
        carAvailability = false;
        return carAvailability;
    }
    else{
        availabilityButton.style.background = 'var(--buttongreen)';
        carAvailability = true;
        return carAvailability;
    }
}