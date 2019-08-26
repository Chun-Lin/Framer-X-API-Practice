import React, { useState } from 'react'
import { Frame, useAnimation } from 'framer'
import './App.css'

const DraggableSquare = () => {
  return (
    <Frame
      drag="x"
      dragConstraints={{ left: -200, right: 100 }}
      dragElastic={1}
      center
    />
  )
}

export default DraggableSquare
