import { useState,useCallback,useEffect, useRef } from 'react'
import './App.css'

function App() {
  // useState
  const [length, setLength]= useState(8)
  const [char , setChar]= useState(false)
  const[num, setNum]=useState(false)
  const[pass,setPass]=useState("")

  const passRef=useRef()



// useCallback
// const passGenerator= useCallback(fn , [ dependencies in array ])
const passGenerator= useCallback( ()=>{
  let password=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(char) str+="!@#$%^&*(){}/><"
  if(num) str+="0123456789"

  for (let i = 0; i <= length; i++) {
    let set=Math.floor(Math.random()*str.length+1)
    password+=str.charAt(set)
  }
setPass(password)
}, 
  [length,char,num,setPass])

// Copy Password to clipboard
const copyPassClip=useCallback(()=>{
  passRef.current?.select()
window.navigator.clipboard.writeText(pass)
}, [pass])

useEffect(()=>{
  passGenerator()
},[char,num,length,passGenerator])


  return (
    <>
    
      <div className='flex justify-center items-center h-screen w-full '>
        <div className='w-250 h-150 rounded-lg flex flex-col justify-center items-center container'> 
        <h1 className='text-2xl py-4 '>Password Generator</h1>
        <div className=''>
          <input 
          type="text"
          ref={passRef}
          value={pass}
          placeholder='Password'
          readOnly
           className='outline-none border-2 py-2 px-2 rounded-lg' />
           <button onClick={copyPassClip} type="button" className='button cursor-pointer bg-blue-700 border-2  py-2 px-3 rounded-lg border-none mx-2'>Copy</button>
        </div>
        <div className='py-4 flex gap-4'>
           <label htmlFor="length">Length: {length}</label>
          <input type="range" 
          min={6}
          max={20}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          className='cursor-pointer px-2 py-2'
          id='length'
          />
         
        </div>
        <div className='py-2 flex gap-2'>
          
          <input type="checkbox" id='char'  className='cursor-pointer '
          defaultChecked={char}
          onChange={()=>{
            setChar((prev) => !prev)
          }}
          />
          <label htmlFor="char">Add Character</label>    
          <input type="checkbox" name="num" id="num" className='cursor-pointer '
          defaultChecked={num}
          onChange={()=>{
            setNum((prev)=> !prev)
          }}
          />
          <label htmlFor="num">Add Number</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
