/**
 * @file ./app.js is the main file of this application. In here, one can find the main logic of the application. 
 * @version 1.0.1
 * @author Yael Demers
 */

 /**
   * Query selector letting the application interact with the "bookmarks" button
   * @type {button}
   */
const bookmarkBtn = document.querySelector('#bookmark_btn');

 /**
   * Query selector letting the application interact with the list of bookmarks of the user
   * @type {string}
   */
const bookmarkList = document.querySelector(".bookmarks");

document.addEventListener('DOMContentLoaded',  getBookmarks());

/**
 * Function used to retrieve the bookmark list from the local storage of the user's computer and then display it
 */
function getBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    if(!bookmarks) {
        bookmarks = [];
    }

    bookmarks.forEach(bookmark => {
        const markup = `<div class="bookmark-card">
        <p>${bookmark.text} <span id=bookmark_id>${bookmark.id}</span></p>
        <p id="date">Added on: ${bookmark.date}</p>
        <a href="${bookmark.url}" class="btn btn-primary" target="_blank">View Bookmark</a>
        <a href="#" id="delete_bookmark" class="btn btn-danger">Delete Bookmark</a>
    </div>`

bookmarkList.insertAdjacentHTML('afterbegin', markup); //pushing on the stack
    })

}

bookmarkBtn.addEventListener('click', addBookmark);

/**
 * Function used to push a new bookmark to the list of locally stored bookmarks and then display it
 */
function addBookmark() { //to local storage
    const text = document.querySelector('#textField').value;
    const url = document.querySelector('#urlField').value;
    const date = new Date(Date.now()).toString().substring(0, 24);

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    let id;
    if(!bookmarks || bookmarks.length === 0) {
        bookmarks = [];
        id = 0;
    } else {
        //bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        id = parseInt(bookmarks[bookmarks.length -1].id)+1;
    }

    let bookmark = {
        "id": id,
        "text": text,
        "url": url,
        "date": date
    };

    bookmarks.push(bookmark);

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    const markup = `<div class="bookmark-card">
                    <p>${text} <span id=bookmark_id>${id}</span></p>
                    <p id="date">Added on: ${date}</p>
                    <a href="${url}" class="btn btn-primary" target="_blank">View Bookmark</a>
                    <a href="#" id="delete_bookmark" class="btn btn-danger">Delete Bookmark</a>
                </div>`

    bookmarkList.insertAdjacentHTML('afterbegin', markup); //pushing on the stack
}

document.querySelector('form').addEventListener('submit', e=> {
    e.preventDefault();
});

//delete bookmark from list UI
bookmarkList.addEventListener('click', e=> {
    if(e.target.matches('#delete_bookmark')) {
        let id = document.querySelector('#bookmark_id').textContent;
        e.target.parentElement.remove();
        removeFromLocalStorage(id);
    }
})
/**
 * Function used to remove a bookmark from the local storage of the user's computer and then update the GUI
 * @param {*} id - the id of the bookmark the function aims to remove
 */
function removeFromLocalStorage(id) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    if(!bookmarks) {
        bookmarks = [];
    }

    bookmarks.forEach((bookmark, index) => {
        if(bookmark.id===parseInt(id)) {
            bookmarks.splice(index, 1);
        }
    });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
