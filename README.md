# Assignment 4 - Task Dashboard

A dynamic task dashboard built using vanilla JavaScript, ES6 classes, and asynchronous DOM manipulation.

## File Organization
- `index.html`: Contains the basic HTML structure, buttons, and task container.
- `styles.css`: Simple styles for the layout and completed task appearance (line-through).
- `api.js`: Simulates a server call with a 1.5-second timeout to fetch raw task data.
- `taskManager.js`: Holds the `Task` and `TaskManager` classes with immutable state updates and a read-only ID.
- `main.js`: Main logic that handles button clicks, JSON parsing, rendering the tasks, and event listeners.

## Challenges Faced
- **Keeping State Immutable**: It was tricky at first to make sure array methods like `.filter()` and `.map()` were used instead of `.push()` or mutating the tasks directly, especially when toggling task status.
- **Dynamic DOM Rendering**: Re-creating the elements each time a task was added, completed, or removed and making sure the event listeners stayed attached to the right task ID took some trial and error.
- **Module Import/Export**: Ensuring all ES6 module paths and `type="module"` in HTML worked properly without path errors in the browser.
