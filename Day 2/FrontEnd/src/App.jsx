import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [Jokes, setJokes] = useState([])
  
  useEffect(() =>{
    axios.get('http://localhost:3000/jokes')
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })
  return (
    <>
      <h1>Chai aur Full stack</h1>
      <p>Jokes : {Jokes.length}</p>

      {
        Jokes.map((jokes, index) =>{
          <div key = {jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.description}</p>
          </div>
        })
      }
    </>
  )
}

export default App
