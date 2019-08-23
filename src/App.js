import React from 'react'
import { Frame, useCycle } from 'framer'
import './App.css'

function App() {
  const [left, setLeft] = useCycle(0, 50)
  const tapHandler = () => {
    setLeft()
  }

  return (
    <Frame width="100%" height="100%" background="transparent">
      <Frame
        width={100}
        height={50}
        background="#ddd"
        borderRadius={25}
        center
        onTap={tapHandler}
      >
        <Frame
          width={50}
          height={50}
          background="skyblue"
          borderRadius={25}
          animate={{ left: left }}
          transition={{ duration: 0.5 }}
        />
      </Frame>
    </Frame>
  )
}

export default App
