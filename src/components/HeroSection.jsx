'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Container, Typography } from '@mui/material'
import { illustration } from '@/assets'
import PrimaryIconButton from './ui/PrimaryIconButton'
import PrimaryButton from './ui/PrimaryButton'
import { useCustomMediaQueries } from '@/hooks'

export default function HeroSection() {
  const { sm, wideMobileMode, mobileMode } = useCustomMediaQueries()

  return (
    <Box sx={{ width: '100vw', px: { xs: '1rem', sm: '2rem', md: '4rem' }, position: 'relative' }}>
      {wideMobileMode ? (
        <></>
      ) : (
        <Image
          src={illustration}
          alt='illustration'
          sizes='100vw'
          style={{
            width: '28%',
            height: 'auto',
            maxWidth: '429px',
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}
        />
      )}
      <Container maxWidth='lg' disableGutters sx={{ mx: 'auto', mt: wideMobileMode ? '2.5rem' : '4.5rem' }}>
        <Box>
          <Typography variant='h2' align={wideMobileMode ? 'center' : 'start'} paragraph sx={{ mb: '1.25rem' }}>
            <b> The News app that is </b>
            <br />
            <em> Reliable, Honest, Worthy Of Your Time</em>
          </Typography>

          <Typography
            variant='h6'
            align={wideMobileMode ? 'center' : 'start'}
            paragraph
            sx={{ mb: '2rem', mx: mobileMode ? '1rem' : 'none' }}
          >
            Experience the power of unbiased news, personalized to your {sm && <br />} taste. Engage with the community
            and stay-informed
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: wideMobileMode ? 'center' : 'start',
            }}
          >
            <Link href='#'>
              <PrimaryButton text='Download App' />
            </Link>

            <Link href='https://play.google.com/store/apps/details?id=com.unbiasly.app' target="_blank">
              <PrimaryIconButton>
                <Image src='/images/icons/google-icon.svg' height={46} width={46} priority alt='google-icon' />
              </PrimaryIconButton>
            </Link>

            <Link href='https://apps.apple.com/in/app/unbiasly/id6477892005' target="_blank">
              <PrimaryIconButton>
                <Image src='/images/icons/apple-icon.svg' height={46} width={46} priority alt='apple-icon' />
              </PrimaryIconButton>
            </Link>
          </Box>
        </Box>

        <Typography variant='h4' align='center' sx={{ mt: wideMobileMode ? '2rem' : '10rem', mb: '2.5rem' }}>
          Absolute Truth, Guaranteed
          <br />
          Source Of 100% Verified News!
        </Typography>
      </Container>
    </Box>
  )
}
