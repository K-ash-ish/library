class Books{
    constructor(bookName, authorName, pages, readStatus){
        this.bookName = bookName;
        this.authorName = authorName;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

class BookList {
    myLibrary = [
        new Books("SpiderMan", "Stan Lee", 123, "Read" ),
        new Books("IronMan", "Stan Lee", 223, "Not Read" )
    ];
    
    render(){
        const renderHook = document.querySelector(".table-data");
        for (const book of this.myLibrary){
            const bookData = document.createElement("tr");
            // console.log(book.bookName)
            bookData.innerHTML = `
            <td class="table-data name">${book.bookName}</td>
            <td class="table-data author">${book.authorName}</td>
            <td class="table-data pages">${book.pages}</td>
            <td class="table-data read">${book.readStatus}</td>
            <td><i class="far fa-trash-alt delete"></i></td>
            `        
            renderHook.append(bookData)
        }
    }
}
class AddBooks  extends BookList{
    userInput(){
        // const addbtn = document.querySelector(".add-book");
        document.querySelector("#book-form").addEventListener("submit", function(e){
            e.preventDefault();
            const bookName = document.getElementById("book-name").value;
            const authorName = document.getElementById("author-name").value;
            const pages = document.getElementById("total-pages").value;
            const readStatus = document.getElementById("read-status").value;
            const newBook = new Books(bookName, authorName, pages, readStatus)
            console.log(newBook)
        } );
    }

}

const bookList = new BookList();
bookList.render();
const addBooks = new AddBooks();
addBooks.userInput();


