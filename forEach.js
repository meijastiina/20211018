let fruits = new Array();

let banana = {
    name: 'banana',
    color: 'yellow'
}

let watermelon = {
    name: 'watermelon',
    color: 'green'
}

let apple = {
    name: 'apple',
    color: 'red'
}

fruits

for(let i = 0; i < fruits.length; i++) {
    document.write(fruits[i]);
}

document.write("<h2>ForEach</h2>");



fruits.forEach(fruit => {
    document.write(fruit);
});