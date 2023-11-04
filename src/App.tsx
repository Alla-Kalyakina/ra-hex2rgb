import { useState, useRef } from 'react'
import Hex2rgb from './components/Hex2rgb'
import './App.css'

function App() {
  const [state, setState] = useState<string>('')
  const currentColor = useRef(state)
  
  const inputChangeColor = () => {
    setState(currentColor.current.value)
    /*const hexColorCheck = /#([a-f0-9]{6}|[a-f0-9]{3})\b/gi;
    if(state.match(hexColorCheck)) {
      setState(currentColor.current.value)
    }*/
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
