export const cleanFormData = (formData: FormData) => {
  const cleanedFormData = Object.fromEntries(
    Object.entries(formData).filter(([key, value]) => value !== '' && value !== null)
  )
  return cleanedFormData
}

export const downloadFile = (url: string, type: string = 'application/xml', fileName: string) => {
  const blob = new Blob([url], { type })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = fileName
  link.click()
}
