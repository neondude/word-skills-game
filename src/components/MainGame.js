import React, { useState, useEffect, useReducer, useContext } from 'react'
import GameController from '../components/GameController'
import LetterDisplay from '../components/LetterDisplay'
import UserInputDisplay from '../components/UserInputDisplay'
import useAlphaKeyUp from '../hooks/useAlphaKeyUp'
import useBackspaceKeyUp from '../hooks/useBackspaceKeyUp'
import useEnterKeyUp from '../hooks/useEnterKeyUp'
import { getWordData } from '../utils/WordData'
import lettersReducer from '../reducers/letters'
import LettersContext from '../context/LettersContext'
import { Flex, Box, Card, Image, Heading, Link, Text } from 'rebass'


const MainGame = () => {
  const wordData = getWordData()
  const [letterDisplay, dispatchDisplay] = useReducer(
    lettersReducer,
    {},
    () => ({
      letters: wordData.word,
      userInput: '',
    })
  )
  return (
    <>
      <Flex mx={2}>
        <Box width={1 / 2} px={2}>
        </Box>
        <Box my='auto' width={1} px={2}>
          <LettersContext.Provider value={{ letterDisplay, dispatchDisplay }}>
            <GameController wordSet={wordData.subset} />
            <LetterDisplay/>
            <UserInputDisplay/>
          </LettersContext.Provider>
        </Box>
        <Box width={1 / 2} px={2}>
        </Box>
      </Flex>
    </>
  )
}

export {MainGame as default}