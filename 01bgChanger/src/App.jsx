import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
      <div className='h-screen w-full flex justify-center'  style={{backgroundColor: color}}>
        <div className='flex flex-wrap gap-10 w-200 justify-center items-center p-4 bg-white rounded-lg fixed bottom-10 '>
          
            <button onClick={ () => setColor("red")} className='py-2 px-4 bg-white rounded-lg text-white ' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={ () => setColor("green")} className='py-2 px-4 bg-white rounded-lg text-white '  style={{backgroundColor: "green"}}>Green</button>
            <button onClick={ () => setColor("black")} className='py-2 px-4 bg-white rounded-lg text-white '  style={{backgroundColor: "black"}}>Black</button>
            <button onClick={ () => setColor("gray")} className='py-2 px-4 bg-white rounded-lg text-white '  style={{backgroundColor: "gray"}}>Gray</button>
          
        </div>
      </div>
    </>
  )
}

export default App
