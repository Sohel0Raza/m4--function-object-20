var roomItems = {
    computers: 3,
    phones: 5,
    books: 20,
    tables: 2,
    pants: 40
}
// console.log(roomItems)

/* properties value get */

var itemPhone = roomItems.phones
// console.log(itemPhone)
var itemComputer = roomItems['computers'];
// console.log(itemComputer)
var booksItem = 'books'
var booksCount = roomItems[booksItem]
// console.log(booksCount)

/*properties value set */
// console.log(roomItems)
roomItems.pants = 12;
// console.log(roomItems)
roomItems['books'] = 40;
// console.log(roomItems)
var tablesAdded = 'tables';
roomItems[tablesAdded] = 56;
// console.log(roomItems)

// all property keys 
var properties = Object.keys(roomItems)
console.log(properties)
var values = Object.values(roomItems)
console.log(values)