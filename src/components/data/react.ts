import type { ContentBlock } from "../../utils/lessonContents";

export const reactLesson: Record<string, ContentBlock[]> = {
  intro: [
    {
      type: "paragraph",
      text: "Hello😃 Imagine you open a website, maybe Facebook, Instagram, or Netflix. You click a button, scroll the feed, or like a post, and it all happens instantly without reloading the page.",
    },
    {
      type: "paragraph",
      text: "Have you ever wondered how these apps feel so fast and smooth? Well, that magic is powered by frameworks and libraries like ReactJS.",
    },
    { type: "image", src: "/public/reactt.png", alt: "" },
    {
      type: "paragraph",
      text: "Today, let’s dive into React. Think of it like learning to drive a car. At first, you learn the steering, brakes, and accelerator. Once you master the basics, you can go anywhere. React works the same — master its basics, and you can build any app you dream of.",
    },
    {
      type: "paragraph",
      text: "Before React, developers had to constantly update the DOM (the webpage structure) manually using JavaScript. It was like fixing an old car — noisy, repetitive, and tiring. React came along and said😎 'Hey, let me do the heavy lifting. You just tell me how things should look, and I’ll figure out how to update them efficiently.'",
    },
    {
      type: "paragraph",
      text: "",
    },
    {
      type: "paragraph",
      text: "So instead of telling the browser step by step what to change, you just describe the final picture, and React paints it for you. This is why React is called Declarative, you describe the UI, and React handles the updates✨.",
    },
  ],
  jsx: [
    {
      type: "paragraph",
      text: "When you first see React code, you might scratch your head: “Wait… am I mixing HTML and JavaScript 🤯?”",
    },
    {
      type: "paragraph",
      text: "That’s JSX (JavaScript XML). It’s like peanut butter and jelly 🍞🥜🍇 separate, they’re good, but together, they’re awesome. JSX lets you write HTML-like syntax directly in JavaScript, making components easy to read and write.",
    },
    {
      type: "code",
      code: "const greeting = <h1>Hello, React Learner! 👋</h1>;",
    },
    {
      type: "paragraph",
      text: "Behind the scenes, this isn’t HTML — React converts it into JavaScript objects.💡 Note that JSX isn’t required to use React, but almost everyone uses it because it feels natural and developer-friendly.",
    },
  ],

  components: [
    {
      type: "paragraph",
      text: "Think of a website you use every day — maybe YouTube, Instagram, or Twitter. Notice how the page isn’t just one giant piece of code. Instead, it’s broken into smaller sections, On YouTube: the header, the search bar, the sidebar, the video player, and the comments section. On Instagram: the profile card, the posts, the stories, the chat box. In React, each of those sections is built as a Component.",
    },
    {
      type: "paragraph",
      text: "A Component is simply a small, reusable piece of UI. It can be as tiny as a button. Or as big as a whole page. The beauty is: once you create a component, you can reuse it anywhere you like without rewriting the code. For example:",
    },
    {
      type: "code",
      code: `function Button() {
  return <button>Click Me</button>;
}`,
    },
    {
      type: "paragraph",
      text: "Now you can use <Button /> anywhere in your app, and it will render that button. This makes your code cleaner, easier to read, and maintain. Plus, if you ever want to change how the button looks or behaves, you only need to update it in one place.",
    },
    {
      type: "paragraph",
      text: "React gives us two main ways to write components:",
    },
    {
      type: "paragraph",
      text: "1. Class Components (older, more complex, less common).",
    },
    {
      type: "code",
      code: `class Greeting extends React.Component {
  render() {
    return <h1>Hello, Welcome to React!</h1>;
  }
}`,
    },
    {
      type: "paragraph",
      text: "2. Functional Components (modern, simple, recommended).",
    },
    {
      type: "code",
      code: `function Greeting() {
  return <h1>Hello, Welcome to React!</h1>;
}`,
    },
    {
      type: "paragraph",
      text: "Nowadays, we mostly use functional components because they’re easier to write and work better with hooks.",
    },
  ],
  props: [
    {
      type: "paragraph",
      text: "Props (short for *properties*) are how components talk to each other. Think of props like parameters you pass into a function — they make components reusable and customizable.",
    },
    {
      type: "code",
      code: `function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Alice" />   // Hello, Alice!
<Greeting name="Bob" />     // Hello, Bob!`,
    },
    {
      type: "paragraph",
      text: "💡Think of props like toppings on a pizza. The base (component) is always the same, but the toppings (props) make it unique.",
    },
    {
      type: "paragraph",
      text: "You can also pass numbers, booleans, or even functions as props.",
    },
    {
      type: "code",
      code: `function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// Usage
<Button label="Like " onClick={() => alert("Liked!")} />
<Button label="Share " onClick={() => alert("Shared!")} />`,
    },
    {
      type: "paragraph",
      text: "This way, one Button component can be used for 'Like', 'Share', 'Subscribe', or anything else. Props make components flexible and powerful 🔥.",
    },
  ],

  conditional: [
    {
      type: "paragraph",
      text: "Conditional Rendering in React means showing or hiding parts of the UI depending on a condition. It’s like making daily choices. If it rains, take an umbrella. Else, wear sunglasses.",
    },
    {
      type: "paragraph",
      text: "In React, you don’t tell the browser step by step what to show. You just describe conditions, and React decides what to display.",
    },
    {
      type: "code",
      code: `function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}`,
    },
    {
      type: "paragraph",
      text: "Instead of long `if` statements, you can use the ternary operator:",
    },
    {
      type: "code",
      code: `<h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>`,
    },
    {
      type: "paragraph",
      text: "Or use `&&` when you only want to show something if the condition is true:",
    },
    {
      type: "code",
      code: `{isAdmin && <button>Delete Post</button>}`,
    },
    {
      type: "paragraph",
      text: "💡With conditional rendering, your app becomes smarter and adapts to users — just like how Netflix shows 'Continue Watching' only if you already started a show.",
    },
  ],

  lists: [
    {
      type: "paragraph",
      text: "Lists in React let you display a group of items, like rendering all your Instagram friends or all products in an online store.",
    },
    {
      type: "code",
      code: `const friends = ["Alice", "Bob", "Charlie"];

              function FriendList() {
                return (
                  <ul>
                    {friends.map(friend => (
                      <li key={friend}>{friend}</li>
                    ))}
                  </ul>
                );
              }`,
    },
    {
      type: "paragraph",
      text: "💡 Notice the `key` prop — it’s like giving each item a unique ID so React can track changes without redrawing the entire list.",
    },
    {
      type: "paragraph",
      text: "You can also render complex lists, not just text. Example: showing product cards:",
    },
    {
      type: "code",
      code: `const products = [
                { id: 1, name: "Laptop ", amount: 1200 },
                { id: 2, name: "Phone ", amount: 800 },
              ];

              function ProductList() {
                return (
                  <div>
                    {products.map(p => (
                      <div key={p.id}>
                        <h3>{p.name}</h3>
                        <p>{p.amount}</p>
                      </div>
                    ))}
                  </div>
                );
              }`,
    },
  ],

  hooks: [
    {
      type: "paragraph",
      text: "Hooks are special functions in React that let you 'hook into' features like state, lifecycle, or context inside functional components. Before Hooks, you had to use Class Components to do these things. Now, with Hooks, functional components can do everything 🙌.",
    },
    {
      type: "paragraph",
      text: "Think of Hooks like giving your plain components superpowers. A simple function becomes interactive when you add hooks. There are many built-in hooks, but let’s focus on the most common ones.",
    },

    // useState
    {
      type: "paragraph",
      text: "1. useState — lets you add state (memory) to a component. Imagine a light switch. It can be ON or OFF. State remembers which it is.",
    },
    {
      type: "code",
      code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}`,
    },
    {
      type: "paragraph",
      text: "Every time you click, React remembers the new count. Without state, the button would always show the same number.",
    },

    // useEffect
    {
      type: "paragraph",
      text: "2. useEffect — lets you run code after the component renders. Perfect for things like fetching data, setting up timers, or updating the page title. Think of it as: 'After I paint the wall, I’ll hang the clock.'",
    },
    {
      type: "code",
      code: `import { useState, useEffect } from "react";

function ClickCounter(): JSX.Element {

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ClickCounter;
`,
    },
    {
      type: "paragraph",
      text: "The `useEffect` hook can also return a cleanup function like cleaning your brushes after painting.",
    },

    // useContext
    {
      type: "paragraph",
      text: "3. useContext — lets you use values from Context API directly. Instead of passing props, you can grab values from a 'shared backpack.'",
    },
    {
      type: "code",
      code: `const ThemeContext = React.createContext("light");

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button>{theme} mode</button>;
}`,
    },

    // useRef
    {
      type: "paragraph",
      text: "4. useRef — stores a value that doesn’t cause re-renders when it changes. Perfect for keeping references, like focusing on an input box when the page loads.",
    },
    {
      type: "code",
      code: `import { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // focus input on load
  }, []);

  return <input ref={inputRef} placeholder="Type here..." />;
}`,
    },

    // Custom Hooks
    {
      type: "paragraph",
      text: "5. Custom Hooks — you can make your own hooks to reuse logic. Example: a `useWindowSize` hook that tells you the screen width/height.",
    },
    {
      type: "code",
      code: `function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

function App() {
  const width = useWindowSize();
  return <p>Window width: {width}px</p>;
}`,
    },
    {
      type: "paragraph",
      text: "Hooks make your code cleaner, easier, and more reusable. Once you master them, React feels like magic.",
    },
  ],

  context: [
    {
      type: "paragraph",
      text: "Props are great, but sometimes you don’t want to pass data manually through every component. Imagine giving a chocolate to your friend sitting far away — you wouldn’t pass it through 20 classmates first! That’s what Context API solves.😉",
    },
    {
      type: "paragraph",
      text: "Context lets you share values (like theme, language, or authentication status) directly with components that need them, without 'prop drilling.'",
    },
    {
      type: "code",
      code: `// 1. Create Context
const ThemeContext = React.createContext("light");

// 2. Provide Context
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. Consume Context
function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button>{theme} mode</button>;
}`,
    },
    {
      type: "paragraph",
      text: "💡Context API = Magic backpack. Instead of handing props along the chain, the data is always available to whoever needs it.",
    },
  ],

  router: [
    {
      type: "paragraph",
      text: "Have you noticed how Instagram or Twitter feels like an app, not a website? Clicking 'Profile' or 'Messages' doesn’t reload the page — it instantly swaps views. That’s React Router.",
    },
    {
      type: "paragraph",
      text: "React Router allows you to build multi-page experiences while still being a single-page application.",
    },
    {
      type: "code",
      code: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`,
    },
    {
      type: "paragraph",
      text: "With React Router, you create smooth navigation experiences without reloads, just like your favorite apps.",
    },
  ],

  performance: [
    {
      type: "paragraph",
      text: "React apps are super fast, but as your app grows, you might notice some slowdowns. Don’t worry — React gives us tools to optimize performance.",
    },
    {
      type: "paragraph",
      text: "The main idea: Avoid unnecessary re-renders. If a component re-renders too often, the UI can feel sluggish. There are several techniques to keep your app snappy.",
    },
    {
      type: "paragraph",
      text: "1. React.memo – Skips re-rendering a component if its props didn’t change.",
    },
    {
      type: "code",
      code: `import React from "react";

const Button = React.memo(({ label }: { label: string }) => {
  console.log("Rendering:", label);
  return <button>{label}</button>;
});

export default Button;`,
    },
    {
      type: "paragraph",
      text: "Now, if the parent re-renders but the `label` prop is the same, Button won’t re-render.",
    },
    {
      type: "paragraph",
      text: "2. useMemo – Memorizes a value so it doesn’t get recalculated on every render.",
    },
    {
      type: "code",
      code: `import { useMemo } from "react";

function ExpensiveCalculation({ num }: { num: number }) {
  const result = useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]);

  return <p>Result: {result}</p>;
}`,
    },
    {
      type: "paragraph",
      text: "Here, the calculation only runs when `num` changes, not on every render 🔄.",
    },
    {
      type: "paragraph",
      text: "3. useCallback – Keeps a function reference stable between renders, useful when passing callbacks to child components.",
    },
    {
      type: "code",
      code: `import { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <button onClick={increment}>Clicked {count} times</button>;
}`,
    },
    {
      type: "paragraph",
      text: "By wrapping `increment` in `useCallback`, React knows the function doesn’t change on every render.",
    },
    {
      type: "paragraph",
      text: "With these tools — React.memo, useMemo, and useCallback — you can keep your React apps smooth and blazing fast.",
    },
  ],

  forms: [
    {
      type: "paragraph",
      text: "Whenever you sign in to Instagram or search on YouTube, you’re filling out a form. In React, handling forms is a bit special because React wants to be the “single source of truth” for your data.",
    },
    {
      type: "paragraph",
      text: "There are two main ways to work with forms in React:",
    },
    {
      type: "paragraph",
      text: "1. Uncontrolled Components – The browser keeps track of the input’s value (like regular HTML forms).",
    },
    {
      type: "code",
      code: `function UncontrolledForm(): JSX.Element {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    alert("Name: " + formData.get("username"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  );
}`,
    },
    {
      type: "paragraph",
      text: "Here, the browser manages the input value. React only reads it when the form is submitted.",
    },
    {
      type: "paragraph",
      text: "2. Controlled Components – React controls the input by storing the value in state. This is the most common pattern.",
    },
    {
      type: "code",
      code: `import { useState } from "react";

function ControlledForm(): JSX.Element {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Hello, " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}`,
    },
    {
      type: "paragraph",
      text: "In this version, React’s state (`name`) is always in sync with the input box. As the user types, `setName` updates the state, and React re-renders the input with the latest value.",
    },
    {
      type: "paragraph",
      text: "💡Controlled components give you more power you can validate inputs, disable the button if the field is empty, or transform the input as the user types. That’s why controlled forms are the React standard.",
    },
    {
      type: "paragraph",
      text: "Next time you create a login or signup page, you’ll likely use controlled components!",
    },
  ],

  hoc: [
    {
      type: "paragraph",
      text: "Imagine you’re building a React app and you need to add the same behavior to many components — like logging, showing a loading spinner, or checking if the user is logged in.",
    },
    {
      type: "paragraph",
      text: "You could copy-paste the same logic everywhere (😵 messy!), but React gives us a smarter way: Higher-Order Components (HOCs).",
    },
    {
      type: "paragraph",
      text: "A Higher-Order Component is simply a function that takes a component as input and returns a new component with extra powers✨.",
    },
    {
      type: "code",
      code: `import React from "react";

// HOC that adds loading logic
function withLoading<P>(WrappedComponent: React.ComponentType<P>) {
  return function WithLoadingComponent(props: P & { loading: boolean }) {
    if (props.loading) {
      return <p>Loading... ⏳</p>;
    }
    return <WrappedComponent {...props} />;
  };
}

// Example usage
function DataDisplay({ data }: { data: string }) {
  return <p>Data: {data}</p>;
}

const DataWithLoading = withLoading(DataDisplay);

export default function App() {
  return (
    <>
      <DataWithLoading loading={true} data="User info" />
      <DataWithLoading loading={false} data="Profile loaded!" />
    </>
  );
}`,
    },
    {
      type: "paragraph",
      text: "Here’s what happens 👇",
    },
    {
      type: "paragraph",
      text: "1. `withLoading` takes any component and adds `loading` behavior.",
    },
    {
      type: "paragraph",
      text: "2. If `loading = true`, it shows a loading message.",
    },
    {
      type: "paragraph",
      text: "3. Otherwise, it renders the original component with its props.",
    },
    {
      type: "paragraph",
      text: "HOCs are great when you want to reuse logic across multiple components. For example: authentication checks, data fetching wrappers, logging, analytics, or error handling.",
    },
    {
      type: "paragraph",
      text: "👉 Think of HOCs as a way to decorate your components with extra functionality without touching their internal code 🪄.",
    },
    {
      type: "paragraph",
      text: "Note: Nowadays, many developers prefer custom hooks for sharing logic because they’re simpler. But HOCs are still useful to understand since you’ll see them in older React codebases.",
    },
  ],

  eventHandling: [
    {
      type: "paragraph",
      text: "In React, almost everything you do interacts with the user like clicking buttons, typing in inputs, hovering over elements. These interactions are called events.",
    },
    {
      type: "paragraph",
      text: "React uses camelCase event names (like `onClick`, `onChange`) instead of lowercase like in HTML, and you pass a function instead of a string.",
    },
    {
      type: "paragraph",
      text: "Let’s start with a simple button click example:",
    },
    {
      type: "code",
      code: `import { useState } from "react";

function ClickButton(): JSX.Element {
  const [message, setMessage] = useState<string>("");

  const handleClick = () => {
    setMessage("Button clicked! 🎉");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
    </div>
  );
}

export default ClickButton;`,
    },
    {
      type: "paragraph",
      text: "Here’s what happens \n- `onClick={handleClick}` tells React what to do when the button is clicked.\n- The `handleClick` function updates the state, which re-renders the component and shows the message.",
    },
    {
      type: "paragraph",
      text: "You can also handle input changes using `onChange`:",
    },
    {
      type: "code",
      code: `import { useState } from "react";

function TextInput(): JSX.Element {
  const [name, setName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} 
      placeholder="Type your name" />
      <p>Hello, {name}</p>
    </div>
  );
}

export default TextInput;`,
    },
    {
      type: "paragraph",
      text: "💡 Tip: In TypeScript, you can type the event parameter to make it safe and avoid errors (`React.ChangeEvent<HTMLInputElement>` for input, `React.MouseEvent<HTMLButtonElement>` for buttons).",
    },
    {
      type: "paragraph",
      text: "React also supports other events like `onMouseEnter`, `onSubmit`, `onKeyDown`, and many more. Basically, any DOM event can be used in React with camelCase naming and a function handler.",
    },
    {
      type: "paragraph",
      text: "Event handling is how your React app becomes interactive and responds to user actions. Once you master it, you can build dynamic, engaging interfaces like a pro ✨.",
    },
  ],

  lifecycle: [
    {
      type: "paragraph",
      text: "Every React component goes through a lifecycle — it’s created, rendered, updated, and eventually removed. Understanding this helps you run code at the right time.",
    },
    {
      type: "paragraph",
      text: "In class components, React provides lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. In functional components, we achieve the same with `useEffect` hooks.",
    },
    {
      type: "paragraph",
      text: "Here’s a simple functional component example showing lifecycle behavior:",
    },
    {
      type: "code",
      code: `import { useState, useEffect } from "react";

function Timer(): JSX.Element {
  const [seconds, setSeconds] = useState<number>(0);

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("Component mounted or updated!");
    document.title = \`Time: \${seconds} sec\`;
  }, [seconds]); // runs after 'seconds' changes

  // componentDidMount only
  useEffect(() => {
    console.log("Component mounted only!");
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);

    // componentWillUnmount
    return () => {
      console.log("Component will unmount!");
      clearInterval(interval);
    };
  }, []); // empty dependency → runs once when mounted

  return <p>⏱️ Seconds: {seconds}</p>;
}

export default Timer;`,
    },
    {
      type: "paragraph",
      text: "Lets clarify what happened in above code:\n- The first `useEffect` runs every time `seconds` changes, like `componentDidUpdate`.\n- The second `useEffect` with empty dependencies runs once when the component mounts, like `componentDidMount`. It also returns a cleanup function, which runs before the component unmounts, like `componentWillUnmount`.\n- This pattern helps you manage timers, API calls, subscriptions, or any side-effects safely.",
    },
    {
      type: "paragraph",
      text: "Understanding lifecycle is essential for managing resources efficiently, avoiding memory leaks, and making your app predictable and smooth.",
    },
    {
      type: "paragraph",
      text: "💡 Tip: In modern React, functional components + hooks are preferred, but knowing class lifecycles helps you read older codebases.",
    },
  ],

  styling: [
    {
      type: "paragraph",
      text: "Styling is how we make our app look good🤩. In React, there are multiple ways to style components from simple inline styles to powerful CSS-in-JS libraries.",
    },
    {
      type: "paragraph",
      text: "Here are the most common approaches:",
    },

    // 1. CSS files
    {
      type: "paragraph",
      text: "1. CSS Files – The classic way. Create a `.css` file and import it into your component.",
    },
    {
      type: "code",
      code: `/* Button.css */
.button {
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
}

import './Button.css';

function Button(): JSX.Element {
  return <button className="button">Click Me</button>;
}

export default Button;`,
    },

    // 2. Inline Styles
    {
      type: "paragraph",
      text: "2. Inline Styles – Define styles directly in the component as a JavaScript object.",
    },
    {
      type: "code",
      code: `function InlineButton(): JSX.Element {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#2196f3",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
  };

  return <button style={buttonStyle}>Click Me</button>;
}

export default InlineButton;`,
    },

    // 3. CSS Modules
    {
      type: "paragraph",
      text: "3. CSS Modules – Avoid class name conflicts by scoping CSS to the component.",
    },
    {
      type: "code",
      code: `/* Button.module.css */
.button {
  background-color: #ff5722;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
}

import styles from './Button.module.css';

function ModuleButton(): JSX.Element {
  return <button className={styles.button}>Click Me</button>;
}

export default ModuleButton;`,
    },

    // 4. Styled Components (CSS-in-JS)
    {
      type: "paragraph",
      text: "4. Styled Components – A popular CSS-in-JS library for styling React components with dynamic props.",
    },
    {
      type: "code",
      code: `import styled from 'styled-components';

const Button = styled.button\`
  background-color: #9c27b0;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #7b1fa2;
  }
\`;

function StyledButton(): JSX.Element {
  return <Button>Click Me</Button>;
}

export default StyledButton;`,
    },

    {
      type: "paragraph",
      text: "💡 Tip: Choose your styling approach based on project needs:\n- CSS files → small/simple apps\n- CSS Modules → medium apps to avoid conflicts\n- Styled Components → large apps, dynamic styling, theme support\n- Inline styles → quick one-off styles",
    },
    {
      type: "paragraph",
      text: "Styling in React is flexible. You can even mix methods! The key is to keep your UI consistent and maintainable ✨.",
    },
  ],

  stateManagement: [
    {
      type: "paragraph",
      text: "As your React app grows, managing state (data) across multiple components can get tricky. Passing props down many levels or lifting state up too often can become messy. That’s where state management libraries come in!",
    },
    {
      type: "paragraph",
      text: "They help you centralize your app’s state and make it easy for components to read or update it, without prop drilling.",
    },
    {
      type: "paragraph",
      text: "Popular State Management Libraries in React:",
    },
    {
      type: "paragraph",
      text: "1. Redux – The most widely used library. It uses a single store to hold your app state and actions to update it. Works well for large apps.",
    },
    {
      type: "paragraph",
      text: "2. Zustand – A simpler, modern alternative to Redux. No boilerplate, easy to use with hooks.",
    },
    {
      type: "paragraph",
      text: "3. Recoil – Made by Facebook for React. It allows state atoms that can be shared across components.",
    },
    {
      type: "paragraph",
      text: "4. Context API – Built into React. Great for small to medium apps or for passing global data like theme or user info.",
    },
    {
      type: "paragraph",
      text: "Here’s a simple example using React Context API (built-in, no extra library needed):",
    },
    {
      type: "code",
      code: `import React, { createContext, useContext, useState } from "react";

// 1. Create a context
const ThemeContext = createContext<{ 
theme: string; 
toggleTheme: () => void } | undefined>(undefined);

// 2. Create a provider
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Use the context in a component
function ThemedButton(): JSX.Element {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeContext not found!");
  const { theme, toggleTheme } = context;

  return (
    <button
      onClick={toggleTheme}
      style={{ 
      background: theme === "light" ? "#eee" : "#333", 
      color: theme === "light" ? "#000" : "#fff" 
      }}
    >
      Toggle Theme
    </button>
  );
}

// 4. Wrap app with provider
export default function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}`,
    },
    {
      type: "paragraph",
      text: "💡 Key Takeaways:\n- Use Context API for small/medium global state.\n- Use Redux/Zustand/Recoil for large apps with complex state.\n- These libraries avoid prop drilling and make your app more maintainable.",
    },
    {
      type: "paragraph",
      text: "Learning state management is essential for building real-world React apps that scale smoothly.",
    },
  ],

  errorHandling: [
    {
      type: "paragraph",
      text: "Errors happen 😅. In React, an error in one component can crash the entire app if not handled properly. That’s why Error Handling is important to keep your app stable.",
    },
    {
      type: "paragraph",
      text: "React provides Error Boundaries — components that catch JavaScript errors anywhere in their child component tree, log them, and display a fallback UI instead of crashing the app.",
    },
    {
      type: "code",
      code: `import React, { Component, ReactNode } from "react";

type ErrorBoundaryProps = { children: ReactNode };
type ErrorBoundaryState = { hasError: boolean };

class ErrorBoundary extends Component<ErrorBoundaryProps, 
ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): 
  ErrorBoundaryState {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }
    return this.props.children;
  }
}

// Usage
function BuggyComponent() {
  throw new Error("Oops!");
  return <p>This won't render</p>;
}

export default function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}`,
    },
    {
      type: "paragraph",
      text: "What happened here is:\n- `getDerivedStateFromError` sets a flag in state when an error occurs.\n- `componentDidCatch` lets you log the error.\n- The fallback UI prevents the entire app from crashing.",
    },
    {
      type: "paragraph",
      text: "For functional components, we can handle errors in event handlers or async functions using `try/catch` blocks:",
    },
    {
      type: "code",
      code: `import { useState } from "react";

function FetchData(): JSX.Element {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) throw new Error("Network response not ok");
      const result = await response.json();
      setData(result.message);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Load Data</button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && <p>Data: {data}</p>}
    </div>
  );
}

export default FetchData;`,
    },
    {
      type: "paragraph",
      text: "Key Takeaways:\n- Error Boundaries catch rendering errors in child components.\n- Try/catch works for event handlers and async operations.\n- Proper error handling keeps your app stable and user-friendly 👍.",
    },
  ],

  summary: [
    {
      type: "paragraph",
      text: "🎉 Congratulations! You’ve completed the React lesson. Here’s what we covered and what you should remember:",
    },
    {
      type: "paragraph",
      text: "1. Introduction & JSX – React makes building UIs easy by letting you describe the UI declaratively. JSX lets you write HTML-like syntax in JavaScript for better readability.",
    },
    {
      type: "paragraph",
      text: "2. Components – The building blocks of your app. Components can be small (like buttons) or big (whole pages). Learn to create functional components and class components (mostly functional now).",
    },
    {
      type: "paragraph",
      text: "3. Props – Components communicate using props. Think of them as function parameters that customize component behavior.",
    },
    {
      type: "paragraph",
      text: "4. State & Hooks – State stores dynamic data. `useState` manages state, `useEffect` handles side effects, and custom hooks let you reuse logic across components.",
    },
    {
      type: "paragraph",
      text: "5. Conditional Rendering & Lists – Display UI based on conditions or render multiple items efficiently using `.map()`.",
    },
    {
      type: "paragraph",
      text: "6. Context API & State Management – Share global state across components without prop drilling. For larger apps, you can use Redux, Zustand, or Recoil.",
    },
    {
      type: "paragraph",
      text: "7. Forms & Event Handling – Learn controlled vs uncontrolled components, handling input changes, clicks, and form submissions.",
    },
    {
      type: "paragraph",
      text: "8. React Router – Create multi-page experiences in a single-page app with smooth navigation.",
    },
    {
      type: "paragraph",
      text: "9. Performance Optimization – Use React’s memoization (`React.memo`, `useMemo`, `useCallback`) to prevent unnecessary re-renders and speed up your app.",
    },
    {
      type: "paragraph",
      text: "10. Error Handling – Keep your app stable using Error Boundaries for rendering errors and try/catch for async operations or event handlers.",
    },
    {
      type: "paragraph",
      text: "11. Higher-Order Components & Compound Components – Reuse logic and create flexible, composable UI patterns.",
    },
    {
      type: "paragraph",
      text: "12. Styling – Apply styles with CSS files, CSS Modules, inline styles, or Styled Components to make your app look polished.",
    },
    {
      type: "paragraph",
      text: "💡 Key Tips to Remember:\n- React is declarative — describe the UI, React handles updates.\n- Functional components + hooks are the modern standard.\n- Use props and state wisely to manage data flow.\n- Always handle errors and optimize performance.\n- Keep components reusable and maintainable.",
    },
    {
      type: "paragraph",
      text: "🚀 You now have a solid foundation to build React apps. Keep practicing, try building small projects, and soon you’ll be confident creating dynamic, interactive UIs!",
    },
  ],
};
