import React, { useEffect, useState, useContext } from 'react'
import { ServerSideContext } from '../context/ssr'

import htmlEntitiesDecoder from 'html-entities-decoder'

export default function useServerSideProps(key: string) {
  const ctx = useContext(ServerSideContext)
  // * This scope is only for server side rendering
  if (typeof window === 'undefined') {
    return JSON.parse((ctx[key] as string) || '{}')
  }
  const serverSideData = document.getElementById('__SERVER_DATA__')?.textContent || '{}'

  // ! 파싱을 두 번 해야합니다!
  const data = JSON.parse(htmlEntitiesDecoder(serverSideData))
  return JSON.parse(data[key]) || ''
}
