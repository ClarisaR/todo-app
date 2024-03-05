import React, { useState } from 'react'
import sun from '../assets/images/icon-sun.svg'
import moon from '../assets/images/icon-moon.svg'

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(true)
  function handleChangeMode() {
    document.documentElement.classList = darkTheme ? 'light' : 'dark'
    setDarkTheme(!darkTheme)
  }
  return (
    <div className='flex justify-between items-center mb-6'>
      <h1 className="text-3xl font-bold tracking-[0.3em]">TODO</h1>
      <img src={darkTheme ? sun : moon} alt="mode" onClick={handleChangeMode} />
    </div>
  )
}
