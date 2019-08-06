'strict mode'

const noteId = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find((note) => note.id === noteId)

if (note === undefined) {
    location.assign('index.html')
}

document.querySelector('#note-title').addEventListener('keyup', function (e) {
    note.title = e.target.value
    note.modifiedAt = getTimestamp();
    console.log(note.modifiedAt)
    saveNotes(notes)
    getNote(note)

})

document.querySelector('#note-body').addEventListener('keyup', function (e) {
    note.body = e.target.value
    note.modifiedAt = getTimestamp();
    saveNotes(notes)
    getNote(note)

})

document.querySelector('#remove-note').addEventListener('click', function () {
    removeNote(note.id)
    saveNotes(notes)
    location.assign(`index.html`)
})

window.addEventListener('storage', (e) => {

    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find((note) => note.id === noteId)

        getNote(note)

        if (note === undefined) {
            location.assign('index.html')
        }
    }

})

getNote(note);

tr