'use client'

import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AdvisorCard from './cards/AdvisorCard'
import { useCustomMediaQueries } from '@/hooks'

export default function AdvisorSection() {
  const { md, wideMobileMode, tabletMode, mobileMode } = useCustomMediaQueries()

  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        width: '100vw',
        boxShadow: '0px -4px 24px 0px #2124270A',
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
          Our Honorary Advisors
        </Typography>
        {md && (
          <Grid container columnSpacing={6} sx={{ mt: '3.125rem', mb: '5rem' }}>
            <Grid item xs={12} md={4}>
              <AdvisorCard
                img='/images/team/img-4.svg'
                title='Uday Mahurkar'
                subtitle='Ex-Information Commissioner, Govt. of India Former Deputy Editor, India Today Group Author, Senior Journalist'
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <AdvisorCard
                img='/images/team/img-5.svg'
                title='Riyanka Roy'
                subtitle='Ex- Lead, Policy and Teach Program, PathCheck, MIT LLM-University Of California Berkeley, USA'
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <AdvisorCard
                img='/images/team/img-6.svg'
                title='Ashwani JP Singh'
                subtitle='14 Years of Experience in Political & Government Affairs, Masters in Public Administration'
              />
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
            <AdvisorCard
              img='/images/team/img-4.svg'
              title='Uday Mahurkar'
              subtitle='Ex-Information Commissioner, Govt. of India Former Deputy Editor, India Today Group Author, Senior Journalist'
            />{' '}
            <AdvisorCard
              img='/images/team/img-5.svg'
              title='Riyanka Roy'
              subtitle='Ex- Lead, Policy and Teach Program, PathCheck, MIT LLM-University Of California Berkeley, USA'
            />
            <AdvisorCard
              img='/images/team/img-6.svg'
              title='Ashwani JP Singh'
              subtitle='14 Years of Experience in Political & Government Affairs, Masters in Public Administration'
            />
          </Box>
        )}
      </Container>
    </Box>
  )
}
