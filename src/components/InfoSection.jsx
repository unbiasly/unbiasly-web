'use client'

import * as React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import InfoCard from './cards/InfoCard'
import { useCustomMediaQueries } from '@/hooks'

export default function InfoSection() {
  const { md, tabletMode, mobileMode } = useCustomMediaQueries()

  return (
    <>
      <Box sx={{ width: '100vw', px: { xs: '1rem', sm: '2rem', md: '4rem' }, background: '#FFFFFF' }}>
        <Container maxWidth='lg' disableGutters sx={{ mx: 'auto', my: { xs: '2.5rem', sm: '4rem' } }}>
          <Typography variant='h3' align='center' sx={{ mb: { xs: '2rem', sm: '3rem' } }}>
            Why Unbiasly?
          </Typography>

          {md && (
            <Grid container spacing={6} justifyContent='center'>
              <Grid item xs={12} md={6} lg={4}>
                <InfoCard
                  icon='/images/info/icon-1.svg'
                  title='100% Verified News'
                  subtitle='Trustworthy journalism delivering 100% verified news'
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <InfoCard
                  icon='/images/info/icon-2.svg'
                  title='100% Verified Source'
                  subtitle='A reliable and authenticated source providing 100% verified information'
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <InfoCard
                  icon='/images/info/icon-3.svg'
                  title='Safe & Secure'
                  subtitle='Ensuring safety and security on our app'
                />
              </Grid>
            </Grid>
          )}

          {(tabletMode || mobileMode) && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
              }}
            >
              <InfoCard
                icon='/images/info/icon-1.svg'
                title='100% Verified News'
                subtitle='Trustworthy journalism delivering 100% verified news'
              />
              <InfoCard
                icon='/images/info/icon-2.svg'
                title='100% Verified Source'
                subtitle='A reliable and authenticated source providing 100% verified information'
              />
              <InfoCard
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
