import React from 'react'
import Image from 'next/image'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'

export default function FooterSection() {
  return (
    <Container maxWidth='lg' disableGutters sx={{ mx: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
      <Grid container spacing={6} sx={{ mt: '3.75rem', mb: '2.5rem' }}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              borderRadius: '24px',
              background: `linear-gradient(0deg, #171717, #171717), linear-gradient(180deg, #171717 80%, rgba(0, 0, 0, 0) 83%, rgba(255, 255, 255, 0.3) 100%)`,
              p: '2.5rem 2.5rem 0 2.5rem',
              height: '100%',
            }}
          >
            <Typography variant='h3' align='center' sx={{ fontSize: '2.5rem', fontWeight: 600 }} paragraph>
              Become a <br />
              smart news reader today
            </Typography>
            <Typography
              variant='h5'
              align='center'
              sx={{ fontSize: '0.875rem', mt: '1.25rem', mx: '2.75rem', display: 'flex', alignItems: 'center' }}
            >
              <Image src='/images/left-dash.svg' height={1.5} width={191} alt='left-dash' />
              Get Unbiasly
              <Image src='/images/right-dash.svg' height={1.5} width={191} alt='right-dash' />
            </Typography>
            <Grid container spacing={2} sx={{ mt: '2.75rem' }}>
              <Grid item xs={12} sm={6}>
                <Image src='/images/qr.svg' height={240} width={240} alt='left-dash' />
                <Image
                  src='/images/links.svg'
                  height={38}
                  width={248}
                  alt='left-dash'
                  style={{ marginTop: '1.25rem' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Image
                  src='/images/screenshots/screenshot-1.svg'
                  height={372}
                  width={227}
                  priority
                  style={{ marginBottom: '-8px' }}
                  alt='screenshot'
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              borderRadius: '24px',
              background: '#FFFFFF',
              p: '1.25rem 6.5rem 2.5rem 2.5rem',
              height: '100%',
            }}
          >
            <Image src='/images/logo.svg' alt='logo' height={68} width={68} priority />
            <Typography variant='h6' sx={{ mt: '1rem', fontWeight: 400 }} paragraph>
              Green Park, Delhi India
              <br />
              110016
            </Typography>

            <Box sx={{ mt: '2.5rem', mb: '1.875rem' }}>
              <Typography variant='body1' sx={{ fontWeight: 500, display: 'flex', alignItems: 'center' }} paragraph>
                <Image
                  src='/images/icons/email.svg'
                  height={19}
                  width={19}
                  alt='email icon'
                  style={{ marginRight: '0.625rem' }}
                />
                support@unbiasly.com
              </Typography>

              <Typography variant='body1' sx={{ fontWeight: 500, display: 'flex', alignItems: 'center' }} paragraph>
                <Image
                  src='/images/icons/phone.svg'
                  height={19}
                  width={19}
                  alt='phone icon'
                  style={{ marginRight: '0.625rem' }}
                />
                +91 9999999999
              </Typography>
            </Box>
            <Divider aria-hidden='true' sx={{ border: '1px solid #17171714' }} />
            <Box sx={{ my: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Typography variant='body1' sx={{ fontWeight: 500 }} paragraph>
                FAQs
              </Typography>
              <Typography variant='body1' sx={{ fontWeight: 500 }} paragraph>
                Contact us
              </Typography>
              <Typography variant='body1' sx={{ fontWeight: 500 }} paragraph>
                Privacy policy
              </Typography>
              <Typography variant='body1' sx={{ fontWeight: 500 }} paragraph>
                Terms & conditions
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '1.25rem' }}>
              <Image src='/images/icons/instagram.svg' height={32} width={32} alt='instagram icon' />
              <Image src='/images/icons/facebook.svg' height={32} width={32} alt='facebook icon' />
              <Image src='/images/icons/twitter.svg' height={32} width={32} alt='twitter icon' />
              <Image src='/images/icons/linkedin.svg' height={32} width={32} alt='linkedin icon' />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Typography variant='body1' align='center' sx={{ fontSize: '0.875rem', mb: '4rem', color: '#7C7C7C' }}>
        Made with 💜 in Delhi 🇮🇳 India | © 2024 by Unbiasly Pvt Ltd.
      </Typography>
    </Container>
  )
}
