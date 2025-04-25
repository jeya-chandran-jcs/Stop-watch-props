interface ChildProps{
    handleStop:()=>void
}



export default function Child2({handleStop}:ChildProps) {
  return (
    <div>
        <button onClick={handleStop}>
            stop
        </button>
    </div>
  )
}
