// See siis arvutab tellimuse hinna
function calculateOrderValue(quantity, price, stateCode) {
    const salesTaxRates = {
        "AL": 0.04, // Alabama
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

console.log(calculateOrderValue(5, 10, "AL"));
