import * as React from 'react'
import { Button } from '@mui/material'

export default function SecondaryButton({ text }) {
  return (
    <Button
      variant='contained'
      sx={{
        borderRadius: '40px',
        height: '50px',
        fontWeight: 600,
        color: '#171717',
        backgroundColor: '#F4F6F5',
        px: '2rem',
      }}
    >
      {text}
    </Button>
  )
}
