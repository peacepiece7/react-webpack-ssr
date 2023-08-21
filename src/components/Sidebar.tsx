import React from 'react'

export default function Sidebar() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <h2>SIDE BAR! : {count}</h2>
      <div>
        <button className="mr-4" onClick={() => setCount((prev) => ++prev)}>
          Increment
        </button>
        <button className="mr-4" onClick={() => setCount((prev) => --prev)}>
          Decrement
        </button>
      </div>
    </div>
  )
}
