import CryptoJS from 'crypto-js'

export const encrypt = (value, secretKey = process.env.NEXT_PUBLIC_SECRET_KEY) => {
  return CryptoJS.AES.encrypt(value, secretKey).toString()
}

export const decrypt = (ciphertext, secretKey = process.env.NEXT_PUBLIC_SECRET_KEY) => {
  ciphertext = ciphertext == null ? '' : ciphertext
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey)
  return bytes.toString(CryptoJS.enc.Utf8)
}
