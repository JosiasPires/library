const body = document.body;

const myLibrary = [
    {
        title: 'The Hobbit',
        author: 'A.J. William',
        pages: 318,
        read: true
    },
    {
        title: 'The Hobbit',
        author: 'A.J. William',
        pages: 318,
        read: true
    },
    {
        title: 'The Hobbit',
        author: 'A.J. William',
        pages: 318,
        read: true
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let isRead = read ? 'read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}.`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeBooks() {
    let cards = document.querySelectorAll('.card');
    for (let c of cards) {
        c.remove();
    }
}

function displayLibrary() {
    removeBooks();
    for (let book of myLibrary) {
        let card = document.createElement("div");
        let title = document.createElement("h3");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let read = document.createElement("p");
        title.textContent = book.title;
        author.textContent = `By ${book.author}`;
        pages.textContent = `Pages: ${book.pages}`;
        read.textContent = book.read ? "Status: Read" : "Status: Not read yet";
        card.classList.add("card");
        title.classList.add("title");
        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(read);
        body.appendChild(card);
    }
}

const addBtn = document.querySelector('.add');
const dialog = document.querySelector('dialog');
const formTitle = document.querySelector('#title');
const formAuthor = document.querySelector('#author');
const formPages = document.querySelector('#pages');
const confirmBtn = document.querySelector('#confirmBtn');

addBtn.addEventListener('click', () => {
    dialog.showModal();
});

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let read = document.querySelector('input[name="read"]:checked').value == 'true' ? true : false;
    let book = new Book(
        formTitle.value,
        formAuthor.value,
        formPages.value,
        read
        );
    addBookToLibrary(book);
    displayLibrary();
    dialog.close();
})

displayLibrary();