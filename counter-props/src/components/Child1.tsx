import Child2 from "./Child2";

export default function Child1({count,handleStop}:{count:number,handleStop:()=>void}) {
  return (
    <div>
      {count}
      <Child2 handleStop={handleStop}/>
    </div>
  )
}
