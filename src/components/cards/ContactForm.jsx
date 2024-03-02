'use client'

import * as React from 'react'
import { Box } from '@mui/material'
import PrimaryTextField from '../ui/PrimaryTextField'
import PrimaryButton from '../ui/PrimaryButton'
import { useSnackbarNotifier } from '@/hooks'
import PrimaryTextArea from '../ui/PrimaryTextArea'

export default function ContactForm() {
  const { showErrorMessage } = useSnackbarNotifier()

  const [fields, setFields] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
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
    if (!fields.message.trim()) {
      newErrors.message = 'Message is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (validateForm()) {
      showErrorMessage('API connection pending.')
    }
  }

  return (
    <Box sx={{ my: '3.25rem' }}>
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
        placeholder='Email Address'
        value={fields.email}
        onChange={handleInputChange}
        error={!!errors.email}
        helperText={errors.email}
        mt
      />
      <PrimaryTextArea
        name='message'
        placeholder='Message'
        value={fields.message}
        onChange={handleInputChange}
        error={!!errors.message}
        helperText={errors.message}
        mt
      />
      <PrimaryButton text='Send Message' large onClick={handleSubmit} />
    </Box>
  )
}
