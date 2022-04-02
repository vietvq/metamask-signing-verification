export function personalSign(from: string, hexMsg: string, provider: any) {
  return new Promise((resolve, reject) => {
    provider.sendAsync(
      {
        method: 'personal_sign',
        params: [hexMsg, from],
        from,
      },
      (err: any, result: any) => {
        const e = err || (result && result.error)
        if (e) {
          reject(e)
        } else {
          resolve(result)
        }
      },
    )
  })
}

export function signTypedData(from: string, data: any, provider: any) {
    const params = [from, JSON.stringify(data)]
    const method = 'eth_signTypedData_v3'
  
    // promise
    return new Promise((resolve, reject) => {
      provider.sendAsync(
        {
          method,
          params,
          from,
        },
        (err: any, result: any) => {
          const e = err || (result && result.error)
          if (e) {
            reject(e)
          } else {
            resolve(result)
          }
        },
      )
    })
  }
