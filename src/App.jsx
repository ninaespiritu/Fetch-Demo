import './App.css';
import{ useState, useEffect } from 'react';
import { render } from 'react-dom';

const App = () => {

  // useState
  const [fact, setFact] = useState({})
  const [data, setData] = useState(false)

  // equivalent to componentDidMount
  useEffect(() => {
    handleFetch()
  }, [])

  // equivalent to componentDidUpdate but with specifications
  useEffect(() => {
    console.log("The fact has changed.")
  }, [fact])

  // equivalent to componentDidUpdate
  useEffect(() => {
    console.log("The component did update.")
  })

  // API
  const handleFetch = async () => {

    // store response
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random")
    const data = await response.json()
  
    setFact(data)
  }

  return (
    <div className="App">
      <h1>Hello APIs</h1>
      <button onClick={handleFetch}>Run the Fetch Request</button>
      <button onClick={ () => setData("Hi") }>Add Data</button>
      <p>{fact.text}</p>
    </div>
  );
}


// import { Component } from "react"

// class App extends Component {
//   state = {
//     myFirstState: 100,
//   }

//   handleClick = () => {
//     this.setState({ myFirstState: 5000 })
//   }

//   componentDidMount() {
//     console.log("My component ran for the first time.")
//   }

//   componentDidUpdate() {
//     console.log("My component has just updated.")
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello Class Component</h1>
//         <button onClick={this.handleClick}>Click me to change state</button>
//       </div>
//     )
//   }
// }

export default App;
