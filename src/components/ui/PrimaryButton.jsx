import * as React from 'react'
import { Button } from '@mui/material'

export default function PrimaryButton({ text, large, onClick }) {
  return (
    <Button
      variant='contained'
      onClick={onClick}
      sx={{
        borderRadius: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 'auto',
        fontSize: large ? '1.125rem' : '0.875rem',
        LineWeight: 1.25,
        letterSpacing: '1.2px',
        fontWeight: 700,
        mt: large ? '1.75rem' : 0,
        height: '46px',
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
