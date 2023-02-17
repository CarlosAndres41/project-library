let myLibrary = [];

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
}

const cardContainer = document.querySelector(".card-container");

if (myLibrary.length === 0) {
    const firstCard = document.createElement("div");
    firstCard.textContent =
        "Your library is empty. Click on the + icon to add your first book.";
    firstCard.classList.add("first-card");
    cardContainer.appendChild(firstCard);
}

const popUpForm = document.querySelector(".form-popup");

const addButton = document.querySelector(".add-book");
addButton.addEventListener("click", () => {
    popUpForm.style.display = "grid";
});

const cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener("click", () => {
    popUpForm.style.display = "none";
});
