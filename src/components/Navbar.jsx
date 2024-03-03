'use client'

import * as React from 'react'
import Image from 'next/image'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import PrimaryButton from './ui/PrimaryButton'
import Link from 'next/link'
import PrimaryLink from './ui/PrimaryLink'
import { useCustomMediaQueries } from '@/hooks'

export default function Navbar() {
  const { wideMobileMode, sm } = useCustomMediaQueries()

  return (
    <Box sx={{ width: '100vw', px: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
      <Container maxWidth='md' disableGutters sx={{ mx: 'auto' }}>
        <AppBar
          position='static'
          sx={{
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
            <Link href='/' prefetch>
              <Box
                sx={{
                  cursor: 'pointer',
                  width: '40px',
                  height: '40px',
                  position: 'relative',
                  objectFit: 'contain',
                  my: 'auto',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.25s ease-in-out',
                  boxShadow: '0px -4px 24px 0px #2124270A',
                  '&:hover': {
                    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Image
                  src='/images/logo.svg'
                  alt='logo'
                  fill
                  priority
                  // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </Box>
            </Link>

            {sm && (
              <Box sx={{ display: 'flex', gap: wideMobileMode ? '1rem' : '3rem' }}>
                <PrimaryLink text='About Us' />
                <PrimaryLink text='Careers' />
                <PrimaryLink text='Blog' />
              </Box>
            )}
            <Link href='#'>
              <PrimaryButton
                text={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    Download Unbiasly
                    {sm && (
                      <Image
                        src='/images/download-btn.svg'
                        height={18}
                        width={40}
                        priority
                        alt='play-store'
                        style={{ marginLeft: '0.75rem' }}
                      />
                    )}
                  </Box>
                }
              />
            </Link>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  )
}
