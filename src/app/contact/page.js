'use client'

import * as React from 'react'
import Image from 'next/image'
import { Box, Container, Grid } from '@mui/material'
import PrimaryTextField from '@/components/ui/PrimaryTextField'
import PrimaryTextArea from '@/components/ui/PrimaryTextArea'
import SecondaryButton from '@/components/ui/SecondaryButton'
import { illustration2 } from '@/assets'
import { useCustomMediaQueries, useSnackbarNotifier } from '@/hooks'
import { postDataToApi } from '@/api/api'

export default function Home() {
  const { md } = useCustomMediaQueries()
  const { showErrorMessage, showSuccessMessage } = useSnackbarNotifier()

  const [fields, setFields] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFields((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }))

    if (name === 'email') {
      const emailError = !value.trim()
        ? 'Email is required'
        : !/^\S+@\S+\.\S+$/.test(value)
        ? 'Invalid email address'
        : ''
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailError,
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!fields.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!fields.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(fields.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!fields.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    if (!fields.message.trim()) {
      newErrors.message = 'Message is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const result = await postDataToApi('contact-us', fields)
        showSuccessMessage('Your Inquiry has been sent successfully!')
        setFields({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } catch (error) {
        showErrorMessage('An unexpected error occurred. Please try again later.')
      }
    }
  }

  return (
    <Box sx={{ width: '100vw', px: { xs: '1rem', sm: '2rem', md: '4rem' } }}>
      <Container
        maxWidth='lg'
        disableGutters
        sx={{ mx: 'auto', mt: { xs: '0.5rem', sm: '2rem' }, mb: { xs: '2rem', sm: '5rem' } }}
      >
      <span style={{display:"flex", justifyContent:"center",fontSize:"30px",fontWeight:600 ,marginBottom:"20px"}}>Contact Us</span>
        <Grid container sx={{ position: 'relative' }}>
          {md && (
            <Grid item xs={12} md={6}>
              <Image
                src={illustration2}
                alt='illustration'
                sizes='100vw'
                style={{
                  width: '50%',
                  height: 'auto',
                  maxWidth: '500px',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                }}
              />
            </Grid>
          )}
          <Grid item xs={12} md={6}>
       
        <div style={{marginBottom:"10px",display:"flex",flexDirection:"column",gap:"5px"}}>
         <div>
          <span style={{fontWeight: "bold",fontSize:"18px"}}>Name :</span>
          <span  style={{fontWeight: "500",fontSize:"17px",marginLeft:"2px"}}>Adv. Gagandeep Kaur</span>
         </div>
         <div>
          <span style={{fontWeight: "bold",fontSize:"18px"}}>Email :</span>
          <span  style={{fontWeight: "500",fontSize:"17px",marginLeft:"2px"}}>gagandeep@unbiasly.ai</span>
         </div>      
        </div>
            <PrimaryTextField
              name='name'
              placeholder='Name'
              value={fields.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <PrimaryTextField
              name='email'
              placeholder='E-mail Id'
              value={fields.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              mt
            />
            <PrimaryTextField
              name='subject'
              placeholder='How can we Help'
              value={fields.subject}
              onChange={handleInputChange}
              error={!!errors.subject}
              helperText={errors.subject}
              mt
            />
            <PrimaryTextArea
              name='message'
              placeholder='Hello there, I would like to talk about how to...'
              value={fields.message}
              onChange={handleInputChange}
              error={!!errors.message}
              helperText={errors.message}
              mt
            />
            <SecondaryButton text='Send an Inquiry Now' onClick={handleSubmit} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
