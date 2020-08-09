import React, { useState, useEffect, useReducer, useContext } from 'react'
import useAlphaKeyUp from '../hooks/useAlphaKeyUp'
import useBackspaceKeyUp from '../hooks/useBackspaceKeyUp'
import useEnterKeyUp from '../hooks/useEnterKeyUp'
import {getWordData} from '../utils/WordData'
import lettersReducer from '../reducers/letters'
import LettersContext from '../context/LettersContext'

const LetterDisplay = () => {
  const { letterDisplay } = useContext(LettersContext)
  return <div>{letterDisplay.letters.join()}</div>
}

const UserInputDisplay = () => {
  const { letterDisplay } = useContext(LettersContext)
  
  return (
    <div>{letterDisplay.userInput}</div>
  )
}


const GameController = ({wordSet}) => {
  const pressedKey = useAlphaKeyUp()
  const pressedBackspace = useBackspaceKeyUp()
  const pressedEnter = useEnterKeyUp()
  const [score, setScore] = useState(0)
  const { letterDisplay, dispatchDisplay } = useContext(LettersContext)

  const submitWord = (userWord) => {
    console.log('submit word', wordSet, userWord, wordSet[userWord])
    
    // is len atleast 3
    if(userWord.length  < 3) {
      return false
    }

    // is word in word list
    if(wordSet[userWord] == undefined)
    {
      return false
    }

    // is word already found
    // 
    return true
  }

  useEffect(() => {
    dispatchDisplay({
      type: 'REMOVE_LETTER',
      letter: pressedBackspace
    })
  }, [pressedBackspace])

  useEffect(() => {
    if(submitWord(letterDisplay.userInput))
    {
      dispatchDisplay({
        type: 'RESET',
        letter: pressedEnter
      })
    }
  }, [pressedEnter])

  useEffect(() => {

    dispatchDisplay({
      type: 'ADD_LETTER',
      letter: pressedKey.key,
    })

  },[pressedKey])

  return (
    <div>
      {pressedKey.code != undefined && <div>{pressedKey.code}</div>}
      <LetterDisplay />
      <UserInputDisplay />
    </div>
  )
}

const WordSkillsApp = () => {
  const wordData = getWordData()
  const [letterDisplay, dispatchDisplay] = useReducer(lettersReducer, {}, ()=> ({
      letters: wordData.word,
      userInput: '',
    }))


  return (
    <LettersContext.Provider value={{ letterDisplay, dispatchDisplay }}>
      <h1>Title</h1>
      <GameController wordSet={wordData.subset}/>
      
    </LettersContext.Provider>
  )
}

export { WordSkillsApp as default }