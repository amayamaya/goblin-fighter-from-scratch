## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**

1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## Mice Fighter Planning

### State

-   array of Mice (name, health points)
-   number of defeated Mice (derived from array of Mice OR just store as variable)
-   player hp

Mice objects will look like this:

```js
  {name: 'Mickey', hp: 3}
```

### HTML Elements (on page load)

-   input for adding new Mice
-   button for adding new Mice
-   span for tracking defeated Mice
-   span for tracking player HP
-   `<div>` for our Mice list

### Functions

-   `displayMice` -- clear out the list, and render a Mice element for each Mice in your list of Mice
-   `renderMice(mice)` - create a Mice element for specific Mice object
-   `MiceClickHandler` - takes care of the game logic when Mice are clicked

## To Do List

1. Get everything done that you've done before -- i.e. stuff that looks like yesterday's labs

-   [x] Set up your HTML with your defeatedMice span, your playerHP span, your form for adding new Mice
-   [x] Add your state variables in app.js
-   [x] Add event listener for your new Mice form
-   [x] TDD your `renderOpponents` function (TDD optional but helpful) -- should return an HTML element with the Mice's name and hp
-   [x] Add `displayOpponents` function which calls `renderOpponents` for each Mice in your list of Mice

_ You know you're done here when you can add new Mice to the page_

2. Deal with you click handler - one if / else at time

### Mice Click Handler Logic

js
// if Opponents' hp is 0, return
// if(Opponents.hp === 0) return;

// if player hp is 0, return

// randomly decide if player hit the Mice
// if player hits the Mice
// reduce the Mice's hp
// call displayMice (this will re-render the Mice)
// alert the user that they hit the Mice
// if Mice hp is 0 -- increment the defeated Mice count
// else player missed
// alert the user∂
// randomly decide if Mice hit the player
// if Mice hits player
// reduce player hp
// update the player hp span with new hp value
// alert the user
// if player hp is 0, alert user game over!!

# Acceptance Criteria

-   On load, see the HP and names of at least two default Mice
-   On submitting the 'challenge Mice' form, add a new Mice object
    **_(with 3 HP and a name)_** to state and display it to the DOM
-   On clicking a Mice, it should tell the user whether they hit the Mice or not, then update state and DOM appropriately with new HP
-   On clicking a Mice, it should tell the user whether the Mice hit the player or not, then update state and DOM appropriately with new HP
-   The number of vanquished Mice should be visible when state changes.
    Render dead Mice differently, and disable clicking on them
-   When the user's HP is 0, launch a game over message

# Rubric

-   Users see HP and two default Mice (2) X
    Users can add a new Mice with default HP and name (2)X
-   Mice click handler (6)
    -   Uses Math.random() function to determine hits X
-   Alerts user whether the Mice hit them or not and updates HP x
-   Show number of vanquished Mice 1 x
-   Display Mice differently and disable clicking when defeated 1
-   Disable all functionality when the game is over 2

Functions

-   PURE: `renderOpponent(mice)` : return DOM node` 2 x
-   IMPURE: `displayMice()` : clears DOM and appends Mice data to Mice list DOM node` 2 x
