'use client'
import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PrimaryLink from './ui/PrimaryLink'
import SideBar from './SideBar'
import { useCustomMediaQueries } from '@/hooks'
import { Box, Container, IconButton, Toolbar } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

export default function Navbar() {
  const { sm, wideMobileMode, mobileMode } = useCustomMediaQueries()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const logoSize = mobileMode ? 64 : 80

  return (
    <Box sx={{ width: '100vw', px: { xs: '1rem', sm: '2rem', md: '4rem' }, position: 'relative' }}>
      <Container maxWidth='lg' disableGutters sx={{ mx: 'auto', my: '1.5rem' }}>
        <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href='/' prefetch>
            {wideMobileMode ? (
              <Image src='/images/logo-sm.svg' alt='logo' height={logoSize} width={logoSize} priority />
            ) : (
              <Image src='/images/logo-lg.svg' alt='logo' height={164} width={164} priority />
            )}
          </Link>
          {sm && (
            <Box sx={{ display: 'flex', gap: { sm: '3rem', lg: '5rem' } }}>
              <PrimaryLink text='Home' href='/' />
              <PrimaryLink text='Careers' href='/' />
              <PrimaryLink text='Blog' href='/' />
              <PrimaryLink text='Contact Us' href='#connect' />
            </Box>
          )}
          {mobileMode && (
            <>
              <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
                <MenuRoundedIcon sx={{ fontSize: '1.5rem', color: '#171717' }} />
              </IconButton>
              <SideBar open={sidebarOpen} handleClose={() => setSidebarOpen(false)} />
            </>
          )}
        </Toolbar>
      </Container>
    </Box>
  )
}
