const getTheTitles = function(books) {
    const titles = books.map((book) => {return book.title});
    console.log(books);
    console.log(titles);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
