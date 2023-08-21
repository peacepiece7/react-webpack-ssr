import React, { Suspense, lazy } from 'react'
import SideBar from './components/SideBar'
import Post from './components/Post'
import Odd from './components/Odd'

export default function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <div className="flex">
        {/* <Suspense fallback={<div className="text-3xl text-rose-500">사이드바 데이터를 가져오고 있는 중입니다...</div>}> */}
        <SideBar />
        {/* </Suspense> */}
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
        <h1 className="text-3xl">POST</h1>
        <Suspense fallback={<div className="text-3xl text-rose-500">포스트 데이터를 가져오고 있는 중입니다...</div>}>
          <Post />
        </Suspense>
        <Suspense fallback={<div className="text-3xl text-rose-500">이상한 데이터를 가져오고 있는 중입니다...</div>}>
          <Odd></Odd>
        </Suspense>
      </section>
    </div>
  )
}
