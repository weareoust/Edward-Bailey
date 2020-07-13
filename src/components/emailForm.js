import React, { useState } from "react"
import TextInput from "./textInput"
import arrow from "../images/arrow.svg"

export default function EmailForm() {
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const [submission, setSubmission] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setSubmission({ ...submission, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...submission,
      }),
    })
      .then(() => setSubmitted(true))
      .catch(error => alert(error))
    e.preventDefault()
  }

  if (submitted === false) {
    return (
      <form
        name="subscribeForm"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        id="subscribe-form"
        className="flex"
      >
        <input type="hidden" name="form-name" value="subscribeForm" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <TextInput change={handleChange} name={"email"} type="email" />
        <button className="font-display uppercase bg-secondary text-white inline-block py-2 px-12">
          <img
            src={arrow}
            alt="Edward Bailey"
            className="h-8 m-0"
            style={{ filter: "invert(1)" }}
          />
        </button>
      </form>
    )
  } else {
    return <h3>Thanks!</h3>
  }
}
