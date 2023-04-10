/*
Units
-----------
1 meter = 3.28084 feet
1 foot = 0.3048 meters
1 litre = 0.264172 gallons
1 gallon = 3.78541 litres
1 kilogram = 2.20462 pounds
1 pound = 0.453592 kilograms
*/

const convertButton = document.getElementById("convert-button")
const metricInput = document.getElementById("metric-input")
const metreToFootText = document.getElementById("metre-to-feet")
const footToMetresText = document.getElementById("feet-to-metre")
const litresToGallonText = document.getElementById("litres-to-gallon")
const gallonToLitresText = document.getElementById("gallon-to-litres")
const kilosToPoundsText = document.getElementById("kilos-to-pounds")
const poundsToKilosText = document.getElementById("pounds-to-kilos")

function metricConverter(meter,foot,litre,gallon,kilogram,pound){

    //constant

    const meterToFoot = meter * 3.28084
    const footToMeter = foot * 0.3048
    const litreToGallon = litre * 0.264172
    const gallontoLitre = gallon * 3.78541
    const kilogramToPounds = kilogram * 2.20462
    const poundToKilogram = pound * 0.453592

    //display the content and show the values in 3 decimal places

    metreToFootText.textContent = `${meter} meters = ${meterToFoot.toFixed(3)} feet`
    footToMetresText.textContent = `${foot} feet = ${footToMeter.toFixed(3)} metres`
    litresToGallonText.textContent = `${litre} liters is equal to ${litreToGallon.toFixed(3)} gallon`
    gallonToLitresText.textContent = `${gallon} gallon = ${gallontoLitre.toFixed(3)} liters`
    kilosToPoundsText.textContent = `${kilogram} kilogram is equal to ${kilogramToPounds.toFixed(3)} pounds`
    poundsToKilosText = `${pound} pound is equal to ${poundToKilogram.toFixed(3)} kilogram`

}

convertButton.addEventListener("click",(e)=>{
    metricConverter(metricInput.value,metricInput.value,metricInput.value,metricInput.value,metricInput.value,metricInput.value)
})
