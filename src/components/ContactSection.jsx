'use client'

import React from 'react'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import ContactForm from './cards/ContactForm'
import { useCustomMediaQueries } from '@/hooks'

export default function ContactSection() {
  const { md, sm, tabletMode, mobileMode } = useCustomMediaQueries()

  return (
    <Box sx={{ position: 'relative', zIndex: 1, width: '100vw', px: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
      <Container maxWidth='lg' disableGutters sx={{ position: 'relative', zIndex: 3 }}>
        {sm && (
          <Box
            sx={{
              width: '70px',
              height: '70px',
              position: 'relative',
              mx: 'auto',
              mt: '4.25rem',
              objectFit: 'contain',
            }}
          >
            <Image
              src='/images/icons/quotes.svg'
              priority
              fill
              alt='quotes'
              // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </Box>
        )}
        <Typography
          variant={mobileMode ? 'h5' : 'h4'}
          paragraph
          align='center'
          sx={{
            mt: mobileMode ? '2rem' : '0.875rem',
            fontWeight: 600,
            color: '#171717',
          }}
        >
          "Truth is the most valuable <br /> asset a nation can possess"
        </Typography>
        <Typography
          variant='h6'
          align='center'
          sx={{
            fontSize: mobileMode ? '0.875rem' : '1.25rem',
          }}
        >
          - Mahatma Gandhi
        </Typography>
      </Container>

      <Container
        maxWidth='lg'
        disableGutters
        sx={{
          border: '1px solid #EEEEEEEE',
          borderRadius: mobileMode ? '30px' : '60px 40px 40px 60px',
          backgroundColor: '#FFFFFF',
          mx: 'auto',
          width: '100%',
          mt: mobileMode ? '3rem' : '7rem',
          mb: mobileMode ? '3rem' : '5.625rem',
          position: 'relative',
          zIndex: 3,
          overflow: 'hidden',
          boxShadow: '0px -4px 24px 0px #2124270A',
          // boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
        }}
      >
        {md && (
          <Grid container spacing={2}>
            <Grid item xs={12} md={5} sx={{ backgroundColor: '#F7F7F9' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src='/images/illustration.svg'
                  fill
                  alt='illustration'
                  style={{ maxWidth: '450px', width: '100%', height: 'auto' }}
                />
              </Box>

              <Box sx={{ mx: 'auto' }}>
                <Typography variant='h4' align='center' sx={{ mt: '1.5rem', mx: 'auto', maxWidth: '344px' }}>
                  We pledge to present you with only the most{' '}
                  <em>
                    <b>accurate</b>{' '}
                  </em>{' '}
                  and{' '}
                  <em>
                    <b>reliable</b>
                  </em>{' '}
                  news!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{ mt: '4rem', mx: '3rem' }}>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: '1.25rem',
                    lineHeight: '2.25rem',
                    fontWeight: 700,
                    color: '#171717CC',
                    display: 'flex',
                    alignItems: 'center',
                    mb: '0.875rem',
                  }}
                >
                  <Image
                    src='/images/dash-symbol.svg'
                    height={3}
                    width={30}
                    priority
                    alt='symbol'
                    style={{ marginRight: '0.5rem' }}
                  />
                  Get In Touch
                </Typography>
                <Typography
                  variant='h4'
                  paragraph
                  sx={{
                    fontSize: '2.5rem',
                    lineHeight: '3.5rem',
                    fontWeight: 700,
                  }}
                >
                  Have something to tell us? <br /> Contact Us Now!
                </Typography>
                <ContactForm />
              </Box>
            </Grid>
          </Grid>
        )}
        {(tabletMode || mobileMode) && (
          <Box sx={{ m: '2rem' }}>
            <Typography
              variant='h6'
              sx={{
                fontSize: '1rem',
                lineHeight: '1.25rem',
                fontWeight: 700,
                color: '#171717CC',
                display: 'flex',
                alignItems: 'center',
                mb: '0.875rem',
              }}
            >
              <Image
                src='/images/dash-symbol.svg'
                height={2}
                width={20}
                priority
                alt='symbol'
                style={{ marginRight: '0.25rem' }}
              />
              Get In Touch
            </Typography>
            <Typography
              variant='h4'
              paragraph
              sx={{
                fontSize: '2rem',
                lineHeight: '2.25rem',
                fontWeight: 600,
              }}
            >
              Have something to tell us? <br /> Contact Us Now!
            </Typography>
            <ContactForm />
          </Box>
        )}
      </Container>

      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          bottom: 0,
          left: 0,
          width: '100%',
          height: '40rem',
          backgroundColor: '#FFFFFF',
        }}
      />
    </Box>
  )
}
