## Figma URL

[Lorem Ipsum](https://www.figma.com/file/JRDDc3aN6uiBS3yvjbkk0s/Lorem-ipsum?node-id=0%3A1&t=cLtQmBowNmb4V0jP-1)

### Nanoid

Nanoid is a small, fast, and secure library for generating unique IDs in JavaScript. It is designed to be as compact as possible while still providing a unique, unpredictable, and collision-resistant identifier. IDs consist of a combination of uppercase and lowercase letters, as well as numbers. 

Here's an example of how to use nanoid to generate a unique ID:

```sh
npm i nanoid
```

```js
import { nanoid } from 'nanoid';

const id = nanoid(); // Generates a 21-character random ID

console.log(id); // Output: "Uakgb_J5m9g-0JDMbcJqL"
```

The default ID length is 21 characters, but this can be changed by passing a different length as an argument.
