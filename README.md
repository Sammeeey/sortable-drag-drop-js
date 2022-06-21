# Sticky Notes App
Minimal sortable drag and drop app, written in vanilla JavaScript based on [How To Build Sortable Drag & Drop With Vanilla Javascript](https://www.youtube.com/watch?v=jfYWwQrtzzY) by [Web Dev Simplified](https://twitter.com/DevSimplified)

[![app showcase screenshot](https://github.com/Sammeeey/sortable-drag-drop-js/blob/1a2befc833df2881f3254b87c1f542dc64e34f7f/screenshot-final-drag-drop.PNG)](https://sammeeey.github.io/sortable-drag-drop-js/)

https://user-images.githubusercontent.com/49591562/174741828-d80ae60b-a83b-41b2-983f-f397db59975a.mp4

## lessons learned
### `defer` tag for JS scripts in HTML
- downloads JavaScript while parsing the website (HTML/CSS)
- executes the JS code after parsing the website
- should only be used along with a `src` attribute
- is either true or false (present or not)

**Syntax**:
```html
<script src="script.js" defer></script>
```

### `dragover` takes care of drop by default
The `dragover` event listener seems to have a drop functionality by default.
Because moving an element to a different place of the document is already possible without using a drop event - but only `dragstart`, `dragend` and `dragover`.

https://user-images.githubusercontent.com/49591562/174741955-57fff8c3-e7e8-4d40-9607-678f30923d52.mp4

### Validate functionality of event listeners upfront
Use `console.log` to quickly validate the workability of event listeners in the console of the browsers developer tools.
Do that before adding the actual functionality.

### Dropping inside element is not allowed
By default, dropping of elements inside other elements is not allowed.
Therefore one can use the `Event.preventDefault()` method to handle the event explicitly.
This prevents the cursor to show a 🚫 (*dropping not allowed*) symbol while hovering over elements with a dragged element.
Using the `Event.preventDefault()` method in that case eventually makes the cursor showing a *dropping allowed* symbol.

**Example**
```js
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})
```

### Spread Syntax
With [*spread syntax*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) you can basically create arrays and access their values one by one.
This is often used to create an array of elements and pass them to a function simultaneously.

**Syntax**:
```js
const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
```

JavaScripts spread syntax seems similar to Pythons `*args` and `**kwargs**` *magic variables* which are often used to unpack lists (`*args`) or dictionaries (`**kwargs`) to be used as parameters in functions:
```py
def my_sum(a, b, c):
    print(a + b + c)

my_list = [1, 2, 3]
my_sum(*my_list)
```

## JS functions/methods
### `reduce()` method
The [`reduce()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) takes two arguments as input: a callback function and an optional initial value.
The callback function gets called on every element in the provided array, one by one.

The result of each iteration gets passed to the next iteration.
The final result of the `reduce()` method is one single value.

If an initial value gets passed, this initial value gets passed to the first iteration.
Otherwise the element at array index 0 gets used as initial value and the iteration starts from the element with index 1.

### `htmlElement.inserBefore()` method
The [`htmlElement.inserBefore()` method](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) takes two arguments: an HTML element which will be moved and inserted before the second specified element.

## Potential Improvements
If you have ideas to improve this app, please feel free to report them in the issues of the repository.🤗

## Challenges
- determine exact position of cursor relative to container(s) to [specify dropping position](https://youtu.be/jfYWwQrtzzY?t=705)

## Further resources
- [MDN: Document: drag event](https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event)
