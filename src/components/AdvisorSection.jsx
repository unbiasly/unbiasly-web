import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AdvisorCard from './cards/AdvisorCard'

export default function AdvisorSection() {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', mx: 'auto', width: '100%' }}>
      <Container maxWidth='lg' sx={{ my: '5.625rem' }}>
        <Typography variant='h2' align='center' sx={{ mb: '4.25rem' }}>
          Our Honorary Advisors
        </Typography>
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
              subtitle='14 Years of Experience in Political & Government Affairs, Masters in Public Administration
'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
