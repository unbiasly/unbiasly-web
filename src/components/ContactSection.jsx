import React from 'react'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import ContactForm from './cards/ContactForm'

export default function ContactSection() {
  return (
    <React.Fragment>
      <Box>
        <Box
          sx={{ width: '70px', height: '70px', position: 'relative', mx: 'auto', mt: '4.25rem', objectFit: 'contain' }}
        >
          <Image
            src='/images/quotes.svg'
            priority
            fill
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
      <Box sx={{ backgroundColor: '#FFFFFF', mx: 'auto', width: '100%', mt: '7rem' }}>
        <Container
          maxWidth='lg'
          disableGutters
          sx={{
            border: '1px solid #EEEEEEEE',
            borderRadius: '60px 40px 40px 60px',
          }}
        >
          <Grid container spacing={4}>
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
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  )
}
