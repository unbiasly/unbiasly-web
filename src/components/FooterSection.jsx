'use client'

import React from 'react'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import SecondaryLink from './ui/SecondaryLink'
import { useCustomMediaQueries } from '@/hooks'
import { flag } from '@/assets'

export default function FooterSection() {
  const { md, mobileMode } = useCustomMediaQueries()

  return (
    <>
      <Box sx={{ width: '100vw', backgroundColor: '#171717', px: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
        <Container maxWidth='lg' disableGutters sx={{ py: { xs: '1rem', sm: '1.5rem', md: '2.5rem' } }}>
          <Grid container spacing={4} justifyContent='space-between'>
            <Grid item xs={12} sm={6} md={8}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link href='/' prefetch>
                  <Image src='/images/logo.svg' alt='logo' height={md ? 72 : 64} width={md ? 72 : 64} priority />
                </Link>
                <Typography
                  variant='h5'
                  align='center'
                  sx={{ mt: '0.5rem', mb: '1.75rem', color: '#FFFFFF', fontWeight: 700 }}
                >
                  Get the app
                </Typography>
                <Box sx={{ display: 'flex', gap: md ? '2rem' : '1.25rem' }}>
                  <Link href='/' prefetch>
                    <Image
                      src='/images/icons/app-store.svg'
                      height={md ? 60 : 54}
                      width={md ? 140 : 126}
                      alt='app-store'
                    />
                  </Link>
                  <Link href='/' prefetch>
                    <Image
                      src='/images/icons/play-store.svg'
                      height={md ? 60 : 54}
                      width={md ? 137 : 123}
                      alt='play-store'
                    />
                  </Link>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography
                variant='body1'
                align={mobileMode ? 'center' : 'start'}
                sx={{ mb: '1.125rem', color: '#FFFFFF', fontWeight: 700 }}
              >
                Company
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: mobileMode ? 'center' : 'start',
                  gap: '1rem',
                }}
              >
                <SecondaryLink text='Privacy policy' href='/privacy' />
                <SecondaryLink text='Terms & conditions' href='/terms' />
                <SecondaryLink text='Contact us' href='/contact' />
                <SecondaryLink text='Careers' />
              </Box>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Typography
                variant='body1'
                align={mobileMode ? 'center' : 'start'}
                sx={{ mb: '1.125rem', color: '#FFFFFF', fontWeight: 700 }}
              >
                Connect
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: mobileMode ? 'center' : 'start',
                  gap: '0.75rem',
                }}
              >
               
                <Link href=' https://www.facebook.com/profile.php?id=61557499654405&mibextid=ZbWKwL'>
                  <Image src='/images/icons/facebook.svg' height={28} width={28} alt='facebook icon' />
                </Link>
                
                <Link href='https://x.com/UnbiaslyAI?t=01bWzOX3s00Bx3yXW-DY3w&s=09'>
                  <Image src='/images/icons/twitter.svg' height={28} width={28} alt='twitter icon' />
                </Link>
              
                <Link href='https://www.instagram.com/unbiasly.ai?igsh=ZHA1c3hzNmdkNGJ6'>
                  <Image src='/images/icons/instagram.svg' height={28} width={28} alt='instagram icon' />
                </Link>
              
                <Link href='https://www.linkedin.com/company/unbiasly-ai/'>
                  <Image src='/images/icons/linkedin.svg' height={28} width={28} alt='linkedin icon' />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Typography
        variant='body1'
        align='center'
        sx={{
          fontSize: '0.875rem',
          color: '#FFFFFF',
          backgroundColor: '#000000',
          width: '100%',
          p: '1rem',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        Made with 💜 in Delhi
        <Image src={flag} width={20} height={12.7} alt='flag of India' style={{ margin: '4px 8px 0 8px' }} /> India | ©
        2024 by Triverge Insight Pvt. Ltd.
      </Typography>
    </>
  )
}
