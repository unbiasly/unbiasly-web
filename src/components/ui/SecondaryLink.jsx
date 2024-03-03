import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'

export default function SecondaryLink({ href, startIcon, text }) {
  return (
    <Link href={href ? href : '#'}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {startIcon && <Image src={startIcon} height={19} width={19} alt='icon' style={{ marginRight: '0.625rem' }} />}
        <Typography
          variant='body1'
          color='text.primary'
          sx={{
            fontWeight: 500,
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
      </Box>
    </Link>
  )
}
