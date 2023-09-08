const body = document.body;

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    if (myLibrary.length === 0) this.index = 0;
    else this.index = myLibrary[-1].index + 1;
    this.info = function() {
        let isRead = read ? 'read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}.`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function updateIndexes() {
    const cards = Array.from(document.querySelectorAll('.card'));
    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].index = 0;
    }
    for (let i = 0; i < myLibrary.length; i++) {
        if (cards[i]) cards[i].setAttribute('data-index', i);
    }
}

function removeBooks(index) {
    const cards = document.querySelectorAll('.card');
    let dataIndex = typeof index == 'number' ? index : true;
    for (let c of cards) {
        if (c && typeof dataIndex === 'boolean') c.remove();
        else if (c && c.getAttribute('data-index') == dataIndex) c.remove();
    }
    updateIndexes();
}

function changeRead() {

}

function displayLibrary() {
    for (let book of myLibrary) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute('data-index', book.index);
        let title = document.createElement("h3");
        title.classList.add("title");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let read = document.createElement("p");
        let actions = document.createElement("div");
        actions.classList.add('actions');
        let removeBtn = document.createElement("button");
        removeBtn.classList.add('remove');
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(book.index, 1);
            removeBooks(book.index)
        });
        let readBtn = document.createElement("button");
        readBtn.classList.add('changeRead');
        readBtn.addEventListener('click', () => {
            if (book.read) {
                book.read = false;
                read.textContent = "Status: Not read yet"
            }
            else {
                book.read = true;
                read.textContent = "Status: Read"
            }
        })
        title.textContent = book.title;
        author.textContent = `By ${book.author}`;
        pages.textContent = `Pages: ${book.pages}`;
        read.textContent = book.read ? "Status: Read" : "Status: Not read yet";
        removeBtn.textContent = 'Remove';
        readBtn.textContent = 'Read';
        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(read);
        actions.append(removeBtn);
        actions.append(readBtn);
        card.append(actions);
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
    removeBooks();
    displayLibrary();
    dialog.close();
})

displayLibrary();