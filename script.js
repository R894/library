class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = null;
    }

    info(){
        if(!this.read){
            return "Not read yet";
        } else {
            return "Read";
        }
    }

    toggleRead(){
        this.read = !this.read;
    }

    setId(id){
        this.id = id
    }

    getId(){
        return this.id;
    }
}

class Library {
    constructor(){
        this.myLibrary = [];
    }

    addBook(book){
        this.myLibrary.push(book);
        book.setId(this.myLibrary.indexOf(book));
        this.displayBook(book);
    }

    removeBook(book){
        document.querySelector(`[data="${book.getId()}"]`).remove();
        var id = book.getId();
        if(id !== -1){
            this.myLibrary.splice(id, 1);
        }
    }

    displayBook(book){
        var card = document.createElement('div');
        var title = document.createElement('div');
        var author = document.createElement('div');
        var pages = document.createElement('div');
        var bookRead = document.createElement('div');
        var bookReadButton = document.createElement('button');
        var removeButton = document.createElement('button');
    
        card.classList.add('book');
        card.setAttribute('data', book.getId());
        removeButton.textContent = 'Remove';
        title.textContent = `Title: ${book.title}`;
        author.textContent = `Author: ${book.author}`;
        pages.textContent = `Pages: ${book.pages}`;
    
        bookRead.textContent = book.info();
        bookReadButton.textContent = 'Toggle Read';
    
        removeButton.addEventListener("click", () => {
            this.removeBook(book);
        });
    
        bookReadButton.addEventListener("click", function(){
            book.toggleRead();
            bookRead.textContent = book.info();
        })
    
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(bookRead);
        card.appendChild(bookReadButton);
        card.appendChild(removeButton);
    
        cardContainer.appendChild(card);
    }
}

var lib = new Library();

var addBookButton = document.getElementById("add-book");
var formContainer = document.getElementById("form-container");
var cardContainer = document.querySelector(".books");
var form = document.getElementById("book-form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const title = document.getElementById("author").value;
    const author = document.getElementById("name").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector("#read").checked;
    form.reset();

    lib.addBook(new Book(title, author, pages, read));
});

addBookButton.addEventListener("click", function(){
    formContainer.style.display = (formContainer.style.display === 'none') ? 'flex' : 'none';
});


