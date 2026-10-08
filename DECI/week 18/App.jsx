App.jsx
function App() {
  const username = "Ahmed";

  return (
    <div>
      <h1>Hello, {username}</h1>
      <button onClick={() => console.log("Button clicked")}>
        Click me
      </button>
    </div>
  );
}

export default App;