import React, { createContext, useContext } from 'react'

const SSRContext = createContext(null)

export function SSRProvider({ children, data }) {
  return <SSRContext.Provider value={data}>{children}</SSRContext.Provider>
}

const fakeData = {
  id: 1,
  userId: 2,
  title: 'Fake data',
  body: 'the lazy fox jumps over the brown quick dog',
}

export function useTestData() {
  const ctx = useContext(SSRContext)
  if (ctx !== null) {
    return ctx.data.read()
  }
  return fakeData
}
