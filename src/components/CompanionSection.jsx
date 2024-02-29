import { Container } from '@mui/material'
import React from 'react'

export default function CompanionSection() {
  return (
    <Box sx={{ width: '100%', background: '#171717' }}>
      <Container maxWidth='lg' disableGutters sx={{ m: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
        <Grid container columnSpacing={8}>
          <Grid item sm={8} xs={12}>
            text
          </Grid>
          <Grid item sm={4} xs={12}>
            image
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
