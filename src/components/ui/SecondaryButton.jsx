import * as React from 'react'
import { Work_Sans } from 'next/font/google'
import { Button } from '@mui/material'
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded'

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
})

export default function SecondaryButton({ text, onClick }) {
  return (
    <Button
      variant='contained'
      onClick={onClick}
      sx={{
        borderRadius: '30px',
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 'auto',
        fontFamily: workSans.style.fontFamily,
        fontSize: '1.125rem',
        fontWeight: 500,
        mt: '1.5rem',
        height: '56px',
        width: { xs: 'auto', sm: '16rem' },
        textWrap: 'nowrap',
        transition: 'background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
        boxShadow: '0px -4px 24px 0px #2124270A',
        '&:hover': { backgroundColor: '#171717E6', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
      }}
    >
      {text} <NorthEastRoundedIcon sx={{ ml: '0.5rem' }} />
    </Button>
  )
}
