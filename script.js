//Diplay password on:;  
const DiplayPassWord = document.getElementById("passwordDisplay"); 
//Input for what the user want in their password; 
const UperrCase = document.getElementById("includeUppercase"); 
const UnderCase = document.getElementById("includeLowercase"); 
const Numbers = document.getElementById("includeNumbers");
const Symbols = document.getElementById("includeSymbols"); 
//Id Generate Button; 
const GenerateButton = document.getElementById("generateButton");
//Id Lenght Password 
const Lenght = document.getElementById("passwordLength"); 
//Getting how many checkbox are marked; 
GenerateButton.onclick = function(){
//this block counts how many boxes are marked
let NumberOfCheckboxes = 0; 
if(UperrCase.checked){
    NumberOfCheckboxes ++;   
}
if(UnderCase.checked){ 
    NumberOfCheckboxes ++; 
} 
if(Numbers.checked) { 
    NumberOfCheckboxes ++;  
}
if(Symbols.checked) { 
    NumberOfCheckboxes ++ ;  
}
console.log(NumberOfCheckboxes); 
if (NumberOfCheckboxes == 0 ){ 
    DiplayPassWord.innerHTML = "Selecione pelo menos 1 caixa de caracteres!";
}
//Caracters list 
let UpperCaseCaracters = ["A",'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let UnderCaseCaracters = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


}
;

//checking if the checkbox are enought to make the password; 



