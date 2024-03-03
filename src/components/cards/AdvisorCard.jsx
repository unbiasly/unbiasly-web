'use client'

import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { useCustomMediaQueries } from '@/hooks'

export default function TeamCard({ img, title, subtitle }) {
  const { mobileMode } = useCustomMediaQueries()

  return (
    <Box
      sx={{
        backgroundColor: '#F4F6F5',
        borderRadius: '10px',
        p: '0 2rem 2.25rem 2rem',
        maxWidth: '20rem',
        height: '100%',
        transition: 'box-shadow 0.25s ease-in-out',
        boxShadow: '0px -4px 24px 0px #2124270A',
        '&:hover': { boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)' },
      }}
    >
      <Divider aria-hidden='true' sx={{ mb: '1.75rem', border: '4px solid #171717' }} />

      <Box sx={{ mx: 'auto', display: 'flex', justifyContent: 'center' }}>
        <img src={img} style={{ maxWidth: '226px', width: '100%', height: 'auto' }} alt='avatar' />
      </Box>
      <Typography variant='h5' align='center' sx={{ color: '#171717', fontWeight: 800, mt: '2.5rem', mb: '0.75rem' }}>
        {title}
      </Typography>
      <Typography variant={mobileMode ? 'subtitle2' : 'h6'} align='center' sx={{ color: '#7C7C7C' }}>
        {subtitle}
      </Typography>
    </Box>
  )
}
