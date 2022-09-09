// var

var companyName = "Alterra";
console.log({ companyName }); // { companyName: 'Alterra' }

// can be re-asssigned value
companyName = "ABC ltd";
console.log({ companyName }); // { companyName: 'ABC ltd' }

// can be re-declared value
var companyName = "CBA ltd";
console.log({ companyName }); // { companyName: 'CBA ltd' }

// hoisting

laptopMerk = "Dell";

console.log({ laptopMerk });

var laptopMerk;

// store in global scope
var laptopOS = "Linux";
