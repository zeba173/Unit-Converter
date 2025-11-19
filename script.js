const Length = document.querySelector("#length")
const Volume = document.querySelector("#volume")
const Mass = document.querySelector("#mass")


function unitConverter()
{
    const inputValue = document.querySelector("#input-el").value
    const inputNumber = Number(inputValue)
    const metersTofeet = inputNumber * 3.28084
    const feetTometers = inputNumber * 0.3048
    const litresTogallons = inputNumber * 0.264172
    const gallonsTolitres = inputNumber * 3.78541
    const kilosTopounds = inputNumber * 2.20462
    const poundsTokilos = inputNumber * 0.453592


    Length.textContent = `${inputNumber} meters = ${metersTofeet.toFixed(3)} feet | ${inputNumber} feet = ${feetTometers.toFixed(3)} meters`
    Volume.textContent = `${inputNumber} litres = ${litresTogallons.toFixed(3)} gallons | ${inputNumber} gallons = ${gallonsTolitres.toFixed(3)} litres`
    Mass.textContent = `${inputNumber} kilos = ${kilosTopounds.toFixed(3)} pounds | ${inputNumber} pounds = ${poundsTokilos.toFixed(3)} kilos`
}