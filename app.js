let authorText = document.getElementById("author-name");
let titleText = document.getElementById("book-name");
let pagesText = document.getElementById("page-num");
let readText = document.getElementById("read-book");
const authorIn = document.querySelector(".authorInput");
const titleIn = document.querySelector(".bookNameInput");
const pagesIn = document.querySelector(".pagesInput");
const readIn = document.querySelector(".readInput");
const btn1 = document.querySelector(".btn1");
const main = document.querySelector('.card')

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookInfo = function() {
        return[title, author, pages, read];
    }
}

function userInput() {
    let title = titleIn.value;
    let author = authorIn.value;
    let pages = pagesIn.value;
    let read = readIn.value;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        let authorT = myLibrary[i].author;
        let titleT = myLibrary[i].title;
        let pagesT = myLibrary[i].pages;
        
        let text = document.createElement('p');
        text.textContent = [authorT, titleT, pagesT];
        main.appendChild(text);
    }
}


// creates new book constructor
btn1.addEventListener('click', () => {
    userInput();
    displayBook();
})

