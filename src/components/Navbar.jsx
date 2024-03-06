'use client'
import * as React from 'react'
import Image from 'next/image'
import { AppBar, Box, Container, Toolbar } from '@mui/material'
import Link from 'next/link'
import PrimaryLink from './ui/PrimaryLink'
import { useCustomMediaQueries } from '@/hooks'
import { useState } from 'react'
import SideBar from './SideBar'
import PrimaryIconButton from './ui/PrimaryIconButton'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import PrimaryButton from './ui/PrimaryButton'
export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { wideMobileMode, sm, mobileMode } = useCustomMediaQueries()
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }
  const handleSidebarClose = () => {
    setSidebarOpen(false)
  }
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
                <Image src='/images/logo.svg' alt='logo' fill priority />
              </Box>
            </Link>
            {sm && (
              <Box sx={{ display: 'flex', gap: wideMobileMode ? '1rem' : '3rem' }}>
                <PrimaryLink text='About Us' />
                <PrimaryLink text='Careers' />
                <PrimaryLink text='Blog' />
              </Box>
            )}
            {mobileMode && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: mobileMode ? '1rem' : '3rem' }}>
                <PrimaryIconButton onClick={handleSidebarToggle}>
                  <MenuRoundedIcon sx={{ fontSize: '2rem' }} />
                </PrimaryIconButton>
                <SideBar open={sidebarOpen} handleClose={handleSidebarClose} />
              </Box>
            )}
            {!mobileMode && (
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
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  )
}
