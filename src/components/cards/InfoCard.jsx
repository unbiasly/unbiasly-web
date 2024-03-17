'use client'

import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function InfoCard({ icon, title, subtitle }) {
  return (
    <Box
      sx={{
        border: '2px solid #171717',
        borderRadius: '20px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #1717170F 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '1.375rem',
        height: '100%',
        maxWidth: { xs: '320px', sm: '347px' },
        cursor: 'pointer',
        transition: 'box-shadow 0.25s ease-in-out',
        boxShadow: '0px -4px 24px 0px #2124270A',
        '&:hover': { boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
      }}
    >
      <Image src={icon} alt='icon' height={40} width={40} priority />
      <Typography variant='h5' align='center' sx={{ fontWeight: 700, mt: '1.125rem', mb: '0.75rem' }}>
        {title}
      </Typography>
      <Typography variant='h6' align='center' color='text.secondary' sx={{ fontWeight: 400 }}>
        {subtitle}
      </Typography>
    </Box>
  )
}
