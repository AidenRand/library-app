const authorIn = document.querySelector(".authorInput");
const titleIn = document.querySelector(".bookNameInput");
const pagesIn = document.querySelector(".pagesInput");
let readBtn = document.querySelector(".readBtn");
const btn1 = document.querySelector(".btn1");
let bookContainer = document.querySelector(".bookContainer");
let inputContainer = document.querySelector(".input");
let newBookBtn = document.querySelector(".newBookBtn");
let bookCounter = document.querySelector(".bookCounter");

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
  storeLocal();

  for (let i = 0; i < myLibrary.length; i++) {
    let authorT = myLibrary[i].author;
    let titleT = myLibrary[i].title;
    let pagesT = myLibrary[i].pages;
    let readT = myLibrary[i].read;

    let bookDiv = document.createElement("div");
    let authorPara = document.createElement("p");
    let titlePara = document.createElement("p");
    let pagesPara = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let readButton = document.createElement("button");

    readButton.classList += "readButton";
    bookDiv.classList += "bookDiv";
    authorPara.classList += "author";
    titlePara.classList += "title";
    pagesPara.classList += "pages";
    deleteBtn.classList += "deleteBtn";

    authorPara.innerHTML = authorT;
    titlePara.innerHTML = titleT;
    pagesPara.innerHTML = `Pages: ${pagesT}`;
    deleteBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    readButton.innerHTML = readT;

    bookDiv.appendChild(deleteBtn);
    bookDiv.appendChild(readButton);
    bookDiv.appendChild(pagesPara);
    bookDiv.appendChild(authorPara);
    bookDiv.appendChild(titlePara);
    bookContainer.appendChild(bookDiv);

    readButton.addEventListener("click", () => {
      if (readButton.textContent === "Read") {
        myLibrary[i].read = false;
        readButton.style.backgroundColor = "#F44A26";
        readButton.textContent = "Not Read";
        storeLocal();
      } else {
        readButton.textContent = "Read";
        readButton.style.backgroundColor = "#54B82B";
        myLibrary[i].read = true;
        storeLocal();
      }
    });

    if (myLibrary[i].read) {
      readButton.textContent = "Read";
      readButton.style.backgroundColor = "#54B82B";
      storeLocal();
    } else {
      readButton.style.backgroundColor = "#F44A26";
      readButton.textContent = "Not Read";
      storeLocal();
    }

    deleteBtn.addEventListener("click", () => {
      bookContainer.removeChild(bookDiv);
      myLibrary.splice(bookDiv, 1);
      storeLocal();
      updateBookCounter();
    });
  }
}

function resetForm() {
  authorIn.value = "";
  titleIn.value = "";
  pagesIn.value = "";
}

// Update book counter
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
  readBtn.checked = false;
  storeLocal();
});

newBookBtn.addEventListener("click", () => {
  inputContainer.style.opacity = 1;
  inputContainer.style.pointerEvents = "all";
});

function storeLocal() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function getLocalStorage() {
  if (!localStorage.myLibrary) {
    displayBooks();
    updateBookCounter();
  } else {
    let items = localStorage.getItem("myLibrary");
    items = JSON.parse(items);
    myLibrary = items;
    displayBooks();
    updateBookCounter();
  }
}
getLocalStorage();
