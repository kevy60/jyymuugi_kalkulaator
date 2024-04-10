const readline = require('readline');
// Näitab toodet ja hinda
let quantity = 50;
let price = 9.50;

// See siis arvutab tellimuse hinna
function calculateOrderValue(quantity, price, stateCode, discountCode, discountLevel) {
    const salesTaxRates = {
        "FL": 0.06, // Florida
        "AR": 0.056, // Arizona
        "TX": 0.0625, //Texas
        "CA": 0.0825, //California
        "UT": 0.0685, //Utah
    };

    const discountCodes = {
        "DISCOUNT10": 0.10,
        "DISCOUNT20": 0.20,
    };

    if (salesTaxRates.hasOwnProperty(stateCode.toUpperCase())) {
        let orderValue = quantity * price;
        let salesTax = orderValue * salesTaxRates[stateCode.toUpperCase()];
        orderValue += salesTax;

        let discountPrice = orderValue;

        if (discountCodes.hasOwnProperty(discountCode)) {
            discountPrice -= discountPrice * discountCodes[discountCode];
        }

        if (discountLevel == 'low'){
            discountPrice = discountPrice * 0.9;
        } else if (discountLevel == 'medium'){
            discountPrice = discountPrice * 0.8;
        } else if (discountLevel == 'high'){
            discountPrice = discountPrice * 0.7;
        } else {
            console.log('Invalid discount level');
            return orderValue;
        }

        return { orderValue, discountPrice };
    } else {
        return "State code is not defined.";
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Initial price: ", price, "Quantity: ", quantity);

rl.question('Please enter your discount code(DISCOUNT10 or DISCOUNT20): ', (discountCode) => {
    discountCode = discountCode.toUpperCase();
    let result = calculateOrderValue(quantity, price, "AR", discountCode, "low");

    if (typeof result === "object") {
        console.log("Order Value: ", result.orderValue);
        console.log("Discount Price: ", result.discountPrice);
    } else {
        console.log(result);
    }

    rl.close();
});