let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if(read){
            return `${title}, ${author}, ${pages} pages, not read yet`;
        } else {
            return `${title}, ${author}, ${pages} pages, read`;
        }
    }
    this.toggleRead = function(){
        this.read = !this.read;
    }
}

var addBookButton = document.getElementById("add-book");
var formContainer = document.getElementById("form-container");
var cardContainer = document.querySelector(".books");
var form = document.getElementById("book-form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const title = document.getElementById("author").value;
    const author = document.getElementById("name").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector("#read");
    form.reset();

    addBookToLibrary(new Book(title, author, pages, read.checked));

});

addBookButton.addEventListener("click", function(){
    formContainer.style.display = (formContainer.style.display === 'none') ? 'flex' : 'none';
});

function displayBook(book){
    var card = document.createElement('div');
    var title = document.createElement('div');
    var author = document.createElement('div');
    var pages = document.createElement('div');
    var bookRead = document.createElement('div');
    var removeButton = document.createElement('button');


    card.classList.add('book');
    card.setAttribute('data', myLibrary.indexOf(book));
    removeButton.textContent = 'Remove'
    title.textContent = `Title: ${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;

    if(book.read == true){
        bookRead.textContent = 'Read';
    }else{
        bookRead.textContent = 'Not Read';
    }
    removeButton.addEventListener("click", function(){
        removeBook(myLibrary.indexOf(book));
    });
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(bookRead);
    card.appendChild(removeButton);

    cardContainer.appendChild(card);
}

function addBookToLibrary(book){
    myLibrary.push(book);
    displayBook(book);
}

function removeBook(id){
    document.querySelector(`[data="${id}"]`).remove();
}
