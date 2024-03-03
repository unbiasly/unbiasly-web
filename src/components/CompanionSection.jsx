'use client'

import React from 'react'
import Image from 'next/image'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'

export default function CompanionSection() {
  const desktopMode = useMediaQuery('(min-width:900px)')
  const wideTabletMode = useMediaQuery('(min-width:750px) and (max-width:899px)')
  const narrowTabletMode = useMediaQuery('(min-width:600px) and (max-width:749px)')
  const mobileMode = useMediaQuery('(max-width:599px)')

  return (
    <Box
      sx={{
        width: '100%',
        background: '#171717',
        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
        px: { xs: '1rem', sm: '2rem', md: '4rem' },
      }}
    >
      <Container
        maxWidth='lg'
        disableGutters
        sx={{ mx: 'auto', my: narrowTabletMode ? '2rem' : wideTabletMode ? '2rem' : '3rem' }}
      >
        {desktopMode && (
          <Grid container spacing={6} justifyContent='space-between' alignItems='center'>
            <Grid item md={7}>
              <Typography variant='h2' color='#FFFFFF'>
                How we are your trusted news companion?
              </Typography>
              <Typography variant='h5' align='justify' paragraph sx={{ my: '3.5rem' }}>
                "Welcome to our app, your comprehensive platform for staying informed. With a user-friendly interface,
                we offer a seamless experience for accessing verified news, keeping you updated on the latest events
                from around the world. Trust us to be your reliable source for accurate information, ensuring you're
                always in the know, anytime, anywhere."
              </Typography>
            </Grid>
            <Grid item md={5}>
              <Image src='/images/screenshots/screenshot-2.svg' width={374} height={617} priority alt='screenshot-2' />
            </Grid>
          </Grid>
        )}

        {wideTabletMode && (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
            <Box>
              <Typography variant='h3' color='#FFFFFF'>
                How we are your trusted news companion?
              </Typography>
              <Typography variant='h6' align='justify' paragraph color='#FFFFFF' sx={{ mt: '2rem' }}>
                "Welcome to our app, your comprehensive platform for staying informed. With a user-friendly interface,
                we offer a seamless experience for accessing verified news, keeping you updated on the latest events
                from around the world. Trust us to be your reliable source for accurate information, ensuring you're
                always in the know, anytime, anywhere."
              </Typography>
            </Box>

            <Image src='/images/screenshots/screenshot-2.svg' width={331} height={546} priority alt='screenshot-2' />
          </Box>
        )}

        {narrowTabletMode && (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
            <Box>
              <Typography variant='h4' color='#FFFFFF'>
                How we are your trusted news companion?
              </Typography>
              <Typography variant='body2' align='justify' paragraph color='#FFFFFF' sx={{ mt: '2rem' }}>
                "Welcome to our app, your comprehensive platform for staying informed. With a user-friendly interface,
                we offer a seamless experience for accessing verified news, keeping you updated on the latest events
                from around the world. Trust us to be your reliable source for accurate information, ensuring you're
                always in the know, anytime, anywhere."
              </Typography>
            </Box>

            <Image src='/images/screenshots/screenshot-2.svg' width={311} height={513} priority alt='screenshot-2' />
          </Box>
        )}

        {mobileMode && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Typography variant='h4' align='center' color='#FFFFFF'>
              How we are your trusted news companion?
            </Typography>
            <Typography variant='body1' align='center' paragraph color='#FFFFFF' sx={{ mt: '2rem' }}>
              "Welcome to our app, your comprehensive platform for staying informed. With a user-friendly interface, we
              offer a seamless experience for accessing verified news, keeping you updated on the latest events from
              around the world. Trust us to be your reliable source for accurate information, ensuring you're always in
              the know, anytime, anywhere."
            </Typography>

            <img
              src='/images/screenshots/screenshot-2.svg'
              style={{ width: '100%', maxWidth: '310px', height: 'auto' }}
              alt='screenshot-2'
            />
          </Box>
        )}
      </Container>
    </Box>
  )
}
