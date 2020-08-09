import { useState, useEffect } from 'react'

const useBackspaceKeyUp = () => {
  const [pressedKey, setPressedKey] = useState(undefined)

  useEffect(() => {
    const handleBackspace = (e) => {
      if (e.keyCode == 8) {
        setPressedKey({ code: e.code, key: e.key })
      }
    }
    document.addEventListener('keyup', handleBackspace)

    return () => {
      document.removeEventListener('keyup', handleBackspace)
    }
  }, [])

  return pressedKey
}

export { useBackspaceKeyUp as default }
