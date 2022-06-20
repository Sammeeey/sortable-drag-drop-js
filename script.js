// variables
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

// event listeners
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        console.log('start drag')
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', () => {
        console.log('drag end')
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        console.log('drag over')
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})