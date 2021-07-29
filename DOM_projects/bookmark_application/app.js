const bookmarkBtn = document.querySelector('#bookmark_btn');
const bookmarkList = document.querySelector(".bookmarks");

document.addEventListener('DOMContentLoaded',  getBookmarks());

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

//delete bookmark from local storage
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