import React, { useState, useEffect, useReducer, useContext } from 'react'
import Header from '../components/Header'
import useAlphaKeyUp from '../hooks/useAlphaKeyUp'
import useBackspaceKeyUp from '../hooks/useBackspaceKeyUp'
import useEnterKeyUp from '../hooks/useEnterKeyUp'
import { getWordData } from '../utils/WordData'
import lettersReducer from '../reducers/letters'
import LettersContext from '../context/LettersContext'
import { Flex, Box, Card, Image, Heading, Link, Text } from 'rebass'



const UserInputDisplay = () => {
  const { letterDisplay } = useContext(LettersContext)

  return (
    <>
      <Box my={6} minHeight={128}>
        {(letterDisplay.userInput.length > 0) ? (
          <Text
            sx={{
              textTransform: 'uppercase',
            }}
            fontSize={8}
            textAlign="center"
            fontWeight="bold"
          >
            {letterDisplay.userInput}
            {/* Stor */}
          </Text>
        ) : (
          <Text
            sx={{
              textTransform: 'uppercase',
              opacity:'0.4'
            }}
            fontSize={5}
            textAlign="center"
            fontWeight="bold"
          >
            start typing..
          </Text>
        )}
      </Box>
      {/* <Flex justifyContent="center">
      </Flex> */}
    </>
  )
  // return <div>{letterDisplay.userInput}</div>
}


export {UserInputDisplay as default}