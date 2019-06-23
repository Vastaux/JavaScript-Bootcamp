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

document.querySelector('#create-note').addEventListener('click', function (e) {
   e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove();
    })
})

document.querySelector('#search-text').addEventListener('change', function(e) {
    console.log(e)
})