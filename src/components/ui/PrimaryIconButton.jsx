import React from 'react'
import { IconButton } from '@mui/material'

export default function PrimaryIconButton({ children, onClick }) {
  return (
    <IconButton
      sx={{
        p: 0,
        boxShadow: '0px -4px 24px 0px #2124270A',
        transition: 'box-shadow 0.25s ease-in-out',
        '&:hover': { boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)' },
      }}
      onClick={onClick}
    >
      {children}
    </IconButton>
  )
}
