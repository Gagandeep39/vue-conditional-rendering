# Conditional Rendering

- [Conditional Rendering](#conditional-rendering)
  - [`v-if`](#v-if)
  - [`v-else`](#v-else)
  - [`v-show`](#v-show)
  - [`v-for`](#v-for)
  - [Detailed `v-for`](#detailed-v-for)
  - [List Keys](#list-keys)

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
<li v-for="goal in goals">{{ goal }}</li>
```

## Detailed `v-for`

- For loop with index

```html
<li v-for="(goal, index) in goals" :key="index">{{ goal }}</li>
```

- For loop with key-value pairs

```html
<li v-for="value in { name:'Gagan', age:21 }">{{ value }}</li>
<li v-for="(value, key, index) in { name:'Gagan', age:21 }">
  {{key}} : {{ value }} - {{ index }}
</li>
```

- `v-for` to show a range

```html
<li v-for="item in 10">{{item}}</li>
```

## List Keys

- Make sure to add :key="index" to prevent unexpected behaviour
- Eg.
  - Consider we have a list of input fields
  - If we input text in 1st list item and delete the elemnt
  - All the elemnts in list il move array up and the text will still be shown in topmost list elemnt instead of getting deleted
  - This is prevented using keys
