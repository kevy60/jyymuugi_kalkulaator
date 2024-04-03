// Näitab toodet ja hinda
let quantity = "68";
let price = "9.50";
console.log("Initial price: ", price, "Quantity: ", quantity);

let orderValue; // Declare orderValue globally

// See siis arvutab tellimuse hinna
function calculateOrderValue(quantity, price, stateCode) {
    const salesTaxRates = {
        "FL": 0.06, // Florida
        "AR": 0.056, // Arizona
        "TX": 0.0625, //Texas
        "CA": 0.0825, //California
        "UT": 0.0685, //Utah
    };

    // Kontrollib siis kas osariigi kood on defineeritud
    if (salesTaxRates.hasOwnProperty(stateCode)) {
        // Arvutab tellimuse hinna ilma müügimaksuta
        orderValue = quantity * price;
        let salesTax = orderValue * salesTaxRates[stateCode];
        orderValue += salesTax;

        // Kindel allahindlus
        const discountPercentance = 20;
        const discountPrice = orderValue - (orderValue * (discountPercentance / 100));

        return { orderValue, discountPrice };
    } else {
        return "Osariigi kood ei ole määratud.";
    }
}

let result = calculateOrderValue(5, 10, "AR");

if (typeof result === "object") {
    console.log("Order Value: ", result.orderValue);
    console.log("Discount Price: ", result.discountPrice);
} else {
    console.log(result);
}
