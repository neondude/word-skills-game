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
        fontWeight={600}
        color="white"
      >
        {words.length + ' ' + title}
      </Text>
      <div>
        {words.map((word, index) => {
          return (
            <div key={index}>
              <Text
                sx={{
                  textTransform: 'uppercase',
                }}
                fontSize={4}
                fontWeight={600}
                // bg={'Aqua'}
              >
                {word}
              </Text>
            </div>
          )
        })}
      </div>
    </>
  )
}

export { WordListDisplay as default }