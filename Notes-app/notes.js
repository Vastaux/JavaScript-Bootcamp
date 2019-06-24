// const p = document.querySelector('p')
// p.remove()

const notes = [{
    title: 'My next trip',
    body: 'Amsterdaaaaam'
}, {
    title: 'Hobbies',
    body: 'Football'
}, {
    title: 'Office mods',
    body: 'Get new chair'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredNotes.forEach(function(note) {
        document.querySelector('.noteList').textContent = ''
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('.noteList').appendChild(noteEl)
    })
}

document.querySelector('#create-note').addEventListener('click', function (e) {
   e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove();
    })
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

