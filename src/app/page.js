import * as React from 'react'
import { Box, Typography } from '@mui/material'
import { HeroCard, Navbar } from '@/components'

export const metadata = {
  title: 'Next-news',
  description: 'Next-news',
}

export default function Home() {
  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', pt: '1.75rem', background: '#F4F6F5' }}>
      <Navbar />
      <HeroCard />
    </Box>
  )
}
