

import React from 'react'
import { useApi } from './useApi.js'

export const PrincipalCharacters = () => {
  const {loading, data} = useApi("https://example.com/api/principal")  
  
  return (
    <div>
     ...
    </div>
  )
}