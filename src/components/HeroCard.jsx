import * as React from 'react'
import Image from 'next/image'
import { Box, Card, Grid, Typography } from '@mui/material'
import { SecondaryButton } from '@/components'

export default function HeroCard() {
  return (
    <Card sx={{ background: '#171717', borderRadius: '20px', maxWidth: '75rem', mx: 'auto', my: '3.75rem' }}>
      <Grid>
        <Grid container rowSpacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography variant='h3' sx={{ mt: '3.75rem', ml: '6.25rem' }}>
              Your <em>Reliable</em> News Partner
            </Typography>
            <Typography variant='h5' sx={{ my: '1.25rem' }}>
              Your steadfast companion for credible news coverage!
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SecondaryButton text='Download App' />
              <Image
                src='/images/google-icon.svg'
                height={49}
                width={49}
                style={{ marginLeft: '1rem', marginRight: '1rem' }}
                priority
              />
              <Image src='/images/apple-icon.svg' height={49} width={49} priority />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image src='/images/screenshot-1.svg' height={502} width={227} priority />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}
