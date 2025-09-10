let priceOfChocolate = 1.99;
let hasAmountOnDebit = 5.00;

const canPurchase = hasAmountOnDebit >= priceOfChocolate;

if (canPurchase) {
    console.log('Enjoy your purchase');
} else {
    console.log('Sorry you do not have enough');
}