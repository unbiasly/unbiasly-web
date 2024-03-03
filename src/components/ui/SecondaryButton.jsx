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
        py: 'auto',
        px: '2rem',
        textWrap: 'nowrap',
        backgroundColor: '#F4F6F5',
        transition: 'background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
        boxShadow: '0px -4px 24px 0px #2124270A',
        '&:hover': { backgroundColor: '#F4F6F5CC', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
      }}
    >
      {text}
    </Button>
  )
}
