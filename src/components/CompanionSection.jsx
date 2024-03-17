'use client'

import React from 'react'
import Image from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { useCustomMediaQueries } from '@/hooks'
import { screenshot } from '@/assets'

export default function CompanionSection() {
  const { lg } = useCustomMediaQueries()

  return (
    <Box sx={{ width: '100vw', background: '#171717', px: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
      <Container maxWidth='lg' disableGutters sx={{ mx: 'auto', position: 'relative' }}>
        <Box sx={{ my: lg ? '5rem' : 0, width: lg ? '58%' : '100%' }}>
          <Typography variant='h1' align={lg ? 'start' : 'center'} sx={{ mt: '2.5rem' }}>
            How we are your trusted news companion?
          </Typography>
          <Typography
            variant='h5'
            color='#FFFFFF'
            align={lg ? 'justify' : 'center'}
            paragraph
            sx={{ my: lg ? '3rem' : '1.5rem', lineHeight: 1.75 }}
          >
            "Welcome to our app, your comprehensive platform for staying informed. With a user-friendly interface, we
            offer a seamless experience for accessing verified news, keeping you updated on the latest events from
            around the world. Trust us to be your reliable source for accurate information, ensuring you're always in
            the know, anytime, anywhere."
          </Typography>
        </Box>

        {lg ? (
          <Image
            src={screenshot}
            alt='screenshot'
            sizes='100vw'
            style={{
              width: '34%',
              height: 'auto',
              maxWidth: '429px',
              position: 'absolute',
              right: '-2rem',
              top: lg ? 0 : '-1rem',
            }}
          />
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: '2.5rem' }}>
            <Image
              src={screenshot}
              alt='screenshot'
              sizes='100vw'
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  )
}
