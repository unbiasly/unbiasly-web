'use client'

import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import TeamCard from './cards/TeamCard'
import { useCustomMediaQueries } from '@/hooks'

export default function TeamSection() {
  const { md, wideMobileMode, tabletMode, mobileMode } = useCustomMediaQueries()

  return (
    <Box
      sx={{
        width: '100vw',
        px: { xs: '1rem', sm: '2rem', md: '4rem' },
        py: { xs: '2rem', sm: '3.5rem', md: '5.625rem' },
      }}
    >
      <Container maxWidth='lg' disableGutters sx={{ m: 'auto' }}>
        <Typography
          variant={mobileMode ? 'h4' : wideMobileMode ? 'h3' : 'h2'}
          fontWeight={md ? 800 : 700}
          color='#171717'
          align='center'
          sx={{ mb: { xs: '2rem', sm: '3rem', md: '4.25rem' } }}
        >
          Meet Our Team
        </Typography>
        {md && (
          <Grid container columnSpacing={6} justifyContent='center'>
            <Grid item xs={12} md={4}>
              <TeamCard img='/images/team/img-1.svg' title='Rajveer Kaur' subtitle='Co- Founder & CCO' />
            </Grid>
            <Grid item xs={12} md={4}>
              <TeamCard img='/images/team/img-2.svg' title='Robin Singh' subtitle='Founder & CEO' />
            </Grid>
            <Grid item xs={12} md={4}>
              <TeamCard img='/images/team/img-3.svg' title='Umesh Sharma' subtitle='Chief Technology Officer' />
            </Grid>
          </Grid>
        )}
        {(tabletMode || mobileMode) && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <TeamCard img='/images/team/img-1.svg' title='Rajveer Kaur' subtitle='Co- Founder & CCO' />
            <TeamCard img='/images/team/img-2.svg' title='Robin Singh' subtitle='Founder & CEO' />
            <TeamCard img='/images/team/img-3.svg' title='Umesh Sharma' subtitle='Chief Technology Officer' />
          </Box>
        )}
      </Container>
    </Box>
  )
}
