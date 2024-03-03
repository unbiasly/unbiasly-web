import React from 'react'
import Image from 'next/image'
import { Box, Container, Divider, Grid, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import SecondaryLink from './ui/SecondaryLink'
import PrimaryIconButton from './ui/PrimaryIconButton'

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
              transition: 'box-shadow 0.25s ease-in-out',
              boxShadow: '0px -4px 24px 0px #2124270A',
              '&:hover': { boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
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

                <Box
                  sx={{
                    mt: '1.25rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    maxWidth: '240px',
                  }}
                >
                  <Link href='#'>
                    <Image src='/images/icons/play-store.svg' height={38} width={126} alt='play-store' />
                  </Link>

                  <Link href='#'>
                    <Image src='/images/icons/app-store.svg' height={38} width={126} alt='app-store' />
                  </Link>
                </Box>
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
              transition: 'box-shadow 0.25s ease-in-out',
              boxShadow: '0px -4px 24px 0px #2124270A',
              '&:hover': { boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
            }}
          >
            <Link href='/' prefetch>
              <Box
                sx={{
                  cursor: 'pointer',
                  width: '68px',
                  height: '68px',
                  position: 'relative',
                  objectFit: 'contain',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  transition: 'box-shadow 0.25s ease-in-out',
                  boxShadow: '0px -4px 24px 0px #2124270A',
                  '&:hover': {
                    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Image
                  src='/images/logo.svg'
                  alt='logo'
                  fill
                  priority
                  // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </Box>
            </Link>
            <Typography variant='h6' sx={{ mt: '1rem', fontWeight: 400 }} paragraph>
              Green Park, Delhi India
              <br />
              110016
            </Typography>

            <Box sx={{ mt: '2.5rem', mb: '1.875rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <SecondaryLink
                href='mailto:support@unbiasly.com'
                startIcon='/images/icons/email.svg'
                text='support@unbiasly.com'
              />
              <SecondaryLink href='tel:+919999999999' startIcon='/images/icons/phone.svg' text='+91 99999 99999' />
            </Box>

            <Divider aria-hidden='true' sx={{ border: '1px solid #17171714' }} />

            <Box sx={{ my: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <SecondaryLink text='FAQs' />
              <SecondaryLink text='Contact us' />
              <SecondaryLink text='Privacy policy' />
              <SecondaryLink text='Terms & conditions' />
            </Box>

            <Box sx={{ display: 'flex', gap: '1.25rem' }}>
              <PrimaryIconButton>
                <Image src='/images/icons/instagram.svg' height={32} width={32} alt='instagram icon' />
              </PrimaryIconButton>
              <PrimaryIconButton>
                <Image src='/images/icons/facebook.svg' height={32} width={32} alt='facebook icon' />
              </PrimaryIconButton>
              <PrimaryIconButton>
                <Image src='/images/icons/twitter.svg' height={32} width={32} alt='twitter icon' />
              </PrimaryIconButton>
              <PrimaryIconButton>
                <Image src='/images/icons/linkedin.svg' height={32} width={32} alt='linkedin icon' />
              </PrimaryIconButton>
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
