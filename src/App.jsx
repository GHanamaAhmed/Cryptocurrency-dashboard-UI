import { useState } from 'react'
import Menus from "./menu"
import Section from './section/section'
import Section1 from './section1/section1'
function App() {

  return (
    <div className='grid grid-cols-12 h-screen w-full pt-7'>
      <Menus />
      <Section/>
      <Section1/>
    </div>
  )
}

export default App
