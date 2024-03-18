'use client'

import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import TeamCard from './cards/TeamCard'
import { useCustomMediaQueries } from '@/hooks'

export default function TeamSection() {
  const { sm, md, tabletMode, mobileMode } = useCustomMediaQueries()

  return (
    <Box sx={{ width: '100vw', px: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
      <Container maxWidth='lg' disableGutters sx={{ m: 'auto', my: { xs: '2rem', sm: '3.5rem', md: '5.625rem' } }}>
        <Typography variant='h2' align='center' sx={{ fontWeight: 700, mb: { xs: '2rem', md: '4rem' } }}>
          Meet Our Team
        </Typography>

        {sm && (
          <Grid container spacing={{ sm: 6, lg: 4 }} justifyContent='space-between'>
            <Grid item xs={12} sm={6} lg={3}>
              <TeamCard
                img='/images/team/img-1.svg'
                title='Rajveer Kaur'
                subtitle='Co- Founder & CCO'
                caption='University of Delhi'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TeamCard
                img='/images/team/img-2.svg'
                title='Robin Singh'
                subtitle='Founder & CEO'
                caption='University of Delhi'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TeamCard
                img='/images/team/img-3.svg'
                title='Umesh Sharma'
                subtitle='Chief Technology Officer'
                caption='Carnegie Mellon University, USA'
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TeamCard
                img='/images/team/img-7.svg'
                title='Umesh Sharma'
                subtitle='Chief Technology Officer'
                caption='LSE-University of London, UK'
              />
            </Grid>
          </Grid>
        )}

        {mobileMode && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <TeamCard
              img='/images/team/img-1.svg'
              title='Rajveer Kaur'
              subtitle='Co- Founder & CCO'
              caption='University of Delhi'
            />
            <TeamCard
              img='/images/team/img-2.svg'
              title='Robin Singh'
              subtitle='Founder & CEO'
              caption='University of Delhi'
            />
            <TeamCard
              img='/images/team/img-3.svg'
              title='Umesh Sharma'
              subtitle='Chief Technology Officer'
              caption='Carnegie Mellon University, USA'
            />
            <TeamCard
              img='/images/team/img-7.svg'
              title='Umesh Sharma'
              subtitle='Chief Technology Officer'
              caption='LSE-University of London, UK'
            />
          </Box>
        )}

        <Typography
          variant='h2'
          align='center'
          sx={{
            fontWeight: 700,
            mt: { xs: '2rem', sm: '4rem', md: '6rem' },
            mb: { xs: '2rem', sm: '2rem', md: '3rem' },
          }}
        >
          Our Honorary Advisors
        </Typography>

        {md && (
          <Grid container columnSpacing={6}>
            <Grid item xs={12} md={4}>
              <TeamCard
                img='/images/team/img-4.svg'
                title='Uday Mahurkar'
                subtitle='Ex-Information Commissioner, Govt. of India Former Deputy Editor, India Today Group Author, Senior Journalist'
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TeamCard
                img='/images/team/img-5.svg'
                title='Riyanka Roy'
                subtitle='Ex- Lead, Policy and Teach Program, PathCheck, MIT LLM-University Of California Berkeley, USA'
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TeamCard
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
            <TeamCard
              img='/images/team/img-4.svg'
              title='Uday Mahurkar'
              subtitle='Ex-Information Commissioner, Govt. of India Former Deputy Editor, India Today Group Author, Senior Journalist'
            />
            <TeamCard
              img='/images/team/img-5.svg'
              title='Riyanka Roy'
              subtitle='Ex- Lead, Policy and Teach Program, PathCheck, MIT LLM-University Of California Berkeley, USA'
            />
            <TeamCard
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
