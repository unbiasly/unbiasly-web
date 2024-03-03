'use client'

import * as React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

const useCustomMediaQueries = () => {
  const lg = useMediaQuery('(min-width:1200px)')
  const md = useMediaQuery('(min-width:900px)')
  const sm = useMediaQuery('(min-width:600px)')
  const mobileMode = useMediaQuery('(max-width:599px)')
  const wideMobileMode = useMediaQuery('(max-width:749px)')
  const tabletMode = useMediaQuery('(min-width:600px) and (max-width:899px)')

  return { lg, md, sm, mobileMode, wideMobileMode, tabletMode }
}

export default useCustomMediaQueries
