import React from 'react'
import Link from 'next/link'
import { Typography } from '@mui/material'

export default function PrimaryLink({ text, href }) {
  return (
    <Link href={href ? href : '#'} prefetch>
      <Typography
        variant='h5'
        sx={{
          fontWeight: 400,
          position: 'relative',
          '&::after': {
            content: { sm: "''" },
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: 'transparent',
            transition: 'background-color 0.25s ease-in-out',
          },
          '&:hover::after': {
            backgroundColor: 'text.disabled',
          },
        }}
      >
        {text}
      </Typography>
    </Link>
  )
}
