import React, { useState, useEffect, useReducer, useContext } from 'react'
import { Flex, Box, Card, Image, Heading, Link, Text } from 'rebass'


const WordListDisplay = ({title, words, redact}) => {
  words.sort((a, b) => {
    return b.length - a.length
  })

  return (
    <>
      <Text
        py={3}
        sx={{
          textTransform: 'uppercase',
        }}
        fontSize={4}
        color="white"
      >
        {words.length + ' ' + title}
      </Text>
      <Flex flexDirection="column">
        {words.map((word, index) => {
          return (
            <Box key={index} p={1} width={1 / 2}>
              <Text>
                {word.split('').map((letter) => {
                  return redact? 'x':letter
                })}
              </Text>
            </Box>
          )
        })}
      </Flex>
    </>
  )
}

export { WordListDisplay as default }