import { readFileSync } from 'fs'
import { NextFunction } from 'express'
import { API_DELAY } from '../constants'

export function handleErrors(fn: (req: Request, res: Response) => Promise<unknown>) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      return await fn(req, res)
    } catch (x) {
      next(x)
    }
  }
}

export async function waitForWebpack(buildFilePath: string) {
  while (true) {
    try {
      readFileSync(buildFilePath)
      return
    } catch (err) {
      console.log('Could not find webpack build output. Will retry in a second...')
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }
}

// Simulate a delay caused by data fetching.
// We fake this because the streaming HTML renderer
// ! is not yet integrated with real data fetching strategies. <== 부분 적용이면 직접 구현 해볼 순 없을까..? Next 13.4도 있는데..?
export function createServerData() {
  let done = false
  let promise: Promise<unknown> | null = null
  return {
    read() {
      if (done) return
      if (promise) throw promise
      promise = new Promise((resolve) => {
        setTimeout(() => {
          done = true
          promise = null
          resolve('')
        }, API_DELAY)
      })
      throw promise
    },
  }
}

export function wrapPromise(promise: Promise<unknown>) {
  let status: 'success' | 'pending' | 'error' = 'pending'
  let response: unknown

  const suspender = promise.then(
    (res) => {
      console.log('Suspender Success :')
      status = 'success'
      response = res
    },
    // rejected case
    (err) => {
      console.log('Suspender Rejected :')
      status = 'error'
      response = err
    },
  )

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return { read }
}

/**
 *
 * @description ref suspender 만들 때 참고하기 위한 코드
 * @example
 * initialStatePromiseRef.current.promise.resolve(initialData);
 * <Component initialData={initialStatePromiseRef.current.promise} />
 * @reference https://codesandbox.io/s/excalidraw-ehlz3?file=/src/App.tsx
 */
export const resolvablePromise = () => {
  let resolve!: any
  let reject!: any
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })
  ;(promise as any).resolve = resolve
  ;(promise as any).reject = reject
  return promise
}
