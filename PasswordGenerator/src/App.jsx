import { useState ,useCallback,useEffect,useRef} from 'react'



function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")

  //useRef is used to take a refrence in react
  const passwordRef=useRef(null)


  //useCallback hook is used fro optimatization or to store the dependenciesin cache
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMONQRSTUVWXYabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed) {
      str+="!@#$%&*_"
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)

    }

     setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  //useEffect is used to render whole code in it if any change occur in dependency
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-white text-center'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      
      <input
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      ref={passwordRef}
      readOnly/>

      <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-2 py-0.5 shrink-0'>COPY</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input
        type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label>length: {length}</label>
      </div>
      <div className='flex item-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }}/>
        <label htmlFor='numberInput'>Numbers</label>
      </div>
      <div className='flex item-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked={charAllowed}
        id='charInput'
        onChange={()=>{
          setCharAllowed((prev)=>!prev);
        }}/>
        <label htmlFor='charInput'>Characters</label>
      </div>
    </div>
    </div>

    
    </>
  )
}

export default App
