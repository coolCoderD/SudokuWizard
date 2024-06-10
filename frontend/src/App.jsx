import React , { useState } from 'react'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import { RecoilRoot } from 'recoil'


function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
    <>
    <div className='px-32 py-2 font-mono'>
      <Navbar />
      <Grid/>
    </div>
    </>
    </RecoilRoot>
  )
}

export default App
