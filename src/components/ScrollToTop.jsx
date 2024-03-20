'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import useScrollTrigger from '@mui/material/useScrollTrigger'

export default function ScrollToTop() {
  const trigger = useScrollTrigger({
    target: typeof window !== 'undefined' ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{
          position: 'fixed',
          bottom: 64,
          right: 136,
          backgroundColor: 'primary.main',
          width: 48,
          height: 48,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 5,
        }}
      >
        <KeyboardArrowUpRoundedIcon sx={{ fontSize: 40, color: '#FFFFFF' }} />
      </Box>
    </Fade>
  )
}
