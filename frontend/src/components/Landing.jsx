import React from 'react'
import './button.css'
import Button from './Button'

const Landing = () => {
  return (
    <div>
      <button className='button z-50 rounded-full text-lg absolute top-4 right-9 animate-fade-up '>Sign in</button>
      <h1 className='lg:text-8xl text-5xl md:text-6xl text-center animate-fade-up font-bold mt-60 text-white'>Sudoku Wizard</h1>
      <div className='flex justify-center flex-col sm:flex-row  mt-36 gap-12 animate-fade-up'>
      <Button text='Solve' />
      <Button text='Play' />
      </div>
    </div>
  )
}

export default Landing