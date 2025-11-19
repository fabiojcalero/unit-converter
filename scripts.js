const convertBtn = document.getElementById("convert-btn")
const lengthResultEl = document.getElementById("length-result")
const volumeResultEl = document.getElementById("volume-result")
const massResultEl = document.getElementById("mass-result")
const unitInputEl = document.getElementById("unit-input")

// Unit conversion factors
const METER_TO_FOOT = 3.28084;
const LITER_TO_GALLON = 0.264172;
const KILOGRAM_TO_LB = 2.20462;

convertBtn.addEventListener("click", function() {
    displayLength()
    displayVolume()
    displayMass()
})

function displayLength() {
    let measurementUnit = unitInputEl.value
    let feet = convertUnit(measurementUnit, METER_TO_FOOT)
    let meters = convertUnit(measurementUnit, (1 / METER_TO_FOOT))
    let resultText = `${measurementUnit} meters = ${feet} feet | ${measurementUnit} feet = ${meters} meters`
    renderText(resultText, lengthResultEl)
}

function displayVolume() {
    let measurementUnit = unitInputEl.value
    let gallons = convertUnit(measurementUnit, LITER_TO_GALLON)
    let liters = convertUnit(measurementUnit, (1 / LITER_TO_GALLON))
    let resultText = `${measurementUnit} liters = ${gallons} gallons | ${measurementUnit} gallons = ${liters} liters`
    renderText(resultText, volumeResultEl)
}

function displayMass() {
    let measurementUnit = unitInputEl.value
    let lb = convertUnit(measurementUnit, KILOGRAM_TO_LB)
    let kg = convertUnit(measurementUnit, (1 / KILOGRAM_TO_LB))
    let resultText = `${measurementUnit} kg = ${lb} pounds | ${measurementUnit} pounds = ${kg} kilos`
    renderText(resultText, massResultEl)
}

function convertUnit(num, factor) {
    return (num * factor).toFixed(3);
}

function renderText(text, element) {
    element.textContent = text;
}