# Conditional Rendering

- [Conditional Rendering](#conditional-rendering)
  - [`v-if`](#v-if)

## `v-if`

- Conditionally render data
- Similar to if statement in other languages
- Also removes it from DOM i.e cannot find it hidden in `Inspect Element`

```html
<p v-if="goals.length === 0">
  No goals have been added yet - please start adding some!
</p>
```