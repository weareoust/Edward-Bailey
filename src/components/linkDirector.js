import React from "react"

export default function LinkDirector(props) {
  const link = props.link
  const contentfulType = link.__typename
  let dest
  let additional

  function removeNonWord(str) {
    return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "")
  }
  function upperCase(str) {
    return str.toUpperCase()
  }
  function lowerCase(str) {
    return str.toLowerCase()
  }
  function camelCase(str) {
    str = removeNonWord(str)
      .replace(/\-/g, " ") //convert all hyphens to spaces
      .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
      .replace(/\s+/g, "") //remove spaces
      .replace(/^[A-Z]/g, lowerCase) //convert first char to lowercase
    return str
  }

  if (contentfulType === "ContentfulMailToLink") {
    dest = `mailto:${link.emailAddress}?subject=${
      link.subjectLine ? encodeURIComponent(link.subjectLine.trim()) : ""
    }&body=${
      link.bodyCopy ? encodeURIComponent(link.bodyCopy.bodyCopy.trim()) : ""
    }`
  } else if (contentfulType === "ContentfulAnchorLink") {
    dest = `#${camelCase(link.destinationSection)}`
  } else {
    dest = link.destinationUrl
    additional = { target: "_blank", rel: "noopener noreferrer" }
  }

  return (
    <a
      href={dest}
      className={props.className}
      style={{ ...props.style }}
      onClick={props.onClick}
      {...additional}
    >
      {props.children}
      {props.link.displayText}
    </a>
  )
}
