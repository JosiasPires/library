const myLibrary = [];

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