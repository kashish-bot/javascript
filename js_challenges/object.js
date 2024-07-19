//ACTIVITY 1 & 2 //
const bookObject = {
    title: "book1",
    auther: "Kashish",
    year: 2019,
}
//log the object to console//
//console.log(bookObject);
//access the title and auther properties of object//
//console.log(bookObject.title);
//console.log(bookObject.auther);

const book = {
    bookName: "kanchan",
    writer: "purnima",
    year: 2019,
}
book.year = 2025
function bookinfo () {
    return `${book.bookName} is written by ${book.writer}`
}
//console.log(bookinfo());
//console.log(book.year);


// ACTIVITY 4 //
const bookItems = {
    book1: "the jungle book",
    publisher: "harsh",
    year: 2013,
}
bookItems.bookCalling = function() {
    return `${this.book1} was published in ${this.year}`
}
//console.log(bookItems.bookCalling());

// ACTIVITY 3 //
const libraryObj = {
    name: "Rajput's",
    bookLibrary: [
        {title: "A girl in a train", author: "Kashish", year: 2022},
        {title: "Fairy-Tails", author: "Harsh", year: 2019},
        {title: "Three-Sisters", author: "RadhaRani", year: 2025},
    ]
}
//console.log(libraryObj);
//console.log(libraryObj.name);
libraryObj.bookLibrary.forEach((bk) => {
    //console.log(`Book Title: ${bk.title}`);
})

const pustak = {
    bk1: "maths",
    writer: "R.D.Sharma",
    year: 2014,
}

for(const bk1 in pustak) {
    console.log(`${bk1}: ${pustak[bk1]}`);
}
//console.log(`${Object.keys(pustak)}: ${Object.values(pustak)}`);
console.log(Object.entries(pustak));
/*const keys = Object.keys(pustak);
const values = Object.values(pustak);
console.log(keys , values);*/

