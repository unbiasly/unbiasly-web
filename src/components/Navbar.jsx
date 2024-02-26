import * as React from 'react'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import PrimaryButton from './PrimaryButton'

export default function Navbar() {
  return (
    <AppBar
      position='static'
      sx={{
        maxWidth: '50rem',
        borderRadius: '60px',
        maxHeight: '4rem',
        background: '#FFFFFF',
        boxShadow: '0px -4px 24px 0px #2124270A',
        mx: 'auto',
      }}
    >
      <Toolbar
        disableGutters
        sx={{ mx: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Image src='/images/logo.svg' height={40} width={40} priority />
        <Box sx={{ display: 'flex' }}>
          <Typography variant='body2' color='text.primary' fontWeight={600}>
            About Us
          </Typography>
          <Typography variant='body2' color='text.primary' fontWeight={600} sx={{ mx: '3rem' }}>
            Careers
          </Typography>
          <Typography variant='body2' color='text.primary' fontWeight={600}>
            Blog
          </Typography>
        </Box>
        <PrimaryButton text='Download Unbiasly' />
      </Toolbar>
    </AppBar>
  )
}
