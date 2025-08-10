import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Airdrop from './components/Airdrop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-600'>
       <Airdrop />
    </div>
  )
}

export default App
