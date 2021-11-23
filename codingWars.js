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

// logArray(tacos);



// use the find method to return the object with id:1

const findObj = (array, id) => {
    let newObj = array.find((obj) => { return obj.id === id });
    return newObj;
}

// console.log(findObj(tacos, 1));


// return a new array with all prices greater than 19

const highPrice = (array) => {
    let newArray = array.filter((obj) => {
        return obj.price > 19;
    });
    return newArray;
}

// console.log(highPrice(tacos));

//high price done


// return a new array with a 'info' key where it is a combo of

// name price and about

const addInfo = (array) => {
    let newArray = array.map((obj) => {
        let info = obj.name+obj.price+obj.about;
        return { ...obj, info: info }
    });
    return newArray;
}

// console.log(addInfo(tacos));




///CRUD

// don't change tacos array or change objects




// READ (array of obj to array of html) 

const readArray = (array) => {
    let newArray = array.map((obj) => {
        return `<div><p>${obj.name}, ${obj.about} - $${obj.price}</p></div>`;
    });
    return newArray;
}

// console.log(readArray(tacos));

// Update (update a taco) 

const updateName = (obj, new_name) => {
    let newObj = { ...obj, name: new_name };
    return newObj;
}

console.log(updateName(taco1, "harold"));
console.log(taco1);

// Remove (delete a taco) 

const deleteTaco = (array, id) => {
    let newArray = array.filter((obj) => {
        return obj.id !== id;
    });
    return newArray;
}

console.log(deleteTaco(tacos,2));

// Create (add a taco) 

const taco3 = {id:4, name:'meat-a-ball', price:500, about:'Its a spicy'}

const addObj = (array, obj) => {
    let newArray = [ ...array, obj ];
    return newArray;
}

console.log(addObj(tacos,taco3));

// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own
