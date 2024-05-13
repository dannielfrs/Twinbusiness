import { useEffect, useState } from 'react'

export default function useWindowSize () {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return windowSize
}
