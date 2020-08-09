import { useState, useEffect } from 'react'

const useAlphaKeyUp = () => {
  const [pressedKey, setPressedKey] = useState({code:undefined, key:undefined})

  useEffect(() => {
    const handleAlphaKeyUp = (e) => {
      if ((e.keyCode > 64 && e.keyCode < 91) || e.keyCode == 8 || e.keyCode == 13) {
        setPressedKey({code:e.code, key:e.key})
      }
    }
    document.addEventListener('keyup', handleAlphaKeyUp)

    return () => {
      document.removeEventListener('keyup', handleAlphaKeyUp)
    }
  }, [])

  return pressedKey
}

export { useAlphaKeyUp as default }
