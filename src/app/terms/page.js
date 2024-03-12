import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        p: { xs: '1rem', sm: '2rem', md: '4rem' },
        background: '#F4F6F5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography>test</Typography>
    </Box>
  )
}
