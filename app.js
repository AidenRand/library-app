const authorIn = document.querySelector(".authorInput");
const titleIn = document.querySelector(".bookNameInput");
const pagesIn = document.querySelector(".pagesInput");
const readBtn = document.querySelector(".readBtn");
const btn1 = document.querySelector(".btn1");
let bookContainer = document.querySelector(".bookContainer");
let inputContainer = document.querySelector(".input");
let newBookBtn = document.querySelector(".newBookBtn");
let bookCounter = document.querySelector(".bookCounter");
let deleteBtn = document.getElementById("closeBtn");

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
  let read = readBtn.checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  bookContainer.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let authorT = myLibrary[i].author;
    let titleT = myLibrary[i].title;
    let pagesT = myLibrary[i].pages;
    let readT = myLibrary[i].read;

    let bookDiv = document.createElement("div");
    let authorPara = document.createElement("p");
    let titlePara = document.createElement("p");
    let pagesPara = document.createElement("p");
    let closeBtn = document.createElement("button");
    let readButton = document.createElement("button");
    readButton.classList += "readButton";
    bookDiv.classList += "bookDiv";
    authorPara.classList += "author";
    titlePara.classList += "title";
    pagesPara.classList += "pages";
    closeBtn.classList += "closeBtn";
    authorPara.innerHTML = authorT;
    titlePara.innerHTML = titleT;
    pagesPara.innerHTML = `Pages: ${pagesT}`;
    closeBtn.innerHTML = "Delete";
    readButton.innerHTML = readT;

    bookDiv.appendChild(closeBtn);
    bookDiv.appendChild(readButton);
    bookDiv.appendChild(pagesPara);
    bookDiv.appendChild(authorPara);
    bookDiv.appendChild(titlePara);
    bookContainer.appendChild(bookDiv);

    readButton.addEventListener("click", () => {
      if (readButton.textContent === 'Read') {
        readButton.style.backgroundColor = "#F44A26";
        readButton.innerHTML = "Not Read";
      } else {
        readButton.innerHTML = "Read";
        readButton.style.backgroundColor = "#54B82B";
      }
    })

    if (readT) {
      readButton.innerHTML = "Read";
      readButton.style.backgroundColor = "#54B82B";
    } else {
      readButton.style.backgroundColor = "#F44A26";
      readButton.innerHTML = "Not Read";
    }

    closeBtn.addEventListener("click", () => {});
  }
}

function resetForm() {
  authorIn.value = "";
  titleIn.value = "";
  pagesIn.value = "";
}


function updateBookCounter() {
  bookCounter.textContent = `Books: ${myLibrary.length}`;
}

btn1.addEventListener("click", () => {
  userInput();
  displayBooks();
  resetForm();
  updateBookCounter();
  inputContainer.style.opacity = 0;
  inputContainer.style.pointerEvents = "none";
});

newBookBtn.addEventListener("click", () => {
  inputContainer.style.opacity = 1;
  inputContainer.style.pointerEvents = "all";
});
