'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'

const headlines = [
  'NEWS',
  'TRENDING',
  'FASHION',
  'HEALTH',
  'SPORTS',
  'TECHNOLOGY',
  'WORLD',
  'POLITICS',
  'ENTERTAINMENT',
]

const NewsTicker = () => {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: 'slideLeft 10s linear infinite',
          animationDelay: '1s',
        }}
      >
        {headlines.map((headline, index) => (
          <Typography
            key={index}
            variant='body1'
            sx={{
              paddingRight: '1em',
              animation: 'slideRight 10s linear infinite',
              animationDelay: `${index * 1.5}s`,
            }}
          >
            {headline}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default NewsTicker
