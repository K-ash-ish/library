
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

//button to add the books
addBook.addEventListener("click", function(){
    Book();
    displayBook();
});

/// displaying book to the page
function displayBook(){
    let displayBooks = myLibrary.map(function(item){
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


//adding book to array myLibrary
function Book(){
    let book = {};
    book.name= bookName.value;
    book.author = authorName.value;
    book.pages = totalPages.value;
    if(readStatus.checked){
        book.read = readStatus.value;
    }
    else{
        book.read = "Not Read";
    }
    myLibrary.push(book);
}


