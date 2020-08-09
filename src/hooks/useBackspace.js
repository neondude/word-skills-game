import { useState, useEffect } from 'react'

const useBackspace = () => {
  const [pressedKey, setPressedKey] = useState()

  useEffect(() => {
    const handleBackspace = (e) => {
      if (e.keyCode == 8) {
        setPressedKey(e.keyCode)
      }
    }
    document.addEventListener('keyup', handleBackspace)

    return () => {
      document.removeEventListener('keyup', handleBackspace)
    }
  }, [])

  return pressedKey
}

export { useAlphaKeyUp as default }
