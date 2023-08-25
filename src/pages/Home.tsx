import React, { useState } from 'react'
import SSRPost from '../components/SSRPost'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <h1 className="title">Home Page</h1>
        <h1 className="text-blue-300">Count : {count}</h1>
        <div>
          <button
            className="mr-12"
            onClick={() => {
              console.log('Incrementing count')
              setCount((prev) => ++prev)
            }}
          >
            Increment
          </button>
          <button
            className="mr-12"
            onClick={() => {
              console.log('Decrement count')
              setCount((prev) => --prev)
            }}
          >
            Decrement
          </button>
        </div>
      </div>
      <section>
        <h1 className="text-3xl">Server Side Rendering!</h1>
        <SSRPost />
      </section>
    </>
  )
}
