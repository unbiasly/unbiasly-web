import * as React from 'react'
import { Button } from '@mui/material'

export default function PrimaryButton({ text, large, onClick }) {
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
        height: large ? '4.375rem' : '2.5rem',
        width: '13.5rem',
        textWrap: 'nowrap',
      }}
    >
      {text}
    </Button>
  )
}
