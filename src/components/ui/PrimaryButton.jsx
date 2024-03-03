'use client'

import * as React from 'react'
import { Button } from '@mui/material'
import { useCustomMediaQueries } from '@/hooks'

export default function PrimaryButton({ text, large, onClick }) {
  const { mobileMode } = useCustomMediaQueries()

  return (
    <Button
      variant='contained'
      onClick={onClick}
      sx={{
        textTransform: 'capitalize',
        borderRadius: '90px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 'auto',
        fontSize: large ? '1.125rem' : '0.875rem',
        fontWeight: 700,
        mt: large ? '1.75rem' : 0,
        height: mobileMode && large ? '3.5rem' : large ? '4.375rem' : '2.5rem',
        width: { xs: 'auto', sm: '13.5rem' },
        textWrap: 'nowrap',
        transition: 'background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
        boxShadow: '0px -4px 24px 0px #2124270A',
        '&:hover': { backgroundColor: '#171717E6', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
      }}
    >
      {text}
    </Button>
  )
}
