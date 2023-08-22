// * 서버 컴포넌트로 사용한다면 useEffect, useState 등을 사용하면 self is not defined 에러가 발생한다.
import React from 'react'
import useServerSide from '../hooks/serverSide'

type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export default function Post() {
  const data: {
    title: string
    body: string
    isServer?: boolean
  } = useServerSide()

  return (
    <div>
      <h2>{data.title}</h2>
      <div>{data.body}</div>
    </div>
  )
}
