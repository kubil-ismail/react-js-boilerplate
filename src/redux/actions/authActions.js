export const login = (request = null) => {
  return {
    type: 'LOGIN',
    payload: request,
  }
}
