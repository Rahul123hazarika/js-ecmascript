// 1. Developing a shopping cart core func
//  website. Create a func
//  onali
//  es for an e-commerce 
// on that calculates the total price of items in the 
// cart, regardless of how many items are added. 

const calculate =(cart)=>{
    return cart.reduce((total, item)=>total+item.price,0);
    /* cart.reduce(...)

.reduce() is an array method.
It processes each element of the array and reduces it to a single result (like sum, product, or combined object).*/

};

const cart=[
    {name: 'Shirt', price: 20},
    {name: 'Pants', price: 50},
    {name: 'Shoes', price: 30}
];
console.log(calculate(cart));
