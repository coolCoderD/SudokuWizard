import React , { useState } from 'react'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import { RecoilRoot } from 'recoil'
import Home from './page/Home/Home'
import { Route,Routes } from 'react-router-dom'
import './components/button.css'





function App() {
  const [count, setCount] = useState(0)
  return (
    <RecoilRoot>
    <>

    <div className='px-32 py-2 font-mono h-[50vh] bg-gradient-to-tr from-shakespeare-500 to-shakespeare-900  '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/solve' element={<Grid/>}/>
      </Routes>
    </div>
    </>
    </RecoilRoot>
  )
}

export default App
