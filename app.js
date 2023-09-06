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

function displayLibrary() {
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

displayLibrary();