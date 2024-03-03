'use client'

import * as React from 'react'
import Image from 'next/image'
import { Box, Card, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import SecondaryButton from './ui/SecondaryButton'
import Link from 'next/link'
import PrimaryIconButton from './ui/PrimaryIconButton'

export default function HeroSection() {
  const tabletMode = useMediaQuery('(min-width:650px) and (max-width:899px)')
  const wideMobileMode = useMediaQuery('(min-width:650px) and (max-width:749px)')
  const mobileMode = useMediaQuery('(max-width:649px)')

  return (
    <Box sx={{ width: '100vw', px: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
      <Container maxWidth='lg' disableGutters sx={{ mx: 'auto' }}>
        <Card
          sx={{
            background: '#171717',
            borderRadius: '20px',
            mx: 'auto',
            my: '3.75rem',
            position: 'relative',
            border: 0,
            overflow: 'hidden',
            transition: 'box-shadow 0.25s ease-in-out',
            boxShadow: '0px -4px 24px 0px #2124270A',
            '&:hover': { boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
          }}
        >
          {mobileMode ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                m: '1rem 1rem 0 1rem',
              }}
            >
              <Typography variant='h4' color='#FFFFFF' align='center'>
                Your <em>Reliable</em> News Partner
              </Typography>
              <Typography variant='h6' color='#FFFFFF' align='center'>
                Your steadfast companion for credible news coverage!
              </Typography>
              <Link href='#'>
                <SecondaryButton text='Download App' />
              </Link>
              <img
                src='/images/screenshots/screenshot-1.svg'
                style={{ marginBottom: '-8px', marginTop: '1rem', width: '100%', maxWidth: '236px', height: 'auto' }}
                alt='screenshot'
              />
            </Box>
          ) : (
            <Grid
              container
              justifyContent={{ sm: 'space-between', md: 'center' }}
              alignItems='flex-end'
              spacing={2}
              sx={{ position: 'relative', mt: '1.25rem', zIndex: 1 }}
            >
              <Grid item xs={12} sm={6} md={8}>
                <Box
                  sx={{
                    ml: { sm: '3rem', md: '6.25rem' },
                    mb: { sm: '3rem', md: '3.5rem' },
                    width: { sm: 'auto', md: '20.5rem' },
                  }}
                >
                  <Typography variant={tabletMode ? 'h4' : 'h3'} color='#FFFFFF' fontWeight={tabletMode ? 700 : 800}>
                    Your <em>Reliable</em> News Partner
                  </Typography>
                  <Typography variant={wideMobileMode ? 'h6' : 'h5'} color='#FFFFFF' sx={{ my: '1.25rem' }}>
                    Your steadfast companion for credible news coverage!
                  </Typography>

                  <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Link href='#'>
                      <SecondaryButton text='Download App' />
                    </Link>
                    {wideMobileMode ? (
                      <></>
                    ) : (
                      <>
                        <Link href='#'>
                          <PrimaryIconButton>
                            <Image
                              src='/images/icons/google-icon.svg'
                              height={49}
                              width={49}
                              priority
                              alt='google-icon'
                            />
                          </PrimaryIconButton>
                        </Link>
                        <Link href='#'>
                          <PrimaryIconButton>
                            <Image
                              src='/images/icons/apple-icon.svg'
                              height={49}
                              width={49}
                              priority
                              alt='apple-icon'
                            />
                          </PrimaryIconButton>
                        </Link>
                      </>
                    )}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                {tabletMode ? (
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: '3rem' }}>
                    <Image
                      src='/images/screenshots/screenshot-1.svg'
                      height={372}
                      width={227}
                      priority
                      style={{ marginBottom: '-8px' }}
                      alt='screenshot'
                    />
                  </Box>
                ) : (
                  <Image
                    src='/images/screenshots/screenshot-1.svg'
                    height={372}
                    width={227}
                    priority
                    style={{ marginBottom: '-8px' }}
                    alt='screenshot'
                  />
                )}
              </Grid>
            </Grid>
          )}

          <Box
            sx={{
              height: '2.5rem',
              width: '100%',
              position: 'absolute',
              bottom: 0,
              left: 0,
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(23, 23, 23, 0.32) 124.32%)',
            }}
          />
        </Card>
        <Typography
          variant={mobileMode ? 'h6' : wideMobileMode ? 'h5' : 'h4'}
          paragraph
          align='center'
          fontWeight={600}
          color='#171717'
        >
          Absolute Truth, Guaranteed <br /> Your Source for 100% Verified News!
        </Typography>
      </Container>
    </Box>
  )
}
