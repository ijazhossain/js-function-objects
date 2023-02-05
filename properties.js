var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
};

// getting object property value
var penCount = shoppingCart.pen;
// console.log(penCount);
const penCount2 = shoppingCart["pen"];
// console.log(penCount2);
const propertyName = 'sunglass';
const propertyValue = shoppingCart[propertyName];
// console.log(propertyValue);

// getting object keys
const objectKeys = Object.keys(shoppingCart);
// console.log(objectKeys);

// getting object values
const objectValues = Object.values(shoppingCart);
// console.log(objectValues);

// setting object property values
shoppingCart.sunglass = 30;
// console.log(shoppingCart);

shoppingCart['sunglass'] = 4;
// console.log(shoppingCart);

shoppingCart[propertyName] = 100;
console.log(shoppingCart);