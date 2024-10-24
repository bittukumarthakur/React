# React

- React Element => which is object which holds props
- React.createElement() => {type: "h1", children: "hello", props: {}}
- component => which holds state;

- React.createElement
  - li => {type: "li", props, children}
  - class component (Timer) => {type: Timer, props, children}

```json
{
  "type": "div", // Root element from your render method
  "props": {}, // No props for the root element
  "children": [
    // Assuming the heading element comes first:
    {
      "type": "h1", // The time element is an h1 tag
      "props": {}, // No props for the h1 element in this example
      "children": [
        // Text content of the h1 element
        "Timer"
      ]
    }
    // ... other children from your render method (button)
  ]
}
```

```js
{
  type: 'div', // Root element from your render method
  props: {}, // No props for the root element
  children: [
    {
      type: 'h1', // The time element is an h1 tag
      props: {},  // No props for the h1 element in this example
      children: [  // Text content of the h1 element
        "Timer"
      ]
    },
    {
      type: 'button', // The button element
      props: { // Button props
        onClick: () => {
          // Function for handling button click (not shown in VDOM)
        },
      },
      children: [ // Text content of the button
        `Clicked ${this.state.count} times`
      ]
    }
  ]
}
```
