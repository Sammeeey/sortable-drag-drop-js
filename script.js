// variables
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

// event listeners
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        console.log('start drag')
        draggable.classList.add('dragging')
    })
})
