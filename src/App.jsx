import { useState } from 'react'
import './App.css'
function App() {
  const [bg, setBg] = useState("")
return (
    <>
      <div className='w-full h-screen duration-300'
        style={{ backgroundColor: bg }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl'>
            <button onClick={() => setBg("#8B5CF6")} className='outline-none px-4 bg-violet-500 rounded-full text-white'>Violet</button>
            <button onClick={() => setBg("#3f51b5")} className='outline-none px-4 bg-indigo-500 rounded-full text-white'>Indigo</button>
            <button onClick={() => setBg("#2196f3")} className='outline-none px-4 bg-blue-500 rounded-full text-white'>Blue</button>
            <button onClick={() => setBg("#4caf50")} className='outline-none px-4 bg-green-500 rounded-full text-white'>Green</button>
            <button onClick={() => setBg("#ffeb3b")} className='outline-none px-4 bg-yellow-500 rounded-full text-white'>Yellow</button>
            <button onClick={() => setBg("#ff9800")} className='outline-none px-4 bg-orange-500 rounded-full text-white'>Orange</button>
            <button onClick={() => setBg("#a855f7")} className='outline-none px-4 bg-purple-500 rounded-full text-white'>Purple</button>
            <button onClick={() => setBg("#14b8a6")} className='outline-none px-4 bg-teal-500 rounded-full text-white'>Teal</button>
            <button onClick={() => setBg("#84cc16")} className='outline-none px-4 bg-lime-500 rounded-full text-white'>Lime</button>
            <button onClick={() => setBg("#f44336")} className='outline-none px-4 bg-red-500 rounded-full text-white'>Red</button>
            <button onClick={() => setBg("")} className='outline-none px-4 bg-white-500 rounded-full border-solid'>Reset color</button>
            
          </div>
        </div>
      </div>
      <h1> Jatin </h1>
    </>
  )
}

export default App
