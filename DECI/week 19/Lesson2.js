// Lesson: Conditional Rendering Patterns in React
// Introduction
// Conditional rendering in React allows you to display different UI 
// elements or components based on certain conditions, such as application 
// state, user actions, or data values. Mastering various conditional rendering
//  techniques helps create dynamic, user-responsive interfaces.

// Why Conditional Rendering?

// To show or hide components based on user interactions.
// To display different content for different user roles.
// To handle loading states, error messages, or empty data scenarios.
// To build interactive and flexible UIs.


// 1. Using if Statements
// Approach:
// You can use JavaScript if statements inside your component's render method
//  or functional component body to decide what to render.
// Example:

          
            
            
          
 function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}
     


// Notes:

// This approach is straightforward but can lead to verbose code if there are
//  many conditions.


// 2. Using Ternary Operator
// Approach:
// The ternary operator (condition ? trueResult : falseResult) provides a 
// concise way to render different components or elements based on a condition.
// Example:

          
            
            
          
          function UserStatus({ isAdmin }) {
  return (
    <div>
      {isAdmin ? <AdminPanel /> : <UserPanel />}
    </div>
  );
}
    

// Advantages:

// Compact syntax.
// Useful for inline conditional rendering.


// 3. Using Logical AND (&&) Operator
// Approach:
// When you want to render something conditionally — only if a condition is
//  true — you can use the logical AND operator.
// Example:

          
            
            
          
 function Notification({ message }) {
  return (
    <div>
      {message && <p>{message}</p>}
    </div>
  );
}
      
// If message is truthy, the paragraph renders.
// If message is falsy (null, undefined, false), nothing is rendered.

// Use case:

// Showing optional UI elements like alerts, badges, or loading spinners.


// 4. Conditional Rendering of Components
// You can also decide whether to render entire components based on conditions.
// Example:

          
            
            
          
          function Dashboard({ isLoading }) {
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return <MainContent />;
}
      
// 5. Inline Conditional Rendering in JSX
// You can embed conditions directly inside JSX using the ternary operator or 
// logical operators.
// Example:

          
            
            
          
 function LoginButton({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
}
      
// 6. Best Practices and Tips

// Keep conditions simple: Complex logic can be moved outside JSX for readability.
// Use helper functions: For complicated conditions, define functions that return 
// components.
// Avoid multiple nested ternaries: They can reduce readability; prefer if 
// statements or separate components.
// Render null when nothing should be displayed: Returning null renders nothing.


          
            
            
          
 function ConditionalComponent({ show }) {
  return show ? <ComponentA /> : null;
}
      
// 7. Practical Example: User Profile Display
// Suppose you want to display different profile info based on user login 
// status and role:

          
            
            
          
function UserProfile({ user }) {
  if (!user.isLoggedIn) {
    return <LoginPrompt />;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      {user.role === 'admin' && <AdminControls />}
      {user.role !== 'admin' && <UserControls />}
    </div>
  );
}