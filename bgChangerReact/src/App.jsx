import { useState } from "react"

function App() {
  const [color,setColor]=useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}></div>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1 rounded-3xl">
        <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
        <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}onClick={()=>{setColor("green")}}>Green</button>
        <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}onClick={()=>{setColor("blue")}}>Blue</button>
        <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}onClick={()=>{setColor("purple")}}>Purple</button>
      </div>
    </div>
    </>
  )
}

export default App
