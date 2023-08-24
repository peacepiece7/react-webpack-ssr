import React, { useState } from 'react'
import SSRPost from '../components/SSRPost'
import { HOME_API_KEY } from '../../constants'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <h1>Home Page</h1>
        <h1 className="text-sky-900">Count : {count}</h1>
        <div>
          <button className="mr-4" onClick={() => setCount((prev) => ++prev)}>
            Increment
          </button>
          <button className="mr-4" onClick={() => setCount((prev) => --prev)}>
            Decrement
          </button>
        </div>
      </div>
      <section>
        <h1 className="text-3xl">Server Side Rendering!</h1>
        <SSRPost key={HOME_API_KEY} />
      </section>
      <section>
        <h1 className="text-3xl">Server Component</h1>
      </section>
    </>
  )
}
