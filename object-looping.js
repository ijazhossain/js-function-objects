var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
const keys = Object.keys(shoppingCart);
console.log(keys);
for (let i = 0; i < keys.length; i++) {
    const propertyName = keys[i];
    const propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}
for (const propertyName in shoppingCart) {
    const propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}