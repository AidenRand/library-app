const authorIn = document.querySelector(".authorInput");
const titleIn = document.querySelector(".bookNameInput");
const pagesIn = document.querySelector(".pagesInput");
const readIn = document.querySelector(".readInput");
const btn1 = document.querySelector(".btn1");
let bookContainer = document.querySelector(".bookContainer");
let inputContainer = document.querySelector(".input");
let newBookBtn = document.querySelector(".newBookBtn");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function userInput() {
  let title = titleIn.value;
  let author = authorIn.value;
  let pages = pagesIn.value;

  let newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

function displayBooks() {
  bookContainer.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let authorT = myLibrary[i].author;
    let titleT = myLibrary[i].title;
    let pagesT = myLibrary[i].pages;

    let bookDiv = document.createElement("div");
    let authorPara = document.createElement("p");
    let titlePara = document.createElement("p");
    let pagesPara = document.createElement("p");
    bookDiv.classList += "bookDiv";
    authorPara.classList += "author";
    titlePara.classList += "title";
    pagesPara.classList += "pages";
    authorPara.innerHTML = `author: ${authorT}`;
    titlePara.innerHTML = `title: ${titleT}`;
    pagesPara.innerHTML = `pages: ${pagesT}`;

    bookDiv.appendChild(authorPara);
    bookDiv.appendChild(titlePara);
    bookDiv.appendChild(pagesPara);
    bookContainer.appendChild(bookDiv);
  }
}

function resetForm() {
  authorIn.value = "";
  titleIn.value = "";
  pagesIn.value = "";
}

btn1.addEventListener("click", () => {
  userInput();
  displayBooks();
  resetForm();
  inputContainer.style.opacity = 0;
  inputContainer.style.pointerEvents = "none";
});

newBookBtn.addEventListener('click', () => {
  inputContainer.style.opacity = 1;
  inputContainer.style.pointerEvents = "all";
})
