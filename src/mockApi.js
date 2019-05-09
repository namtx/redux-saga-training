const delay = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve(), ms)
  })
}

export const loginApi = async ({ username, password }) => {
  await delay(1000)
  // mock delays
  if (username === "namtx" && password === "Aa@123456") {
    return {
      username
    }
  } else {
    throw new Error('Invalid login')
  }
}
