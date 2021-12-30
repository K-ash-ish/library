
const bookName = document.querySelector("#book-name");
const authorName = document.querySelector("#author-name");
const totalPages = document.querySelector("#total-pages");
const readStatus = document.querySelector("#read-status");
const tableData = document.querySelector(".table-data");
const addBook = document.querySelector(".add-book");

let myLibrary = [

];


window.addEventListener("DOMContentLoaded", function(){
    displayBook();

});

addBook.addEventListener("click", function(){
    Book();
    displayBook();
});

function displayBook(){
    let displayBooks = myLibrary.map(function(item){
        console.log(item);
        return `
        <tr>
            <td class="table-data name">${item.name}</td>
            <td class="table-data author">${item.author}</td>
            <td class="table-data pages">${item.pages}</td>
            <td class="table-data read">${item.read}</td>
        </tr>   
        `;
    });
    displayBooks = displayBooks.join("");
    tableData.innerHTML = displayBooks;
    return displayBooks;
}

function Book(){
    let book = {};
    book.name= bookName.value;
    book.author = authorName.value;
    book.pages = totalPages.value;
    book.read = readStatus.value;
    myLibrary.push(book);
}



