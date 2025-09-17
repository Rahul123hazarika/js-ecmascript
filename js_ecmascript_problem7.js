//For a text-formaing tool, create a function that converts all property values in an object to uppercase strings
const uppercase=(obj)=>{
  const newobj={};
  for(let key in obj){
    newobj[key]=obj[key].toUpperCase();
  }
  return newobj;

};

const user={
    name:'rahul',
    place: "Nagaon",
    state: "Assam"
}
const place={
    name:'Banshankari',
    state: "karnataka",
    city: "Bangalore"
}
console.log(uppercase(user));
console.log(uppercase(place));
