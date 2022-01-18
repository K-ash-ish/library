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
class UserInput{

}

const bookList = new BookList();
bookList.render();


