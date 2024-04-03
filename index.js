// Näitab toodet ja hinda

quantity = "68" 
price = "9.50"
console.log(price, quantity);

// See siis arvutab tellimuse hinna
function calculateOrderValue(quantity, price, stateCode) {
    const salesTaxRates = {
        "FL": 0.06, // Florida
        "AR": 0.056, // Arizona
    };

    // Kontrollib siis kas osariigi kood on defineeritud
    if (salesTaxRates.hasOwnProperty(stateCode)) {
        // Arvutab tellimuse hinna ilma müügimaksuta
        let orderValue = quantity * price;
        let salesTax = orderValue * salesTaxRates[stateCode];
        orderValue += salesTax;
        return orderValue;
    } else {
        return "Osariigi kood ei ole määratud.";
    }
}

console.log(calculateOrderValue(5, 10, "AR"));

