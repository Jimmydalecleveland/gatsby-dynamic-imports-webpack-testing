import React from 'react'
import * as Material from 'emotion-icons/material'
console.log(Material)

const Bravo = () => {
  return Object.keys(Material).map((icon, index) => {
    if (index > 10) return null
    const MaterialIcon = Material[icon]
    return <MaterialIcon />
  })
}

export default Bravo