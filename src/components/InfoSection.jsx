'use client'

import * as React from 'react'
import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import InfoCard from './cards/InfoCard'
import { useCustomMediaQueries } from '@/hooks'
// import NewsTicker from './ui/NewsTicker'

export default function InfoSection() {
  const { tabletMode, mobileMode, sm, md } = useCustomMediaQueries()

  return (
    <>
       {/* <Box sx={{ backgroundColor: '#171717', mt: '2.5rem', mb: '6.25rem', width: '100%' }}>text </Box> */}
      {/* <NewsTicker /> */}
      <Box sx={{ width: '100vw', px: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
        <Container maxWidth='lg' disableGutters sx={{ mx: 'auto' }}>
          <Typography
            variant={mobileMode ? 'h5' : 'h4'}
            align='center'
            color='#171717'
            sx={{ fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '3rem' }}
          >
            What Unbiasly Promises You
            {sm && (
              <Image
                src='/images/hand-shake.svg'
                alt='icon'
                height={44}
                width={44}
                style={{ marginLeft: '1rem' }}
                priority
              />
            )}
          </Typography>

          {md && (
            <Grid container spacing={6} sx={{ mb: '5rem' }} justifyContent='space-between'>
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
          )}

          {tabletMode && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                alignItems: 'center',
                mb: '5rem',
              }}
            >
              <InfoCard
                color='#00AFCB'
                icon='/images/info/icon-1.svg'
                title='100% Verified News'
                subtitle='Trustworthy journalism delivering 100% verified news'
              />
              <InfoCard
                color='#FF4F79'
                icon='/images/info/icon-2.svg'
                title='100% Verified Source'
                subtitle='A reliable and authenticated source providing 100% verified information'
              />
              <InfoCard
                color='#AE8BD2'
                icon='/images/info/icon-3.svg'
                title='Safe & Secure'
                subtitle='Ensuring safety and security on our app'
              />
            </Box>
          )}
        </Container>
      </Box>
    </>
  )
}
