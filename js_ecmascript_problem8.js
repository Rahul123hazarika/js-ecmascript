//For a word game, create a function that takes an array of words and returns an array with the length of each word

const wordlength=(words)=>{
    return words.map(word=>word.length)
}

const words=["rahul", "sumesh", "pes university" ,"rahul@2344"]
console.log(wordlength(words));


// 8. In a friend-matching app, implement a function that finds common interests between two users arrays of interests. 

const commoninterest = (user1, user2) => {
  return user1.filter(interest => user2.includes(interest));
};

const user1 = ['music', 'movie', 'dance'];
const user2 = ['singing', 'music', 'running'];

console.log(commoninterest(user1, user2));

//You're building a form validaƟon system. Create a funcƟon that removes a specified field from an object containing form data.
const removeField = (formData, field) => {
  const { [field]: removed, ...rest } = formData;
  return rest;
};

const formData = {
  name: "Rahul",
  email: "rahul@gmail.com",
  age: 24,
  city: "Guwahati"
};

console.log(removeField(formData, "email"));



// 0.For a text analysis tool, implement a funcƟon that counts the occurrences of each character in a given string
const charCount = (str) => {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
};

// Example usage
console.log(charCount("hello world"));
