import React, { useState } from 'react'

function index() {
  const [buttons, setButtons] = useState(0)

  const cases = () => {
    const result = Math.floor(Math.random() * 100000)
    setButtons(result)
  }
  return (
    <div>
      {buttons}
      <button onClick={cases}>클릭</button>
    </div>
  )
}

export default index