'use client'

import { inter } from '@/styles/theme'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function InfoCard({ color, icon, title, subtitle }) {
  return (
    <Box
      sx={{
        border: `2px solid ${color}`,
        borderRadius: '20px',
        background: `linear-gradient(180deg, #FFFFFF 0%, ${color}1A 100%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '1.5rem',
        height: '100%',
        maxWidth: '25rem',
        cursor: 'pointer',
        transition: 'box-shadow 0.25s ease-in-out',
        boxShadow: '0px -4px 24px 0px #2124270A',
        '&:hover': { boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
      }}
    >
      <Image src={icon} alt='icon' height={40} width={40} priority />
      <Typography variant='h5' sx={{ fontWeight: 800, color: '#171717', my: '0.75rem' }}>
        {title}
      </Typography>
      <Typography variant='h6' align='center' sx={{ fontFamily: inter.style.fontFamily, fontWeight: 400 }}>
        {subtitle}
      </Typography>
    </Box>
  )
}
