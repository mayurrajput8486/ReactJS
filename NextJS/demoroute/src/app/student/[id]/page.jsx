'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const Studentdata = () => {
    const {id} = useParams()
  return (
    <div>Student Details For - {id}</div>
  )
}

export default Studentdata