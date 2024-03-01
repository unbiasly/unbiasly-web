import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function CompanionSection() {
  return (
    <Box sx={{ width: '100%', background: '#171717' }}>
      <Container maxWidth='lg' disableGutters sx={{ mx: { xs: '1rem', sm: '2rem', md: '4rem' }, my: '3rem' }}>
        <Grid container columnSpacing={8} justifyContent='center' alignItems='center'>
          <Grid item sm={7} xs={12}>
            <Typography variant='h2'>How we are your trusted news companion?</Typography>
            <Typography variant='h5' align='justify' paragraph sx={{ my: '3.5rem' }}>
              "Welcome to our app, your comprehensive platform for staying informed. With a user-friendly interface, we
              offer a seamless experience for accessing verified news, keeping you updated on the latest events from
              around the world. Trust us to be your reliable source for accurate information, ensuring you're always in
              the know, anytime, anywhere."
            </Typography>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Box sx={{ width: '374px', height: '617px', position: 'relative', m: 'auto', objectFit: 'contain' }}>
              <Image
                src='/images/screenshots/screenshot-2.svg'
                priority
                fill
                // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
