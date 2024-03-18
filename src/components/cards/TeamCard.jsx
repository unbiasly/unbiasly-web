import React from 'react'
import { Box, Typography } from '@mui/material'

export default function TeamCard({ img, title, subtitle, caption }) {
  return (
    <Box
      sx={{
        borderRadius: '12px',
        p: '0.5rem 1rem 0rem 1rem',
        maxWidth: '25rem',
        height: '100%',
        cursor: 'pointer',
        transition: 'box-shadow 0.25s ease-in-out',
        '&:hover': { boxShadow: '4px 12px 24px 0px #2124270A' },
      }}
    >
      <Box sx={{ mx: 'auto', display: 'flex', justifyContent: 'center' }}>
        <img src={img} style={{ maxWidth: '215px', width: '100%', height: 'auto' }} alt='avatar' />
      </Box>
      <Typography variant='h5' align='center' sx={{ color: '#171717', fontWeight: 800, mt: '2rem' }}>
        {title}
      </Typography>
      <Typography variant='body1' align='center' paragraph sx={{ color: '#7C7C7C', mt: '0.75rem' }}>
        {subtitle}
        <br />
        {caption}
      </Typography>
    </Box>
  )
}
