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
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#F4F6F5' }}>
        <Navbar />
        <HeroSection />
        <InfoSection />
        <CompanionSection />
        <TeamSection />
        {/* <AdvisorSection /> */}
        {/* <ContactSection /> */}
        {/* <FooterSection /> */}
      </Box>
    </>
  )
}
