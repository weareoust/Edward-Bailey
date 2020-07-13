import { Link } from "gatsby"
import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

import Navigation from "./navigation"

import logo from "../images/logo.svg"

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const animation = useSpring({
    transform: navOpen ? "translateX(0)" : "translateX(-100%)",
    x: navOpen ? 100 : 0,
    from: { x: 0 },
  })

  return (
    <>
      <header className="flex w-full justify-between items-center z-30 fixed">
        <div
          className="border-2 border-black w-full mx-2 mt-2 p-4 flex justify-between items-center bg-white"
          css={css`
            &::before {
              content: "";
              width: 2px;
              ${tw`block h-screen bg-black fixed top-0 left-0 m-2`}
            }

            &::after {
              content: "";
              width: 2px;
              ${tw`block h-screen bg-black fixed top-0 right-0 m-2`}
            }
          `}
        >
          <Link to="/" className="block mr-6">
            <img src={logo} alt="Edward Bailey" className="mb-0" />
          </Link>
          <Navigation
            css={css`
              ${tw`xl:flex mb-0 hidden`}
              a {
                ${tw`ml-6 mb-0`}
              }
            `}
          />
          <button onClick={() => setNavOpen(!navOpen)} className="xl:hidden">
            <animated.svg viewBox="0 0 20 20" className="w-8">
              <animated.path
                d="M0 5 H20"
                stroke="black"
                strokeDashoffset={animation.x.interpolate({
                  range: [0, 100],
                  output: [0, 100],
                })}
                strokeDasharray="100"
              />
              <animated.path
                d="M0 10 H20"
                stroke="black"
                strokeDashoffset={animation.x.interpolate({
                  range: [0, 100],
                  output: [0, -100],
                })}
                strokeDasharray="100"
              />
              <animated.path
                d="M0 15 H20"
                stroke="black"
                strokeDashoffset={animation.x.interpolate({
                  range: [0, 100],
                  output: [0, 100],
                })}
                strokeDasharray="100"
              />
              <animated.path
                d="M0 0 L20 20"
                stroke="black"
                strokeDashoffset={animation.x.interpolate({
                  range: [0, 100],
                  output: [100, 0],
                })}
                strokeDasharray="100"
              />
              <animated.path
                d="M20 0 L0 20"
                stroke="black"
                strokeDashoffset={animation.x.interpolate({
                  range: [0, 100],
                  output: [100, 0],
                })}
                strokeDasharray="100"
              />
            </animated.svg>
          </button>
        </div>
      </header>
      <animated.nav
        style={animation}
        className="font-display uppercase fixed bg-primary inset-0 flex flex-col items-center justify-center z-20 xl:hidden"
      >
        <Navigation
          click={() => setNavOpen(!navOpen)}
          css={css`
            ${tw`mx-8`}
            a {
              ${tw`text-4xl mb-8 leading-tight flex items-center`}
            }
          `}
        />
      </animated.nav>
    </>
  )
}

export default Header
