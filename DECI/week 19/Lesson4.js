// Lesson: React Router Basics
// Introduction
// React Router is a standard library for routing in React applications. It enables navigation between different components (pages) without reloading the entire application, creating a seamless, Single Page Application (SPA) experience.

// Why Use React Router?

// To create multi-page applications with clean URLs.
// To navigate between views without full page refreshes.
// To manage URL parameters and nested routes.
// To enhance user experience with smooth transitions.


// 1. Installing React Router
// To start using React Router, install it via npm:
                           
//           npm install react-router-dom

// Setting Up Routing
// Basic Example:

          
            
            
          
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from
 'react-router-dom';

// Define components for pages
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

// Main App component
function App() {
  return (
    <Router>
      <nav>
        {/* Navigation links */}
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
      
// 4. Navigation with Links

// Use <Link> instead of <a> tags to prevent full page reloads.
// Example:

//           <Link to="/about">About Us</Link>
      
// This navigates to /about route smoothly.


// 5. Programmatic Navigation
// Sometimes, you want to navigate programmatically (e.g., after form submission).

          
            
            
          
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // After login success
    navigate('/dashboard');
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
}
      
// 6. Dynamic Routes and URL Parameters
// React Router supports dynamic segments.
// Example:

          
            
            
          
 function UserProfile({ id }) {
  return <h2>User ID: {id}</h2>;
}

// Route configuration
<Route path="/user/:id" element={<UserPage />} />

// Inside UserPage component:
import { useParams } from 'react-router-dom';

function UserPage() {
  const { id } = useParams();
  return <UserProfile id={id} />;
}



//       URL example:
        
//           /user/123
      
// 7. Nested Routes
// React Router allows nested route structures.

          
 <Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="settings" element={<Settings />} />
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>
      
8. Handling 404 - Not Found

    Use a wildcard route to catch all unmatched URLs:

  
  <Routes>
  {/* other routes */}
  <Route path="*" element={<NotFound />} />
</Routes>
      
// Summary
// Conclusion
// React Router transforms your React app into a multi-page experience without
//  full reloads, enabling:

// Clean URL management
// Dynamic navigation
// Nested routing structures
// Handling of parameters and fallback routes


