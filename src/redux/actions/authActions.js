export const login = (request) => {
  return {
    type: 'LOGIN',
    payload: request,
  }
}
