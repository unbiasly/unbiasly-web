import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import InfoCard from './cards/InfoCard'
import NewsTicker from './ui/NewsTicker'

export default function InfoSection() {
  return (
    <>
      <Box sx={{ backgroundColor: '#171717', mt: '2.5rem', mb: '6.25rem', width: '100%' }}>text </Box>
      {/* <NewsTicker /> */}
      <Container maxWidth='lg' disableGutters sx={{ mx: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
        <Typography
          variant='h4'
          align='center'
          sx={{ fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          What Unbiasly Promises You
          <Image
            src='/images/hand-shake.svg'
            alt='icon'
            height={44}
            width={44}
            style={{ marginLeft: '1rem' }}
            priority
          />
        </Typography>
        <Grid container columnSpacing={6} sx={{ mt: '3.125rem', mb: '5rem' }}>
          <Grid item xs={12} md={4}>
            <InfoCard
              color='#00AFCB'
              icon='/images/info/icon-1.svg'
              title='100% Verified News'
              subtitle='Trustworthy journalism delivering 100% verified news'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard
              color='#FF4F79'
              icon='/images/info/icon-2.svg'
              title='100% Verified Source'
              subtitle='A reliable and authenticated source providing 100% verified information'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard
              color='#AE8BD2'
              icon='/images/info/icon-3.svg'
              title='Safe & Secure'
              subtitle='Ensuring safety and security on our app'
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
