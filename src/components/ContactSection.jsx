import React from 'react'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import ContactForm from './cards/ContactForm'

export default function ContactSection() {
  return (
    <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
      <Box sx={{ position: 'relative', zIndex: 3 }}>
        <Box
          sx={{ width: '70px', height: '70px', position: 'relative', mx: 'auto', mt: '4.25rem', objectFit: 'contain' }}
        >
          <Image
            src='/images/icons/quotes.svg'
            priority
            fill
            alt='quotes'
            // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </Box>
        <Typography variant='h4' paragraph align='center' sx={{ mt: '0.875rem' }}>
          "Truth is the most valuable <br /> asset a nation can possess"
        </Typography>
        <Typography variant='h6' align='center' sx={{ fontSize: '1.25rem' }}>
          - Mahatma Gandhi
        </Typography>
      </Box>

      <Container
        maxWidth='lg'
        disableGutters
        sx={{
          border: '1px solid #EEEEEEEE',
          borderRadius: '60px 40px 40px 60px',
          boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#FFFFFF',
          mx: 'auto',
          width: '100%',
          mt: '7rem',
          mb: '5.625rem',
          position: 'relative',
          zIndex: 3,
          overflow: 'hidden',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} sx={{ backgroundColor: '#F7F7F9' }}>
            <Box
              sx={{
                position: 'relative',
                mx: '0.875rem',
                width: '466px',
                height: '440px',
                objectFit: 'contain',
              }}
            >
              <Image
                src='/images/illustration.svg'
                priority
                fill
                alt='illustration'
                // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </Box>

            <Typography variant='h4' align='center' sx={{ mt: '1rem', mx: '4.625rem' }}>
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
