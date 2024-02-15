function calculatePentagonArea() {
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem')
    const area = 0.5 * perimeter * apothem
    setInnerTextById('pentagon-area', area);

}
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const Value = parseFloat(inputValueText);
    return Value;
}

function setInnerTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value
    
}