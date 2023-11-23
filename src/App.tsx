import { useState, useRef } from 'react'
import Hex2rgb from './components/Hex2rgb'
import './App.css'

function App() {
  const [state, setState] = useState<string>('')
  const currentColor = useRef<HTMLInputElement | null>(null)
  
  const inputChangeColor = () => {
    if(currentColor.current === null) return
    setState(currentColor.current.value)
  }

  return (
    <>
      <form action="">
        <input onChange={inputChangeColor} type="text" ref={currentColor}/>
      </form>
      <Hex2rgb color={state}/>
    </>
  )
}

export default App
