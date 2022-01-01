const bookName = document.querySelector("#book-name");
const authorName = document.querySelector("#author-name");
const totalPages = document.querySelector("#total-pages");
const readStatus = document.querySelector("#read-status");
const tableData = document.querySelector(".table-data");
const addBook = document.querySelector(".add-book");

let myLibrary = [

];

//load book if any are present in the array;
window.addEventListener("DOMContentLoaded", displayBook);

//button to add the books
document.querySelector("#book-form").addEventListener("submit", function(e){
    e.preventDefault();
    Book();
    displayBook();
    clearInput();
});

/// displaying book to the page
function displayBook(){
    // myLibrary = JSON.parse(localStorage.getItem("myLibrary") || "[]")
    let displayBooks = myLibrary.map(function(item){
        return `
        <tr>
            <td class="table-data name">${item.name}</td>
            <td class="table-data author">${item.author}</td>
            <td class="table-data pages">${item.pages}</td>
            <td class="table-data read">${item.read}</td>
            <td><i class="far fa-trash-alt delete"></i></td>
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
    // localStorage.setItem("myLibrary" , JSON.stringify(myLibrary));s
}


// clearing form input text

function clearInput(){
    document.querySelector("#book-form").reset();
}

// Delete book button
function deleteBook(el){
    if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
    }

}


tableData.addEventListener("click", (e)=>{
    deleteBook(e.target);
});

