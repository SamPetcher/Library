let myLibrary = []

function addBookToLibrary(bookObject) {
myLibrary.push(bookObject);
}

function Book(title, author, date, read) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.read = read
}
let Tolkein = new Book("The Fellowship of the Ring", "J.R.R. Tolkein", 1954, true);
let Tolkein1 = new Book("The Fellowship of the Rang", "J.RR.R. Tolkein", 1954, true);
addBookToLibrary(Tolkein)
addBookToLibrary(Tolkein1)

console.log(myLibrary)

function printLibrary(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        //Create the div that contains the information for the library card
        let libraryCard = document.createElement("div")
        libraryCard.className = "lib-card";
        //Create the title for the library card 
        let titleText = document.createElement("h3")
        titleText.innerHTML = myLibrary[i].title;

        let bookInformation = document.createElement("small")
        bookInformation.innerHTML = myLibrary[i].author + ", " + myLibrary[i].date
        
        let readBook = document.createElement("img")
        readBook.style.width = "10%"
        readBook.style.marginTop = "20px"
        readBook.style.alignSelf = "center"

        if (myLibrary[i].read === true) {
            readBook.setAttribute("src", "./images/done_FILL0_wght400_GRAD0_opsz48.png")

        }
        else {
            readBook.setAttribute("src", "./images/close_FILL0_wght400_GRAD0_opsz48.png")
        }

        document.getElementById("canvas").appendChild(libraryCard)
        libraryCard.appendChild(titleText)
        libraryCard.appendChild(bookInformation)
        libraryCard.appendChild(readBook)
    }
}
printLibrary(myLibrary)