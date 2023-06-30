
const form = document.getElementById('tempConverter');
const result = form.querySelector('.result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const temperature = parseFloat(form.querySelector('#temperature').value);
    const unit = form.querySelector('#unit').value;

    let convertedTemp;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemp = temperature * 9 / 5 + 32;
        convertedUnit = 'F';
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temperature - 32) * 5 / 9;
        convertedUnit = 'C';
    } else if (unit === 'kelvin') {
        convertedTemp = temperature - 273.15;
        convertedUnit = 'C';
    }

    result.innerHTML = `${convertedTemp.toFixed(2)}&deg;${convertedUnit}`;
    result.classList.remove('hide');
});
