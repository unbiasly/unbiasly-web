import * as React from 'react'
import Image from 'next/image'
import { Box, Card, Container, Grid, Typography } from '@mui/material'
import { SecondaryButton } from '@/components'

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
                <SecondaryButton text='Download App' />
                <Image
                  src='/images/google-icon.svg'
                  height={49}
                  width={49}
                  style={{ marginLeft: '1rem', marginRight: '1rem' }}
                  priority
                />
                <Image src='/images/apple-icon.svg' height={49} width={49} priority />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image src='/images/screenshot-1.svg' height={372} width={227} priority style={{ marginBottom: '-8px' }} />
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
      <Typography variant='h3' paragraph align='center'>
        Absolute Truth, Guaranteed <br /> Your Source for 100% Verified News!
      </Typography>
    </Container>
  )
}
