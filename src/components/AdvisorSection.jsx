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
            <AdvisorCard img='/images/team/img-1.svg' title='Rajveer Kaur' subtitle='Co- Founder & CCO' />
          </Grid>
          <Grid item xs={12} md={4}>
            <AdvisorCard img='/images/team/img-2.svg' title='Robin Singh' subtitle='Founder & CEO' />
          </Grid>
          <Grid item xs={12} md={4}>
            <AdvisorCard img='/images/team/img-3.svg' title='Umesh Sharma' subtitle='Chief Technology Officer' />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
