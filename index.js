const cel_input = document .querySelector('#cel-data');
const far_input = document .querySelector('#far-data');
const kel_input = document .querySelector('#kel-data');

const clear_btn = document .querySelector('#clear-btn');
 function roundNumber (number){
    return Math.round(number*100)/100;
 }
cel_input.addEventListener('input',()=>{
    
    let cTemp = parseFloat(cel_input.value);
    let  fTemp = (cTemp*(9/5))+32;
    let kTemp = cTemp + 273.15;

    far_input.value = roundNumber(fTemp);
    kel_input.value =roundNumber(kTemp);
});

far_input.addEventListener('input',()=>{
    
    let fTemp = parseFloat(far_input.value);
    let  cTemp = (fTemp-32)*(5/9);
    let kTemp = (fTemp-32)* (5/9) + 273.15;

    cel_input.value = roundNumber(cTemp);
    kel_input.value =roundNumber(kTemp);
});

kel_input.addEventListener('input',()=>{
    
    let kTemp = parseFloat(kel_input.value);
    let  cTemp = kTemp-273.15;
    let fTemp = (kTemp - 273.15) * (9/5) + 32;

    cel_input.value = roundNumber(cTemp);
    far_input.value =roundNumber(fTemp);
});

clear_btn.addEventListener('click',()=>{
    cel_input.value = "";
    far_input.value = "";
    kel_input.value = "";
});

