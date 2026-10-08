// Lesson: Styling Components in React
// Introduction
// Styling is a crucial aspect of developing visually appealing and 
// user-friendly React applications. React offers various approaches to
//  style components, each with its advantages and use cases. 

//  This lesson explores three common methods:

// CSS Modules
// Bootstrap (CSS Framework)
// Inline Styles

// Understanding when and how to use each method helps in maintaining organized,
//  reusable, and scalable styles.

// 1. CSS Modules
// What are CSS Modules?
// CSS Modules are CSS files where class names and animation names are scoped 
// locally by default. This prevents styles from leaking or affecting other 
// components.
// How it works:

// Create a CSS file with the .module.css extension.
// Import styles into your React component.
// Apply classes via imported styles object.

// Example:
                  
   // Button.module.css
   
 .button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
}

//-----------------------------------------
      Button.jsx
                                 
import React from 'react';
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click Me</button>;
}
export default Button;


//-----------------------------------------
       Advantages:

 //Scoped styles prevent conflicts.
// Easy to maintain and organize.
// Supports composition and variables with preprocessors.


// 2. Bootstrap (CSS Framework)

// What is Bootstrap?
// Bootstrap is a popular CSS framework that provides pre-designed UI
//  components and utility classes for rapid development.
// How to use:

// Include Bootstrap CSS via CDN or install via npm.
// Use Bootstrap classes directly in JSX elements.

Example:

  import 'bootstrap/dist/css/bootstrap.min.css';

function CardComponent() {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="image.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick example text.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}
     



Advantages:

// Fast to implement with ready-made components.
// Consistent design system.
// Responsive and mobile-first.

// When to use:

// Rapid prototyping.
// When you want a consistent, professional look without building styles from 
// scratch.
// Large projects needing standardized UI components.


// 3. Inline Styles
// What are inline styles?
// Inline styles are applied directly to elements via the style
//  attribute in JSX, passing a JavaScript object.
// Example:

                   
            
          
  function Alert() {
  const style = {
    padding: '10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '4px',
  };

  return <div style={style}>This is an alert!</div>;
}
    

// Advantages:

// Quick for small, specific styling.
// Dynamic styling based on component state or props.
// No need for external CSS files.

// Limitations:

// Less maintainable for complex styles.
// Cannot use CSS pseudo-classes or media queries directly.
// Styles are inline, which can affect performance if overused.




// Conclusion
// Choosing the right styling method depends on your project needs:

// For organized, maintainable styles, prefer CSS Modules.
// For fast development and standard UI, use Bootstrap.
// For dynamic, small styles, Inline styles are handy.

// Mixing these approaches can give you a flexible styling strategy for
//  your React applications.


