'use client'

import React from 'react'
import Image from 'next/image'
import { Box, Container, Divider, Grid, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import SecondaryLink from './ui/SecondaryLink'
import PrimaryIconButton from './ui/PrimaryIconButton'
import { useCustomMediaQueries } from '@/hooks'

export default function FooterSection() {
  const { mobileMode, sm } = useCustomMediaQueries()

  return (
    <Box sx={{ width: '100vw', px: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
      <Container maxWidth='lg' disableGutters>
        <Grid container spacing={6} sx={{ mt: '3.75rem', mb: '2.5rem' }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                borderRadius: '24px',
                background: `linear-gradient(0deg, #171717, #171717), linear-gradient(180deg, #171717 80%, rgba(0, 0, 0, 0) 83%, rgba(255, 255, 255, 0.3) 100%)`,
                p: '2.5rem 2.5rem 0 2.5rem',
                height: '100%',
                transition: 'box-shadow 0.25s ease-in-out',
                boxShadow: '0px -4px 24px 0px #2124270A',
                '&:hover': { boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
              }}
            >
              <Typography
                variant='h3'
                align='center'
                sx={{ fontSize: mobileMode ? '2rem' : '2.5rem', fontWeight: 600 }}
                paragraph
              >
                Become a <br />
                smart news reader today
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '1.25rem' }}>
                <Image src='/images/left-dash.svg' height={1.5} width={191} alt='left-dash' />
                <Typography
                  variant='h5'
                  align='center'
                  sx={{ fontSize: '0.875rem', mx: '2.5rem', display: 'flex', alignItems: 'center', textWrap: 'nowrap' }}
                >
                  Get Unbiasly
                </Typography>
                <Image src='/images/right-dash.svg' height={1.5} width={191} alt='right-dash' />
              </Box>

              {sm && (
                <Grid container spacing={2} justifyContent='space-between' sx={{ mt: '2.75rem' }}>
                  <Grid item xs={12} sm={6}>
                    <img
                      src='/images/qr.svg'
                      style={{ width: '100%', height: 'auto', maxWidth: '240px' }}
                      alt='left-dash'
                    />

                    <Box
                      sx={{
                        mt: '1.25rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        maxWidth: '240px',
                        gap: '0.875rem',
                      }}
                    >
                      <Link href='#'>
                        <img
                          src='/images/icons/play-store.svg'
                          style={{ width: '100%', height: 'auto', maxWidth: '125px' }}
                          alt='play-store'
                        />
                      </Link>

                      <Link href='#'>
                        <img
                          src='/images/icons/app-store.svg'
                          style={{ width: '100%', height: 'auto', maxWidth: '125px' }}
                          alt='app-store'
                        />
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <img
                      src='/images/screenshots/screenshot-1.svg'
                      style={{ marginBottom: '-8px', width: '100%', height: 'auto', maxWidth: '227px' }}
                      alt='screenshot'
                    />
                  </Grid>
                </Grid>
              )}
              {mobileMode && (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box
                    sx={{
                      my: '1.25rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      maxWidth: '240px',
                      gap: '0.875rem',
                    }}
                  >
                    <Link href='#'>
                      <img
                        src='/images/icons/play-store.svg'
                        style={{ width: '100%', height: 'auto', maxWidth: '125px' }}
                        alt='play-store'
                      />
                    </Link>

                    <Link href='#'>
                      <img
                        src='/images/icons/app-store.svg'
                        style={{ width: '100%', height: 'auto', maxWidth: '125px' }}
                        alt='app-store'
                      />
                    </Link>
                  </Box>
                  <img
                    src='/images/screenshots/screenshot-1.svg'
                    style={{ width: '100%', height: 'auto', maxWidth: '220px' }}
                    alt='screenshot'
                  />
                </Box>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                borderRadius: '24px',
                background: '#FFFFFF',
                p: '1.25rem 6.5rem 2.5rem 2.5rem',
                height: '100%',
                transition: 'box-shadow 0.25s ease-in-out',
                boxShadow: '0px -4px 24px 0px #2124270A',
                '&:hover': { boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
              }}
            >
              <Link href='/' prefetch>
                <Box
                  sx={{
                    cursor: 'pointer',
                    width: '68px',
                    height: '68px',
                    position: 'relative',
                    objectFit: 'contain',
                    overflow: 'hidden',
                    borderRadius: '16px',
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
              <Typography variant='h6' sx={{ mt: '1rem', fontWeight: 400 }} paragraph>
                Green Park, Delhi India
                <br />
                110016
              </Typography>

              <Box sx={{ mt: '2.5rem', mb: '1.875rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <SecondaryLink
                  href='mailto:support@unbiasly.com'
                  startIcon='/images/icons/email.svg'
                  text='support@unbiasly.com'
                />
                <SecondaryLink href='tel:+919999999999' startIcon='/images/icons/phone.svg' text='+91 99999 99999' />
              </Box>

              <Divider aria-hidden='true' sx={{ border: '1px solid #17171714' }} />

              <Box sx={{ my: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <SecondaryLink text='FAQs' />
                <SecondaryLink text='Contact us' />
                <SecondaryLink text='Privacy policy' />
                <SecondaryLink text='Terms & conditions' />
              </Box>

              <Box sx={{ display: 'flex', gap: '1.25rem' }}>
                <PrimaryIconButton>
                  <Image src='/images/icons/instagram.svg' height={32} width={32} alt='instagram icon' />
                </PrimaryIconButton>
                <PrimaryIconButton>
                  <Image src='/images/icons/facebook.svg' height={32} width={32} alt='facebook icon' />
                </PrimaryIconButton>
                <PrimaryIconButton>
                  <Image src='/images/icons/twitter.svg' height={32} width={32} alt='twitter icon' />
                </PrimaryIconButton>
                <PrimaryIconButton>
                  <Image src='/images/icons/linkedin.svg' height={32} width={32} alt='linkedin icon' />
                </PrimaryIconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography variant='body1' align='center' sx={{ fontSize: '0.875rem', mb: '4rem', color: '#7C7C7C' }}>
          Made with 💜 in Delhi 🇮🇳 India | © 2024 by Unbiasly Pvt Ltd.
        </Typography>
      </Container>
    </Box>
  )
}
