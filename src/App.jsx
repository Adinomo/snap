import { useState } from 'react'
import "./assets/scss/index.scss"
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full font-primary">
      <NavBar />
      <Hero />
    </div>
  )
}

export default App
