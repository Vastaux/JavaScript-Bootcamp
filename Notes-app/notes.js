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

document.querySelector('button').addEventListener('click', function () {
   console.log(notes) 
})