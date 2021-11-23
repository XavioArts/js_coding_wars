const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id

// and returns a new object with name changed to "changed"

const changeName = (array, id) => {
    let newName = "changed";
    let newArray = array.map((item) => {
        if (item.id !== id) {
            return item;
        }
        else {
            return { ...item, name: newName };
        }
    });
    return newArray;
}

// console.log(taco);
// console.log(changeName(tacos, 1));



// write a function that takes an tacoOBJ and return some

// formatted html (will be a string technically)

const formatHTML = (item) => {
    return `<div><h1>${item.name}<h1><p>${item.about}, $${item.price}.00</p></div>`;
};

// console.log(formatHTML(taco1));
// console.log(formatHTML(taco2));
// console.log(formatHTML(taco));


// write a function that takes an tacoOBJ and return formatted price with

// .00 

const formatPrice = (obj) => {
    let newPrice = obj.price.toFixed(2);
    let newObj = { ...obj, price: newPrice };
    return newObj;
}

// console.log(formatPrice(taco1));


// create a new array where all of the prices is formatted with .00

const formatPriceArray = (array) => {
    let newArray = array.map((obj) => {
        return formatPrice(obj);
    });
    return newArray;
}

// console.log(formatPriceArray(tacos));



// write a function that takes an array and logs each item in the array

// hint forEach

const logArray = (array) => {
    array.forEach((obj) => {
        console.log(obj);
    })
}

logArray(tacos);// 



// use the find method to return the object with id:1



// return a new array with all prices greater than 19



// return a new array with a 'info' key where it is a combo of

// name price and about




///CRUD

// don't change tacos array or change objects




// READ (array of obj to array of html) 

// Update (update a taco) 

// Remove (delete a taco) 

// Create (add a taco) 



// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own
