import * as React from 'react'
import { Box } from '@mui/material'
import {
  Navbar,
  HeroSection,
  InfoSection,
  CompanionSection,
  TeamSection,
  AdvisorSection,
  ContactSection,
  FooterSection,
} from '@/components'

export const metadata = {
  title: 'Unbiasly | News',
  description: 'Absolute Truth, Guaranteed. Your Source for 100% Verified News!',
}

export default function Home() {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        pt: '1.75rem',
        background: '#F4F6F5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Navbar />
      <HeroSection />
      <InfoSection />
      <CompanionSection />
      <TeamSection />
      <AdvisorSection />
      <ContactSection />
      <FooterSection />
    </Box>
  )
}
