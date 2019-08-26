import React, { useState } from 'react'
import { Frame, useAnimation } from 'framer'
import './App.css'

const RotatingSquare = () => {
  const [value, setValue] = useState(0)
  const cardAnimation = useAnimation()

  return (
    <Frame
      animate={cardAnimation}
      onTap={() => {
        setValue(value + 1)
        cardAnimation.start({
          rotate: value * 40,
        })
      }}
      center
    />
  )
}

export default RotatingSquare
