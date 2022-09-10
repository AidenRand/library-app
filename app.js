const authorIn = document.querySelector(".authorInput");
const titleIn = document.querySelector(".bookNameInput");
const pagesIn = document.querySelector(".pagesInput");
const readIn = document.querySelector(".readInput");
const btn1 = document.querySelector(".btn1");
let bookContainer = document.querySelector(".bookContainer");
let readCont = document.querySelector(".readContainer");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function userInput() {
  let title = titleIn.value;
  let author = authorIn.value;
  let pages = pagesIn.value;
  let read = readIn.value;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function readChecked() {
  let readContainer = document.createElement('div');
  if (readIn.checked) {
    let read1 = document.createElement('p');
    read1.innerHTML = 'Read';
    readContainer.appendChild(read1);
    readCont.appendChild(readContainer);
  } else {
    let read2 = document.createElement('p');
    read2.innerHTML = 'Not Read';
    readContainer.appendChild(read2);
    readCont.appendChild(readContainer);
  }
}

function displayBook() {
  console.log(myLibrary.length);
  bookContainer.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let authorT = myLibrary[i].author;
    let titleT = myLibrary[i].title;
    let pagesT = myLibrary[i].pages;

    let bookDiv = document.createElement("div");
    bookDiv.classList += "bookDiv";
    let authorPara = document.createElement("p");
    authorPara.classList += "author";
    authorPara.innerHTML = authorT;
    let titlePara = document.createElement("p");
    titlePara.classList += "title";
    titlePara.innerHTML = titleT;
    let pagesPara = document.createElement("p");
    pagesPara.classList += "pages";
    pagesPara.innerHTML = pagesT;

    bookDiv.appendChild(authorPara);
    bookDiv.appendChild(titlePara);
    bookDiv.appendChild(pagesPara);
    bookContainer.appendChild(bookDiv);
  }
}
// creates new book constructor
btn1.addEventListener("click", () => {
  userInput();
  displayBook();
  // readChecked();
});
