// variables
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

// event listeners
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        // console.log('start drag')
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', () => {
        // console.log('drag end')
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        // console.log('drag over')
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        console.log(afterElement)
        
        const draggable = document.querySelector('.dragging')
        if (afterElement == null ) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement)
        }

    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, containerChild) => {
        const box = containerChild.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        // console.log(box)
        // console.log(box.top)
        // console.log(offset)

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: containerChild }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}