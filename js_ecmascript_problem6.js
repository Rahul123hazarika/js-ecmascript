//5. You're building a loading animation for your web app. Implement a function that simulates a delay using a Promise. 
/*The Promise constructor is used to create a new Promise object. 
    The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.*/
/*The setTimeout() function is used to introduce a delay in the execution of code.
    It takes two arguments: a callback function and a delay time in milliseconds.
    The callback function is executed after the specified delay time.*/
const delay=(ms)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
}
    /*The Promise constructor is used to create a new Promise object. 
    The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.*/
    /*The setTimeout() function is used to introduce a delay in the execution of code.
    It takes two arguments: a callback function and a delay time in milliseconds.
    The callback function is executed after the specified delay time.*/
    console.log(" loading ... thank you for your patience");
    delay(3000).then(()=>
        {console.log("loading completed")}
    );
