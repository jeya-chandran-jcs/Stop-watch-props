import Child1 from "./Child1";

interface Props{
    count:number,
    handleRun:()=> void,
    handleStop:()=> void
}

export default function Parent({count,handleRun,handleStop}:Props) {
 
 
    return (
    <div>
        <button onClick={handleRun}>Run</button>
        <Child1 count={count} handleStop={handleStop}/>
    </div>
  )
}
