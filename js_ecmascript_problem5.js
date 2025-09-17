// 4. For a library management system, write a function that extracts just the titles from an array of book objects. 

const getTitle=(books)=>{
    return books.map(books=>books.title)
}
const books=[
    {title: 'Pride and Prejudice'},
    {title:'To Kill a Mockingbird'},
    {title: 'The Great Gatsby'},
    {title: 'Wuthering Heights'}
]
console.log(getTitle(books));
