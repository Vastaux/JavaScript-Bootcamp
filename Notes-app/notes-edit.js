const noteId = location.hash.substring(1);
const notes = getSavedNotes();

const note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('index.html')
}

document.querySelector('#note-title').addEventListener('keyup', function (e) {
    note.title = e.target.value
    saveNotes(notes)
    getSavedNotes()
})

document.querySelector('#note-body').addEventListener('keyup', function (e) {
    note.body = e.target.value
    saveNotes(notes)
    getSavedNotes()
})

document.querySelector('#remove-note').addEventListener('click', function () {
    removeNote(note.id)
    saveNotes(notes)
    location.assign(`index.html`)
})

getNote(note);