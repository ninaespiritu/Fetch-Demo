import './App.css';

const App = () => {

  // https://cat-fact.herokuapp.com/facts/random

  const handleFetch = async () => {
    // store response
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random")
    console.log(response)
  }

  return (
    <div className="App">
      <h1>Hello APIs</h1>
      <button onClick={handleFetch}>Run the Fetch Request</button>
    </div>
  );
}

export default App;
