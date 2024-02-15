// function calculateParallelogramArea() {
//     // const baseInput = document.getElementById('parallelogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     // console.log(base);
//     const base = getParallelogramBase();
//     console.log(base);
// }

// function getParallelogramBase (){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }


function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base')
    // console.log('base value', base);
    const hight = getInputValueById('parallelogram-hight')
    // console.log('Hight value', hight);
    const area = base * hight;
    console.log(area);
    setInnerTextById('parallelogram-area', area);
}
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}