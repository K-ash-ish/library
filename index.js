class Books{
    constructor(bookName, authorName, pages, readStatus){
        this.bookName = bookName;
        this.authorName = authorName;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

class BookLocalStore {
    static getBooks(){
        let books;
        books = JSON.parse(localStorage.getItem("books") || "[]");
        return books;
    }
    static addBook(book){
        const books = BookLocalStore.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books))
    }
    static removeBook(del){
        const books = BookLocalStore.getBooks();
        books.forEach((book,index) =>{
            if(book.bookName == del){
                books.splice(index, 1);
            }
        });
        localStorage.setItem("books", JSON.stringify(books))
    }
}

class Library {
    static render(){
        const myLibrary = BookLocalStore.getBooks();
        const books = myLibrary;
        books.forEach((book) => Library.addBooks(book))
        
    }
    static addBooks(book){
        const renderHook = document.querySelector(".table-data");
        const bookData = document.createElement("tr");
        bookData.innerHTML = `
        <td class="table-data name">${book.bookName}</td>
        <td class="table-data author">${book.authorName}</td>
        <td class="table-data pages">${book.pages}</td>
        <td class="table-data read">${book.readStatus}</td>
        <td><i class="far fa-trash-alt delete"></i></td>
        `        
        renderHook.append(bookData)
    }
    
    static clearField(){
        document.querySelector("#book-form").reset();
    }
    static removeBook(el){
        
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }

    }

}


document.addEventListener("DOMContentLoaded", Library.render)
document.querySelector("#book-form").addEventListener("submit", function(e){
    e.preventDefault();
    const bookName = document.getElementById("book-name").value;
    const authorName = document.getElementById("author-name").value;
    const pages = document.getElementById("total-pages").value;
    let readStatus = document.getElementById("read-status");
    if(readStatus.checked){
        readStatus = 'Read';
    }
    else{
        readStatus = 'Not Read';
    }
    const newBook = new Books(bookName, authorName, pages, readStatus)
    Library.addBooks(newBook);
    BookLocalStore.addBook(newBook)
    Library.clearField();
} );

document.querySelector(".table-data").addEventListener("click", (e)=>{
    let del = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    Library.removeBook(e.target)
    BookLocalStore.removeBook(del);
});

