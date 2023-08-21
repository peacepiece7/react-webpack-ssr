// * 서버 컴포넌트로 사용한다면 useEffect, useState 등을 사용하면 self is not defined 에러가 발생한다.
import React from 'react'
import { useTestData } from '../context/ssr'

type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export default function Post() {
  const data = useTestData()
  console.log('DATA : ', data)
  if (data.isServer) {
  }

  return (
    <div>
      <h2>POST!</h2>
      <h3>{data.title}</h3>
      <div>{data.body}</div>
    </div>
  )
}
