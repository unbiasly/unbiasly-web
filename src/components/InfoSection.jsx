import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'

export default function InfoSection() {
  return (
    <Container maxWidth='lg' disableGutters sx={{ mx: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
      <Typography variant='h3' paragraph>
        Absolute Truth, Guaranteed <br /> Your Source for 100% Verified News!
      </Typography>
      <Box sx={{ backgroundColor: '#171717', mt: '2.5rem', mb: '6.25rem' }}>text </Box>
      <Typography
        variant='h3'
        sx={{ fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        What Unbiasly Promises You
        <Image src='/images/hand-shake.svg' height={44} width={44} style={{ marginLeft: '1rem' }} priority />
      </Typography>
      <Grid container rowSpacing={4} sx={{ mt: '3.125rem', mb: '5rem' }}>
        <Grid item xs={12} md={4}>
          item1
        </Grid>
        <Grid item xs={12} md={4}>
          item1
        </Grid>
        <Grid item xs={12} md={4}>
          item1
        </Grid>
      </Grid>
    </Container>
  )
}
