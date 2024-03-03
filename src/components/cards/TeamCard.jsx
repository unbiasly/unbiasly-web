import React from 'react'
import Image from 'next/image'
import { Box, Divider, Typography } from '@mui/material'

export default function TeamCard({ img, title, subtitle }) {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        p: '0 2rem 2.25rem 2rem',
        maxWidth: '25rem',
        height: '100%',
        cursor: 'pointer',
        transition: 'box-shadow 0.25s ease-in-out',
        boxShadow: '0px -4px 24px 0px #2124270A',
        '&:hover': { boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)' },
      }}
    >
      <Divider aria-hidden='true' sx={{ mb: '1.75rem', border: '4px solid #171717' }} />

      <Box sx={{ width: '226px', height: '226px', position: 'relative', mx: 'auto', objectFit: 'contain' }}>
        <Image
          src={img}
          priority
          fill
          alt='avatar'
          // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </Box>
      <Typography variant='h5' align='center' sx={{ color: '#171717', fontWeight: 800, mt: '2.5rem', mb: '0.75rem' }}>
        {title}
      </Typography>
      <Typography variant='h6' align='center'>
        {subtitle}
      </Typography>
    </Box>
  )
}
