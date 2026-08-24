// Advanced Props & Data Flow

// This lesson focuses on sophisticated techniques for managing data transfer 
// between React components, emphasizing how data flows from parent components 
// to child components and how components communicate with each other
//  effectively.

// Core Concepts Covered




// 1. Props in React

// Props (short for properties) are used to pass data from a parent component to
//  a child component.
// They are read-only in the child component, meaning the child cannot modify 
// props directly.
// Props enable component reusability and dynamic rendering based on the data 
// passed.





// 2. Parent-Child Communication

// In React, data typically flows from parent to child via props.
// The parent passes data as props to the child components.
// Child components can display or utilize this data but cannot modify it
//  directly.




// 3. Prop Drilling

// When deeply nested components need access to data, props have to be passed
//  through multiple levels of components.
// This process is called "prop drilling."
// While straightforward, prop drilling can become cumbersome in large 
// applications, leading to the need for alternative state management
//  strategies.





// 4. Callback Functions for Child-to-Parent Communication

// Since data flows from parent to child via props, child components cannot
//  directly modify parent state.
// To facilitate child-to-parent communication, callback functions are passed
//  down as props.
// Child components invoke these functions to send data or trigger actions in
//  parent components.

// Example:

  function Parent() {
  const [data, setData] = useState('');

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return <Child onDataChange={handleDataChange} />;
}

function Child({ onDataChange }) {
  const handleInput = (e) => {
    onDataChange(e.target.value);
  };

  return <input onChange={handleInput} />;
}



//       5. Organizing Data Flow

// In complex applications, managing data flow becomes crucial.
// Techniques include:
// Lifting State Up: Moving shared state to the nearest common ancestor.
// Using Context API: Providing data globally without prop drilling.
// State Management Libraries: Redux, MobX, etc., for scalable state handling.




// Practical Applications

// Passing data to customize components.
// Updating parent state based on child interactions.
// Avoiding prop drilling using Context API.
// Structuring data flow for maintainability and clarity.


// Summary

// Props are essential for passing data down from parent to child.
// For child-to-parent communication, use callback functions.
// Prop drilling can be simplified with React's Context API.
// Organize data flow thoughtfully to keep the application maintainable 
// and scalable.