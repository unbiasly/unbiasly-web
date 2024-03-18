import * as React from 'react'
import Link from 'next/link'
import { Typography } from '@mui/material'

export default function SecondaryLink({ href, text }) {
  return (
    <Link href={href ? href : '#'}>
      <Typography
        variant='body2'
        sx={{
          fontWeight: 400,
          position: 'relative',
          color: '#FFFFFF90',
          transition: 'color 0.25s ease-in-out',
          '&:hover': { color: '#FFFFFFFF' },
        }}
      >
        {text}
      </Typography>
    </Link>
  )
}
