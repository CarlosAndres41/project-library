let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages.`;
    };
}

function addBookToLibrary(array) {
    for (let index = 0; index < array.length; index++) {
        const card = document.createElement("div");
        const toggleDiv = document.createElement("div");
        const delButton = document.createElement("button");
        const reading = document.createElement("span");
        const finished = document.createElement("span");

        card.textContent = array[index].info();
        card.classList.add("book-card");

        //Add style deppending on array[index].status
        if (array[index].status === "reading") {
            card.classList.add("book-read");
            reading.classList.add("read-click");
        } else if (array[index].status === "finished") {
            card.classList.add("book-finished");
            finished.classList.add("finished-click");
        }

        card.setAttribute("id", index); //Set attribute to link to delete button

        reading.textContent = "Reading";
        reading.classList.add("reading");
        finished.textContent = "Finished";
        finished.classList.add("finished");
        card.appendChild(document.createElement("br"));
        toggleDiv.appendChild(reading);
        toggleDiv.appendChild(finished);
        card.appendChild(toggleDiv);

        delButton.textContent = "x";
        delButton.classList.add("delete-book");
        delButton.addEventListener("click", () => {
            const book = document.getElementById(index);
            book.parentElement.removeChild(book); //remove from DOM
            if (index > -1) {
                // only splice array when item is found
                array.splice(index, 1); // 2nd parameter means remove one item only
            } // Deletes item from myLibrary
        });

        reading.addEventListener("click", () => {
            card.classList.toggle("book-read");
            reading.classList.toggle("read-click");
            card.classList.remove("book-finished");
            finished.classList.remove("finished-click");
            // Update array item status
            array[index].status = "reading";
        });
        finished.addEventListener("click", () => {
            card.classList.toggle("book-finished");
            finished.classList.toggle("finished-click");
            card.classList.remove("book-read");
            reading.classList.remove("read-click");
            array[index].status = "finished";
        });

        toggleDiv.appendChild(delButton);
        cardContainer.appendChild(card);

        //Update footer to show statistics
        const numberOfBooks = myLibrary.length;
        document.querySelector(
            "footer"
        ).innerHTML = `You currently have ${numberOfBooks} book(s) in your library`;
    }
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
    const newBook = new Book(
        formData.get("title"),
        formData.get("author"),
        formData.get("pages"),
        formData.get("status")
    );
    myLibrary.push(newBook);
    if (myLibrary.length !== 0) {
        cardContainer.innerHTML = "";
    }
    addBookToLibrary(myLibrary);
    document.querySelector(".form").reset();
    popUpForm.style.display = "none";
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
