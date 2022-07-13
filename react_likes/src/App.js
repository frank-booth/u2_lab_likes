import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Likes from './components/Likes'

function App() {
  const [totalLikes, setTotalLikes] = useState(0)

  const plus = () => {
    setTotalLikes(totalLikes + 1)
  }

  const minus = () => {
    if (totalLikes < 1) return
    else {
      setTotalLikes(totalLikes - 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>{totalLikes}</h3>
        <Likes totalLikes={totalLikes} plus={plus} minus={minus} />
      </header>
    </div>
  )
}

export default App
