//
// Convert date format from Date object to "YYYY-MM-DD" format
//
export const formatDateToMiddleDash = (date: Date) => {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}
//
// Convert date from slash format "DD/MM/YYYY" to middledash format "YYYY-MM-DD"
//
export const formatDateSlashToMiddleDash = (date: string) => {
  const parts = date.split('/')
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`
  return formattedDate
}
//
// Convert time format from "HH:MM:SS" to "HH:MM" in 24 hour format
//
export const formatTime = (time: string) => {
  const parsedTime = new Date(`2000-01-01T${time}`)
  const formattedTime = parsedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
  return formattedTime
}
//
// Convert number to currency (100 to $100.00)
//
export const formatNumberToCurrency = (cash: Number) => {
  const currency = cash.toLocaleString('en', { style: 'currency', currency: 'USD' })
  return currency
}
