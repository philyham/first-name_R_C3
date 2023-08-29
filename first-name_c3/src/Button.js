import React from 'react'
import './index.css'

const Button = (props) => {
  return (
    <>
      <button className={props.className}>{props.label}</button>
    </>
  )
}

export default Button