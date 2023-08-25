import React, { useContext } from 'react'
import { ServerSideContext } from '../context/ssr'
import { HOME_RPOMISE_API_KEY } from '../../constants'

const dummyData = {
  title: 'dummy data',
  body: 'the lazy fox jumps over the brown quick dog',
}

type PostPromise = {
  read: () => unknown
}

export default function useServerSide() {
  const ctx = useContext(ServerSideContext)
  const serverData = ctx[HOME_RPOMISE_API_KEY] as PostPromise
  if (typeof window === 'undefined') {
    return serverData?.read()
  }
  return dummyData
}
