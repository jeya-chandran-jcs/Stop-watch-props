import { useState,useRef } from 'react'
import './App.css'
import Parent from './components/Parent'

function App() {
    const [count,setCount]=useState<number>(0)
    const intervalRef=useRef<number | null>(null)

    const handleRun=()=>{
      if(intervalRef.current) return
      intervalRef.current=window.setInterval(()=>{
        setCount(prev=>prev+1)
      },1000)
    }
      

      const handleStop=()=>{
        if(intervalRef.current)
        {
          clearInterval(intervalRef.current)
          intervalRef.current=null
        }
    }
  return (
   <>
    <Parent count={count} handleRun={handleRun} handleStop={handleStop}/>
   </>
  )
}


export default App
