class D2UtilsError extends Error {
  constructor(message) {
    super(message)
    this.name = 'Error From D2Framework'
  }
}

export function throwError (scope, message) {
  throw new D2UtilsError(`[${scope}] ${message}`)
}

export function warn(scope, message) {
  console.warn(new D2UtilsError(`[${scope}] ${message}`))
}
