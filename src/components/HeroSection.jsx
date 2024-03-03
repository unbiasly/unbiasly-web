import * as React from 'react'
import Image from 'next/image'
import { Box, Card, Container, Grid, IconButton, Typography } from '@mui/material'
import SecondaryButton from './ui/SecondaryButton'
import Link from 'next/link'
import PrimaryIconButton from './ui/PrimaryIconButton'

export default function HeroSection() {
  return (
    <Container maxWidth='lg' disableGutters sx={{ mx: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
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
        <Grid
          container
          justifyContent='center'
          alignItems='flex-end'
          rowSpacing={2}
          sx={{ position: 'relative', mt: '1.25rem', zIndex: 1 }}
        >
          <Grid item xs={12} sm={8}>
            <Box sx={{ ml: '6.25rem', mb: '3.5rem', width: '20.5rem' }}>
              <Typography variant='h3'>
                Your <em>Reliable</em> News Partner
              </Typography>
              <Typography variant='h5' sx={{ my: '1.25rem' }}>
                Your steadfast companion for credible news coverage!
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link href='#'>
                  <SecondaryButton text='Download App' />
                </Link>
                <Link href='#'>
                  <PrimaryIconButton>
                    <Image
                      src='/images/icons/google-icon.svg'
                      height={49}
                      width={49}
                      style={{ marginLeft: '1rem', marginRight: '1rem' }}
                      priority
                      alt='google-icon'
                    />
                  </PrimaryIconButton>
                </Link>
                <Link href='#'>
                  <PrimaryIconButton>
                    <Image src='/images/icons/apple-icon.svg' height={49} width={49} priority alt='apple-icon' />
                  </PrimaryIconButton>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image
              src='/images/screenshots/screenshot-1.svg'
              height={372}
              width={227}
              priority
              style={{ marginBottom: '-8px' }}
              alt='screenshot'
            />
          </Grid>
        </Grid>

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
      <Typography variant='h4' paragraph align='center'>
        Absolute Truth, Guaranteed <br /> Your Source for 100% Verified News!
      </Typography>
    </Container>
  )
}
