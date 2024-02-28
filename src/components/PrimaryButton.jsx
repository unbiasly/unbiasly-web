import * as React from 'react'
import { Button } from '@mui/material'

export default function PrimaryButton({ text }) {
  return (
    <Button
      variant='contained'
      sx={{
        textTransform: 'capitalize',
        borderRadius: '90px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700,
        py: '0.5rem',
        px: '1.5rem',
      }}
    >
      {text}
    </Button>
  )
}
