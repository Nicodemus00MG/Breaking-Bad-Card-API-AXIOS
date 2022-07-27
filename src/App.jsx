import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Card/>
    </div>
  )
}

export default App
