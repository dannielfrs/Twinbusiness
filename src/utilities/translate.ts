export const translateMsgError = (msg: string) => {
  if (msg.toLowerCase() === 'password') return 'Contraseña'
  return msg
}
