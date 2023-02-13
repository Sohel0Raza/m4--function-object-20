var shoppingCart = {
    books: 12,
    sunglass: 5,
    keyboard: 2,
    mouse: 7,
    pen: 25,
    shoes: 6,
    rose: 101
}
const keys = Object.keys(shoppingCart)
console.log(keys)
const values = Object.values(shoppingCart)
console.log(values)
for (var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName]
    console.log(propertyName, propertyValue)
}

//for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName]
    console.log(propertyName, value)
}