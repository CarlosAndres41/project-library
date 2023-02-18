let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages.`;
    };
}

function addBookToLibrary() {
    // do stuff here
}

// Show and hide pop-up form

const popUpForm = document.querySelector(".form-popup");

const addButton = document.querySelector(".add-book");
addButton.addEventListener("click", () => {
    popUpForm.style.display = "grid";
});

const cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener("click", () => {
    popUpForm.style.display = "none";
});

// Get data from form and add a new book object to myLibrary

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("title"));
    const newBook = new Book(
        formData.get("title"),
        formData.get("author"),
        formData.get("pages")
    );
    myLibrary.push(newBook);
});

// Add book cards

const cardContainer = document.querySelector(".card-container");

if (myLibrary.length === 0) {
    const firstCard = document.createElement("div");
    firstCard.textContent =
        "Your library is empty. Click on the + icon to add your first book.";
    firstCard.classList.add("first-card");
    cardContainer.appendChild(firstCard);
}
