import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState(''); // State to hold the message from the backend

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchMessage = async () => {
      try {
        // Use the Fetch API to make a GET request to your Node.js backend
        const response = await fetch('http://localhost:3100/'); // Use the correct port for your Node.js server
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse the JSON data from the response
        setMessage(data.message); // Update the state with the message from the backend
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Failed to fetch message'); // Handle errors
      }
    };

    fetchMessage(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR. flawless
        </p>
        {message && <p>{message}</p>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
