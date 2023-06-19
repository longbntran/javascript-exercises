const getTheTitles = function() {
    console.log(Array.from(arguments)[0]);
    let books = [...arguments][0];
    // console.log(books);
    let title = books.map(function(book) {
        return book.title;});
    // console.log(title);
    return title;
};

// Do not edit below this line
module.exports = getTheTitles;
