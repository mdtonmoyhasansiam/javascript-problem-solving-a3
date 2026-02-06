
function newPrice(currentPrice , discount ) {
    if(
        typeof currentPrice !== "number" ||
        typeof discount !== "number" ||
        discount < 0 ||
        discount > 100
    ){
        return "Invalid"
    }
    let discountAmmount = (currentPrice*discount)/100;
    let finalPrice = currentPrice - discountAmmount;

    return finalPrice.toFixed(3)
}

// let test = newPrice(500, "5");
// console.log(test);

