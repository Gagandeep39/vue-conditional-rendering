# Conditional Rendering

- [Conditional Rendering](#conditional-rendering)
  - [`v-if`](#v-if)
  - [`v-else`](#v-else)

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