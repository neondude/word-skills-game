import { useState, useEffect } from 'react'

const useEnterKeyUp = () => {
  const [pressedKey, setPressedKey] = useState(undefined)

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.keyCode == 13) {
        setPressedKey({ code: e.code, key: e.key })
      }
    }
    document.addEventListener('keyup', handleEnter)

    return () => {
      document.removeEventListener('keyup', handleEnter)
    }
  }, [])

  return pressedKey
}

export { useEnterKeyUp as default }
