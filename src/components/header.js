import { Link } from "gatsby"
import React, { useState } from "react"
import {useSpring, animated} from 'react-spring'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const animation = useSpring({
    transform: navOpen ? 'translateX(0)' : 'translateX(-100%)',
    x: navOpen ? 100 : 0,
    from: { x: 0 }
  })

  return (
    <>
      <header className="flex w-full justify-between items-center p-4 z-20 fixed">
        <Link to="/"><h2 className="font-display uppercase">s.o.s.</h2></Link>
        <button onClick={() => setNavOpen(!navOpen)}>
          <animated.svg viewBox="0 0 20 20" className="w-8">
            <animated.path d="M0 5 H20"
              stroke="black"
              strokeDashoffset={
                animation.x.interpolate({
                  range: [0, 100], 
                  output: [0, 100,]
                })
              }
              strokeDasharray="100"
            />
            <animated.path d="M0 10 H20" 
              stroke="black" 
              strokeDashoffset={
                animation.x.interpolate({
                  range: [0, 100], 
                  output: [0, -100]
                })
              }
              strokeDasharray="100"
            />
            <animated.path 
              d="M0 15 H20"
              stroke="black"
              strokeDashoffset={
                animation.x.interpolate({
                  range: [0, 100], 
                  output: [0, 100]
                })
              }
              strokeDasharray="100"
            />
            <animated.path 
              d="M0 0 L20 20"
              stroke="black"
              strokeDashoffset={
                animation.x.interpolate({
                  range: [0, 100], 
                  output: [100, 0]
                })
              }
              strokeDasharray="100"
            />
            <animated.path 
              d="M20 0 L0 20"
              stroke="black"
              strokeDashoffset={
                animation.x.interpolate({
                  range: [0, 100], 
                  output: [100, 0]
                })
              }
              strokeDasharray="100"
            />
          </animated.svg>
        </button>
      </header>
      <animated.nav style={animation} className="font-display uppercase fixed bg-primary inset-0 flex flex-col items-center justify-center z-10">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </animated.nav>
    </>
  )
}

export default Header
