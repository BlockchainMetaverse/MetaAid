export const header = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
}

export const sleep = (ms: number): Promise<() => void> =>
  new Promise((resolve) => setTimeout(resolve, ms))
