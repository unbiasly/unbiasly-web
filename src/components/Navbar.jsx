import * as React from 'react'
import Image from 'next/image'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { PrimaryButton } from '@/components'

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
        <Image src='/images/logo.svg' height={48} width={48} priority />
        <Box sx={{ display: 'flex' }}>
          <Typography variant='body1' color='text.disabled' fontWeight={600}>
            About Us
          </Typography>
          <Typography variant='body1' color='text.disabled' fontWeight={600} sx={{ mx: '3rem' }}>
            Careers
          </Typography>
          <Typography variant='body1' color='text.disabled' fontWeight={600}>
            Blog
          </Typography>
        </Box>
        <PrimaryButton
          text={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              Download Unbiasly
              <Image src='/images/download-btn.svg' height={18} width={40} priority style={{ marginLeft: '0.75rem' }} />
            </Box>
          }
        />
      </Toolbar>
    </AppBar>
  )
}
