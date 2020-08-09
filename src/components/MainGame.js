import React, { useState, useEffect, useReducer, useContext } from 'react'
import GameController from '../components/GameController'
import LetterDisplay from '../components/LetterDisplay'
import UserInputDisplay from '../components/UserInputDisplay'
import WordListDisplay from '../components/WordListDisplay'
import { getWordData } from '../utils/WordData'
import lettersReducer from '../reducers/letters'
import wordListReducer from '../reducers/wordList'
import GameContext from '../context/GameContext'
import { Flex, Box, Card, Image, Heading, Link, Text } from 'rebass'


const MainGame = () => {
  const [letterDisplay, dispatchDisplay] = useReducer(
    lettersReducer,
    {letters: [], userInput: ''}
  )
  const [wordList, dispatchWordList] = useReducer(wordListReducer,{found:[], notfound:[]})

  useEffect(() => {
    let wordData = getWordData()
    console.log('worddata', wordData)

    dispatchDisplay({
      type: 'LOAD_WORD',
      letters: wordData.word
    })

    dispatchWordList({
      type:'LOAD_LIST',
      notfound: wordData.subset
    })

  }, [])
  return (
    <>
      <GameContext.Provider
        value={{
          letterDisplay,
          dispatchDisplay,
          wordList,
          dispatchWordList,
        }}
      >
        <Flex mx={2}>
          <Box width={1 / 2} px={2}>
            <WordListDisplay title="Words Not Found" words={wordList.notfound} redact={true} />
          </Box>
          <Box my="auto" width={1} px={2}>
            <GameController />
            <LetterDisplay />
            <UserInputDisplay />
          </Box>
          <Box width={1 / 2} px={2}>
            <WordListDisplay title="Words Found" words={wordList.found} redact={false} />
          </Box>
        </Flex>
      </GameContext.Provider>
    </>
  )
}

export {MainGame as default}