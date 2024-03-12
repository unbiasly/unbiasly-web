import React from 'react'
import { Navbar } from '@/components'
import OrderedList from '@/components/ui/OrderedList'
import { Box, Typography } from '@mui/material'

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
      <Navbar />

      <Typography variant='body1' sx={{ fontWeight: 600, fontSize: '1.5rem', mb: '1rem', mt: '3rem' }}>
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

      <Typography variant='body1' sx={{ fontWeight: 600, mt: '1.5rem' }}>
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

      <ol style={{ counterReset: 'list' }}>
        <OrderedList index={1}>
          You are a natural person of legal age to provide consent in your jurisdiction and are mentally competent to
          enter into a binding contract with Us through your use of the App. You represent that you are over the age of
          18. The Company does not permit those under 18 to use the Service.
        </OrderedList>
        <OrderedList index={2}>
          You represent a legal entity that lawfully exists and possesses all the necessary authorizations, permits, and
          approvals to enter into this Agreement and create a binding contract.
        </OrderedList>
        <OrderedList index={3}>You are not prohibited by applicable laws from using the App.</OrderedList>
      </ol>

      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        Your access to and use of the Service is also contingent upon your acceptance of and compliance with the Privacy
        Policy of the Company. Our Privacy Policy describes our policies and procedures regarding the collection, use,
        and disclosure of your personal information when you use the Application or the Website. It also informs you
        about your privacy rights and how the law protects you. Please read our Privacy Policy carefully before using
        our Service.
      </Typography>

      <Typography variant='body1' sx={{ fontWeight: 600, mt: '1.5rem' }}>
        USER ACCOUNTS
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        When you create an account with us, it is essential that you provide accurate, complete, and up-to-date
        information. Failure to do so may result in a breach of the Terms, and we reserve the right to take appropriate
        actions, which may include the termination of your account on our service at our discretion.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        You bear the responsibility for safeguarding the password you use to access our service. This includes being
        vigilant about any activities or actions carried out under your password, whether on our service or via a
        third-party social media service.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        Furthermore, you agree not to disclose your password to any third party, as this is crucial for maintaining the
        security of your account. It's important to note that our company will never solicit your password through
        unsolicited communications.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        In the event that you become aware of a breach of security or unauthorized use of your account, it is your
        responsibility to notify us immediately. This ensures that we can take prompt action to secure your account and
        investigate any potential breaches.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        Additionally, when selecting a username, please adhere to the following guidelines:
      </Typography>
      <Box sx={{ ml: '1.25rem' }}>
        <ul>
          <li>Do not use the name of another person or entity.</li>
          <li>Choose a name that is lawfully available for use.</li>
          <li>
            Avoid selecting a name or trademark that is subject to the rights of another person or entity, unless you
            have obtained the appropriate authorization.
          </li>
          <li>Refrain from using a username that is offensive, vulgar, or obscene.</li>
        </ul>
      </Box>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        Please be aware that we reserve the right to change or remove usernames that do not comply with these
        guidelines.
      </Typography>

      <Typography variant='body1' sx={{ fontWeight: 600, fontSize: '1.25rem', mt: '2rem' }}>
        CONTENT
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', fontWeight: 600, color: '#7C7C7C' }}>
        YOUR RIGHT TO USE
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        To use the App, you must download and install it from Google Play or the App Store. It is also important to
        download and keep the latest App versions and updates provided by us to ensure uninterrupted access.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        Your use of the App must be in compliance with:
      </Typography>

      <ol style={{ counterReset: 'list' }}>
        <OrderedList index={1}>this Agreement, and</OrderedList>
        <OrderedList index={2}>
          any applicable laws, regulations, or widely accepted practices in your country of citizenship, residence, or
          usage.
        </OrderedList>
      </ol>

      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        Any content you create with the App grants us a limited, non-exclusive, transferable, and assignable license to
        use it in accordance with our terms and policies, including the content regulation policy and any agreements
        between you and us. This license may also include our right to sublicense.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        We also provide you with a limited, non-exclusive, non-transferable right to install and use the App on your
        device. Please refrain from copying the App or its components, except for creating a single archival backup
        copy.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        Additionally, we grant you a non-exclusive, non-transferable license to access the content on the App that is
        owned by us. However, for any content owned by a third party, you need to obtain a license from that third
        party. We do not license such third-party content to you, and your usage is subject to the terms and conditions
        set forth by the respective third party.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        You represent and warrant that:
      </Typography>
      <ol style={{ counterReset: 'list' }}>
        <OrderedList index={1}>
          the Content is yours (you own it) or you have the right to use it and grant us the rights and license as
          provided in these Terms, and
        </OrderedList>
        <OrderedList index={2}>
          the posting of your Content on or through the Service does not violate the privacy rights, publicity rights,
          copyrights, contract rights, or any other rights of any person.
        </OrderedList>
      </ol>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Content Restrictions
      </Typography>

      <Box sx={{ ml: '1.25rem' }}>
        <ul>
          <li>
            <b>App Functionality: </b>
            This Application is primarily designed to provide Users with an in-app browsing experience through an
            embedded browser. The core function of the App is to offer Users succinct summaries of third-party content
            within a unified platform, simplifying access to content relevant to their interests.
          </li>
          <li>
            <b> Third-Party Content: </b>
            It's important to note that the App does not store, display, or transmit any content owned by third parties
            on its servers unless we have a valid license to do so or are otherwise authorized by applicable laws.
          </li>
          <li>
            <b>Leaving the App: </b>
            When Users read a summary and decide to access the source of that summary by following an external link,
            they should be aware that they are leaving the App. In such cases, the App and the Company do not assume any
            responsibility, liability, or obligation for any data breaches or damages that may occur as a result of
            using these external sources on third-party websites.
          </li>

          <li>
            <b>App as an Intermediary: </b>
            Users must recognize and accept that the App acts solely as an intermediary. The App does not independently
            generate or provide any content. Therefore, we are not accountable or liable for the accuracy of the content
            or the quality of the summaries that users may access through the App.
          </li>

          <li>
            <b>User Responsibility: </b>
            We are not responsible for the content posted by users of the Service. It is your responsibility to ensure
            that the content you post complies with the Terms and Conditions. You expressly understand and agree that
            you are solely responsible for the Content and for all activity that occurs under your account, whether
            conducted by you or any third party using your account.
          </li>
          <li>
            <b> Prohibited Content: </b>
            You may not transmit any Content that is unlawful, offensive, upsetting, intended to disgust, threatening,
            libelous, defamatory, obscene, or otherwise objectionable. Examples of such objectionable Content include,
            but are not limited to, the following:
          </li>
        </ul>
      </Box>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Content promoting unlawful activities
      </Typography>

      <Box sx={{ ml: '1.25rem' }}>
        <ul>
          <li>
            Defamatory, discriminatory, or mean-spirited content, including references or commentary about religion,
            race, sexual orientation, gender, national/ethnic origin, or other targeted groups.
          </li>
          <li>
            Spam, machine-generated content, unauthorized advertising, chain letters, unsolicited solicitation, or any
            form of gambling.
          </li>
          <li>Content containing viruses, worms, malware, trojan horses, or other disruptive elements.</li>
          <li>
            Infringement on the proprietary rights of any party, including patents, trademarks, trade secrets,
            copyrights, right of publicity, or other rights.
          </li>
          <li>Impersonation of any person or entity, including the Company and its employees or representatives.</li>
          <li>Violation of the privacy of any third party.</li>
          <li>Dissemination of false information and features.</li>
        </ul>
      </Box>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, color: '#7C7C7C' }}>
        Content Management:
      </Typography>
      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        We reserve the right, but not the obligation, to, in its sole discretion, determine whether or not any Content
        is appropriate and complies with these Terms, refuse or remove this Content. We further reserve the right to
        make formatting and edits and change the manner of any Content. We can also limit or revoke the use of the
        Service if You post such objectionable Content. As We cannot control all content posted by users and/or third
        parties on the Service, You agree to use the Service at your own risk. You understand that by using the Service
        You may be exposed to content that You may find offensive, indecent, incorrect or objectionable, and You agree
        that under no circumstances will the Company be liable in any way for any content, including any errors or
        omissions in any content, or any loss or damage of any kind incurred as a result of your use of any content.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, color: '#7C7C7C' }}>
        Content Backups
      </Typography>
      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        While we make regular efforts to back up your Content, it's important to note that we cannot guarantee the
        complete prevention of data loss or corruption.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        Corrupted or invalid backup points may occur for various reasons, including but not limited to Content
        corruption before the backup process or changes that take place during the backup procedure.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        In the event of issues affecting the integrity of Content backups, the Company is committed to providing support
        and investigating any known or discovered problems. However, it's crucial to acknowledge that the Company holds
        no liability concerning the integrity of Content or the successful restoration of Content to a usable state.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        To ensure the security and availability of your Content, we recommend maintaining a comprehensive and accurate
        copy of it in a separate location independent of the Service.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Copyright Policy
      </Typography>
      <Typography variant='body1' align='justify' sx={{ mt: '1rem', fontWeight: 600, color: '#7C7C7C' }}>
        Intellectual Property Infringement
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        We are committed to upholding the intellectual property rights of others. It is our policy to promptly address
        any claim asserting that Content posted on the Service infringes upon a copyright or any other intellectual
        property right.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        If you are the rightful copyright owner or an authorized representative, and you believe that copyrighted work
        is being used on the Service in a manner that constitutes copyright infringement, please follow the steps below.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        <b>Written Notice:</b> Submit your copyright infringement claim in writing to our designated copyright agent.
        You can reach us via email at
        <a href='mailto:info@unbiasly.ai'>
          <i>
            <b> info@unbiasly.ai. </b>
          </i>
        </a>
        In your written notice, provide a detailed description of the alleged infringement.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        Please note that making a false claim of copyright infringement can have legal consequences. You may be held
        accountable for damages, which can include costs and attorneys' fees, if you misrepresent that any Content is
        infringing your copyright.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '1rem', fontWeight: 600, color: '#7C7C7C' }}>
        Intellectual Property
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        The Service, including its original content (excluding Content provided by You or other users), features, and
        functionality, is and will remain the exclusive property of the Company and its licensors.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        The Service is protected by copyright, trademark, and other applicable laws, both in India and other relevant
        jurisdictions.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        The use of our trademarks and trade dress in connection with any product or service is strictly prohibited
        without the prior written consent of the Company, in accordance with Indian intellectual property laws.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        This revised section clarifies the ownership and legal protection of your service's intellectual property,
        taking into account Indian law.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Your Feedback to Us
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        You hereby assign all rights, title, and interest in any Feedback You provide to the Company. In the event that
        such assignment is not legally effective, You agree to grant the Company a non-exclusive, perpetual,
        irrevocable, royalty-free, worldwide right and license to use, reproduce, disclose, sublicense, distribute,
        modify, and exploit such Feedback without any restrictions.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Links to Other Websites
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        Our Service may include links to websites or services operated by third parties that are not owned or controlled
        by the Company.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices
        of any third-party websites or services. You further acknowledge and agree that the Company shall not be held
        responsible or liable, either directly or indirectly, for any damage or loss caused or alleged to be caused by
        or in connection with the use of or reliance on any such content, goods, or services available on or through any
        such third-party websites or services.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        We strongly recommend that You carefully review the terms and conditions, as well as the privacy policies of any
        third-party websites or services You choose to visit.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Termination
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        We reserve the right to terminate or suspend Your Account immediately, without prior notice or liability, for
        any reason whatsoever, including, but not limited to, if You breach these Terms and Conditions.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account,
        You may simply discontinue using the Service.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Limitation of Liability
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers
        under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the
        amount actually paid by You through the Service.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        To the maximum extent permitted by applicable Indian law, in no event shall the Company or its suppliers be
        liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited
        to, damages for loss of profits, loss of data or other information, for business interruption, for personal
        injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service,
        third-party software and/or third-party hardware used with the Service, or otherwise in connection with any
        provision of these Terms), even if the Company or any supplier has been advised of the possibility of such
        damages and even if the remedy fails of its essential purpose.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        Some jurisdictions in India do not allow the exclusion of certain types of warranties or the limitation of
        liability for certain types of damages, which means that some of the above limitations may not apply. In such
        cases, the liability of the Company and its suppliers will be limited to the greatest extent permitted by
        applicable Indian law.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        "AS IS" and "AS AVAILABLE" Disclaimer
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        The Service is provided to You "AS IS" and "AS AVAILABLE," with all faults and defects, without warranty of any
        kind. To the maximum extent permitted under Indian law, the Company, on its own behalf and on behalf of its
        Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties,
        whether express, implied, statutory, or otherwise, with respect to the Service, including all implied warranties
        of merchantability, fitness for a particular purpose, title, and non-infringement. Additionally, it disclaims
        warranties that may arise out of course of dealing, course of performance, usage, or trade practice.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        Without limitation to the foregoing, the Company provides no warranty or undertaking and makes no representation
        of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work
        with any other software, applications, systems, or services, operate without interruption, meet any performance
        or reliability standards, or be error-free, or that any errors or defects can or will be corrected.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        Further, neither the Company nor any of the company's providers make any representation or warranty of any kind,
        express or implied:
      </Typography>
      <ol style={{ counterReset: 'list' }}>
        <OrderedList index={1}>
          As to the operation or availability of the Service, or the information, content, and materials or products
          included thereon;
        </OrderedList>
        <OrderedList index={2}>That the Service will be uninterrupted or error-free;</OrderedList>
        <OrderedList index={3}>
          As to the accuracy, reliability, or currency of any information or content provided through the Service; or
        </OrderedList>
        <OrderedList index={4}>
          That the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of
          viruses, scripts, trojan horses, worms, malware, time bombs, or other harmful components.
        </OrderedList>
      </ol>
      <Typography variant='body1' align='justify' sx={{ mt: '0.5rem', color: '#7C7C7C' }}>
        Some jurisdictions may not allow the exclusion of certain types of warranties or limitations on applicable
        statutory rights of a consumer. In such cases, the exclusions and limitations set forth in this section shall be
        applied to the greatest extent enforceable under Indian law.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Governing Law
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        These Terms and Conditions, your use of our services, and any disputes arising from or relating to these Terms
        and Conditions or your use of the services shall be governed by and construed in accordance with the laws of the
        Republic of India, including but not limited to:
      </Typography>
      <Box sx={{ ml: '1.25rem' }}>
        <ul>
          <li>The Indian Information Technology Act, 2000, including any subsequent amendments.</li>
          <li>The Indian Personal Data Protection Act, 2023, including any subsequent amendments.</li>
          <li>
            Other applicable Indian laws, regulations, and guidelines related to information technology, data
            protection, and privacy.
          </li>
        </ul>
      </Box>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        You agree that any legal action, suit, or proceeding initiated by you or us shall be subject to the exclusive
        jurisdiction of the courts located within Delhi. By using our services, you consent to the exclusive
        jurisdiction and venue of these courts, and you waive any objections to such jurisdiction and venue. If you
        access our services from a location outside India, you are responsible for compliance with all applicable local
        laws.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '1rem', fontWeight: 600, color: '#7C7C7C' }}>
        Disputes Resolution
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally
        by contacting the Company.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Disputes Resolution
      </Typography>
      <Typography variant='body1' align='justify' sx={{ mt: '1rem', fontWeight: 600, color: '#7C7C7C' }}>
        Severability
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and
        interpreted to accomplish the objectives of that provision to the greatest extent possible under applicable law,
        and the remaining provisions will continue in full force and effect.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ mt: '1rem', fontWeight: 600, color: '#7C7C7C' }}>
        Waiver
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        Except as provided herein, the failure to exercise a right or to require performance of an obligation under
        these Terms shall not affect a party's ability to exercise such right or require such performance at any time
        thereafter, nor shall the waiver of a breach constitute a waiver of any subsequent breach.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Changes to These Terms and Conditions
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is
        considered material, We will make reasonable efforts to provide at least 30 days' notice before the new terms
        take effect. What constitutes a material change will be determined at Our sole discretion. It is your
        responsibility check these Terms of Use periodically for changes.
      </Typography>
      <Typography variant='body1' align='justify' sx={{ color: '#7C7C7C' }}>
        By continuing to access or use Our Service after these revisions become effective, You agree to be bound by the
        updated terms. If You do not agree to the new terms, in whole or in part, please discontinue using the website
        and the Service.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Entire Agreement
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        This Terms of Use including the Privacy Policy, as amended from time to time, constitutes the entire agreement
        between you and the company and supersedes all prior understandings between you and company relating to the
        subject matter herein.
      </Typography>

      <Typography variant='body1' align='justify' sx={{ mt: '2rem', fontWeight: 600, fontSize: '1.25rem' }}>
        Notice for Grievances
      </Typography>
      <Typography variant='body1' align='justify' sx={{ my: '0.5rem', color: '#7C7C7C' }}>
        If you have any grievances in relation to the platform or its Content, you may send a notice to the Grievance
        Redressal Officer at{' '}
        <a href='mailto:info@unbiasly.ai'>
          <i>
            <b> info@unbiasly.ai. </b>
          </i>
        </a>
        We shall try to resolve the grievances as per timelines prescribed as per timelines prescribed in applicable
        law.
      </Typography>
    </Box>
  )
}
