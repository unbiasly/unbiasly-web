import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        p: { xs: '1rem', sm: '2rem', md: '4rem' },
        background: '#F4F6F5',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant='body1' sx={{ fontWeight: 600, fontSize: '1.5rem', mb: '1rem' }}>
        Terms and Conditions ("Terms")
      </Typography>
      <Typography variant='body1' sx={{ fontWeight: 600, fontSize: '1.25rem', mt: '1.5rem' }}>
        Introduction and Interpretation:
      </Typography>
      <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        Our Terms and Conditions were last updated on 12<sup>th</sup> March. This Terms of Use is a written binding
        agreement and an electronic record under the Information Technology Act, 2000 and rules thereunder as applicable
        and the amended provisions pertaining to electronic records in various statutes under applicable Indian laws.
        Please read these terms and conditions carefully before using Our Service.
      </Typography>

      <Typography variant='body1' sx={{ fontWeight: 600, mt: '1rem' }}>
        Interpretation
      </Typography>
      <Typography variant='body1' align='justify' paragraph sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The
        following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </Typography>

      <Typography variant='body1' sx={{ fontWeight: 600, mt: '0.5rem' }}>
        Definitions
      </Typography>
      <Typography variant='body1' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        For the purposes of these Terms and Conditions:
      </Typography>
      <Box sx={{ ml: '1.25rem' }}>
        <ul>
          <li>
            <b>"Affiliate"</b> means an entity that controls, is controlled by or is under common control with a party,
            where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled
            to vote for election of directors or other managing authority.
          </li>
          <li>
            <b>"Account"</b> means a unique account created for You to access our Service or parts of our Service.
          </li>
          <li>
            <b>"App"</b> means the Unbiasly mobile platform downloadable from Google Play/AppStore, and owned by Us,
            including any updates thereof.
          </li>
          <li>
            <b>"AppStore"</b> means the service provided by Apple Inc. and/or its affiliates, a third -party, through
            which You may use in order to download the App.
          </li>
          <li>
            <b>"AppStore Terms And Conditions"</b> means terms and conditions that apply to the use of AppStore platform
            and as available at{' '}
            <a href='https://www.apple.com/legal/internet-services/itunes/us/terms.html'>
              https://www.apple.com/legal/internet-services/itunes/us/terms.html.
            </a>
          </li>
          <li>
            <b>"Company"</b>” (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to
            Triverge Inside Private Limited
          </li>
          <li>
            <b>"Country"</b> refers to India.
          </li>
          <li>
            <b>"Content"</b> refers to content such as text, images, or other information that can be posted, uploaded,
            linked to or otherwise made available by You, regardless of the form of that content.
          </li>
          <li>
            <b>"Device"</b> means any device that can access the Service such as a computer, a cell phone or a digital
            tablet.
          </li>
          <li>
            <b>"Feedback"</b> means feedback, innovations or suggestions sent by You regarding the attributes,
            performance or features of our Service.
          </li>
          <li>
            <b>"Google Play"</b> means the service provided by Google Ireland Limited, a third party, and/or its
            affiliates, which You may use in order to download the App.
          </li>
          <li>
            <b>"Google Play Terms of Service"</b> means terms of service that apply to the use of Google Play and
            available at{' '}
            <a href='https://play.google.com/about/play-terms.html'>https://play.google.com/about/play-terms.html </a> .
          </li>
          <li>
            <b>"Service"</b> refers to the Website.
          </li>
          <li>
            <b>"Sponsored Content"</b>means content distinct from other regular editorial content displayed on the App,
            in the form of audio, video, text and/or image media which supports a third party Person’s brand message or
            views that is readily identifiable upfront through distinct and distinguishable font, colour, display
            schemes and/or usage of disclaiming words other than those used for regular editorial content (such as
            <b>“Ad”, “Powered by”, “Sponsored by”, “With”, “Advertorial”</b> and such other phrase of like meaning).
          </li>
          <li>
            <b>"Terms and Conditions"</b> (also referred as "Terms") mean these Terms and Conditions that form the
            entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions
            Agreement was generated by{' '}
            <a href='https://www.termsfeed.com/terms-conditions-generator/'>
              TermsFeed Terms and Conditions Generator.
            </a>
          </li>
          <li>
            <b>"Third-party Media Service"</b> means any services or content (including data, information, products or
            services) provided by a third-party that may be displayed, included or made available by the Service.
          </li>
          <li>
            <b>"User” or “You” or “Your"</b> refers to a person who has accepted this Agreement in order to download and
            use the App.
          </li>
        </ul>
      </Box>

      <Typography variant='body1' sx={{ fontWeight: 600, mt: '1rem' }}>
        ACKNOWLEDGEMENT
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        These are the Terms and Conditions that govern the use of this Service and establish the agreement between You
        and the Company. These Terms and Conditions outline the rights and obligations of all Users concerning the use
        of the Service.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        Your access to and use of the Service are contingent upon your acceptance of and compliance with these Terms and
        Conditions. These Terms and Conditions are applicable to all visitors, users, and others who access or use the
        Service.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        By accessing or using the Service, you signify your agreement to be bound by these Terms and Conditions. If you
        disagree with any part of these Terms and Conditions, you may not access the Service.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        You may only accept this Agreement if:
      </Typography>
    </Box>
  )
}
