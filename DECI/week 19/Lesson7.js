Lesson 7: Optimization in React — React.memo, useCallback, and useRef
Introduction
In React, unnecessary re-renders can impact performance, especially in large applications. To optimize rendering, React provides hooks and utilities like React.memo, useCallback, and useRef. Learning how to use these effectively helps create faster, more efficient React apps.

1. React.memo: Preventing Unnecessary Re-renders
What is React.memo?
React.memo is a higher-order component that memoizes a functional component. It prevents re-rendering if its props haven't changed.
When to use?

When a component renders the same output given the same props.
To optimize components that receive stable props.

Example:

          
            
            
          
          import React from 'react';

const ExpensiveComponent = React.memo(({ data }) => {
  console.log('Rendering ExpensiveComponent');
  return <div>Data: {data}</div>;
});
      Usage:

          
            
            
          
          <ExpensiveComponent data={someData} />
      
If someData doesn't change, ExpensiveComponent won't re-render.


2. useCallback: Preserving Function References
What is useCallback?
useCallback returns a memoized version of a callback function, which only changes if its dependencies change. This prevents child components from re-rendering unnecessarily when passing functions as props.
Why?

Functions are recreated on every render by default.
Passing new function references can cause child components wrapped with React.memo to re-render.

Example:

          
            
            
          
          import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert('Button clicked!');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onButtonClick={handleClick} />
    </div>
  );
}

const Child = React.memo(({ onButtonClick }) => {
  console.log('Child re-rendered');
  return <button onClick={onButtonClick}>Click Me</button>;
});
      
useCallback ensures handleClick has stable reference.
Child only re-renders if onButtonClick changes.


3. useRef: Accessing DOM Elements & Values Without Re-render
What is useRef?
useRef creates a mutable object with .current that persists across renders. It can:

Access DOM elements.
Store mutable values that do not trigger re-renders when changed.

Examples:
Accessing DOM element:

          
            
            
          
          import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
      Storing mutable data:

          
            
            
          
          function Timer() {
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      console.log('Tick');
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}




Conclusion

Use React.memo to wrap components that don't need to re-render often.
Use useCallback to maintain stable function references, especially when 
passing functions to memoized children.
Use useRef to access DOM nodes or store mutable data that shouldn't trigger 
re-renders.