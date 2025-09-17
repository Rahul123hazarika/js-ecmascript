//In a messaging app, you want to display only the first name of a user.
//Create a funcƟon that extracts the first name from a full name string. 
const displayFirstname=(username)=>{
  return username.split(' ')[0];
    
}
console.log(displayFirstname("rahul hazarika"));
console.log(displayFirstname("annu sharma"));
