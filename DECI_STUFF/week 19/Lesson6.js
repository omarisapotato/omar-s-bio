Today's Topics

Creating a Catch-All Route for 404 Pages
Designing a Useful 404 Page
Implementing Redirects Instead of Showing Errors
Verifying that Everything Works as Expected


1. Creating a Catch-All Route for 404 Pages
In React Router, you can define a route that matches any path not matched by previous routes — this is your catch-all route, typically used for 404 error pages.
React Router v6 Example:

          
            
            
          
          import { Routes, Route } from 'react-router-dom';

// Your existing route setup
<Routes>
  {/* ... your other routes ... */}
  {/* Catch-all route for unmatched paths */}
  <Route path="*" element={<NotFound />} />
</Routes>
      
The path="*" acts as a wildcard, catching all paths that don't match earlier routes.


2. Designing a Useful 404 Page
Create a dedicated NotFound component that informs users the page isn't found and offers helpful navigation options.
Example: NotFound.jsx

          
            
            
          
          import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
      Key features:

Clear, friendly message.
Navigation link to return to a safe page.
Optional: Add images, styling, or animations for better UX.


3. Implementing Redirects Instead of Showing an Error
Sometimes, instead of showing a 404 page, you want to redirect users to another route (e.g., home page, login, or a specific dashboard).
React Router v6 Redirect Example:
Use the Navigate component:

          
            
            
          
          import { Routes, Route, Navigate } from 'react-router-dom';

<Routes>
  {/* Example: redirect /old-path to /new-path */}
  <Route path="/old-path" element={<Navigate to="/new-path" replace />} />

  {/* Catch-all route for invalid paths redirecting to home */}
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
      Notes:

replace ensures the redirect replaces the current entry in the history stack.
Redirects are useful for handling deprecated URLs or login redirects.


4. Verifying That Everything Works
Steps to test:

Navigate to known routes: Confirm pages load correctly.
Enter invalid URLs: e.g., /some-nonexistent-page, should display the 404 page or redirect.
Test redirect routes: Visit /old-path and verify it redirects to /new-path.
Use browser dev tools: Check network requests and console for errors.
Use React DevTools: Inspect route hierarchy and component rendering.

Pro tip:

Use your development server (npm start) and manually type invalid URLs.
Consider adding console logs inside your NotFound component or redirect components for debugging.