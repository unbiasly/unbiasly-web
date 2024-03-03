import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function PrimaryLink({ text, href }) {
  return (
    <Link href={href ? href : '#'} prefetch>
      <Typography
        variant='body1'
        color='text.disabled'
        sx={{
          fontWeight: 600,
          position: 'relative',
          '&::after': {
            content: "''",
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
