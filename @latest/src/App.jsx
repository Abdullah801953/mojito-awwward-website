import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger,SplitText} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <div className='flex-center text-4xl text-amber-300 h-screen'>App</div>
  )
}

export default App