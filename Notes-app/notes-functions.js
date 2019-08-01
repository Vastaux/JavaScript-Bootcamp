

// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
};

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
};

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button');

    // Setup the remove note button
    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click', function (e) {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.setAttribute('href', `edit.html#${note.id}`);
    noteEl.appendChild(textEl);

    return noteEl
};

// Render application notes
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy)

    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    });
    document.querySelector('.notes').textContent = '';

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note);
        document.querySelector('.notes').appendChild(noteEl)
    })
};

//Remove note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

const getNote = function (note) {

    document.querySelector('#note-title').value = note.title;
    document.querySelector('#note-body').value = note.body;
    document.querySelector('#last-edit').textContent = `Last modified: ${moment(note.modifiedAt).fromNow()}`;
}

const getTimestamp = function () {
    const timeStamp = moment().valueOf();
    return timeStamp
}

const sortNotes = function (notes, sortBy) {
    switch (sortBy) {
        case 'byEdited':
                notes.sort(function (a, b) {
                if (a.modifiedAt > b.modifiedAt) {
                    return -1
                } else if (a.modifiedAt < b.modifiedAt) {
                    return 1
                } else {
                    return 0
                }
            });
            return notes;
            break;

        case 'byCreated':
            notes.sort(function (a, b) {
                if (a.createdAt > b.createdAt) {
                    return -1
                } else if (a.createdAt < b.createdAt) {
                    return 1
                } else {
                    return 0
                }
            });
            return notes
            break;

        case 'alphabetical':
            notes.sort(function (a, b) {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1
                } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return 1
                } else {
                    return 0
                }
            })
            return notes;
            break;
    
        default:
            console.log('Not supported')
            return notes
            break;
    }
}