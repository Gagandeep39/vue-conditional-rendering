# Conditional Rendering

- [Conditional Rendering](#conditional-rendering)
  - [`v-if`](#v-if)
  - [`v-else`](#v-else)
  - [`v-show`](#v-show)
  - [`v-for`](#v-for)

## `v-if`

- Conditionally render data
- Similar to if statement in other languages
- Also removes it from DOM i.e cannot find it hidden in `Inspect Element`

```html
<p v-if="goals.length === 0">
  No goals have been added yet - please start adding some!
</p>
```

## `v-else`

- Similar to `else` in other languages
- **Must** come immediately after `v-if`

```html
<p v-if="goals.length === 0">
  No goals have been added yet - please start adding some!
</p>
<ul v-else>
  <li>Goal</li>
</ul>
```

## `v-show`

- Alternative to v-if
- Doesnt hide the data complete
- Applies `display:none` CSS and keep other CSS same
- Improves performance as adding/removing is costly compared to show/hide

## `v-for`

- Similar to for loop in ther languages
- Performed in an effcient way
- Only adds a new element or remove that elemnt when array changes instead of re-redering whole for loop

```html
<li v-for="goal in goals"> {{ goal }} </li>
```
