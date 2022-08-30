let authorText = document.getElementById("author-name");
let bookNameText = document.getElementById("book-name");
let pagesText = document.getElementById("page-num");
let readText = document.getElementById("read-book");
const author = document.querySelector(".authorInput");
const title = document.querySelector(".bookNameInput");
const pages = document.querySelector(".pagesInput");
const read = document.querySelector(".readInput");
const btn1 = document.querySelector(".btn1");

function Book() {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = read.checked;
    this.bookInfo = function() {
        return [title, author, pages, read];
    }
}

let myLibrary = []
let newBook;

function addBookToLibrary() {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    makeVisual();
}
addBookToLibrary();

function makeVisual() {
    authorText.textContent = myLibrary
}




btn1.addEventListener('click', addBookToLibrary);