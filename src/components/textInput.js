import React, { useState } from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"

export default function TextInput(props) {
  const [filled, setFilled] = useState(false)
  return (
    <div className="border-white border uppercase font-sans relative">
      <label
        htmlFor={props.name}
        css={css`
          ${tw`absolute left-0 inset-y-0 p-4 uppercase`}
          transition: transform 0.3s ease;
          transform: ${filled
            ? `scale(0.7) translate(-0.7rem, -1.2rem)`
            : "none"};
        `}
      >
        {props.name}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="w-full bg-transparent text-white p-4 pt-6 pb-2"
        onFocus={() => setFilled(true)}
        onChange={props.change}
      />
    </div>
  )
}
