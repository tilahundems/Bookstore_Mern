import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading() {
  return (
    <div className='justify-content-center align-items-center  d-flex '>
      <Spinner animation="grow" />
    </div>
  )
}

export default Loading