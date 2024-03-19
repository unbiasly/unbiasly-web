import * as React from 'react'
import { Box } from '@mui/material'
import { Navbar, HeroSection, InfoSection, CompanionSection, TeamSection, FooterSection } from '@/components'

export const metadata = {
  title: 'Unbiasly | News',
  description: 'Absolute Truth, Guaranteed. Your Source for 100% Verified News!',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <CompanionSection />
      <TeamSection />
    </>
  )
}
