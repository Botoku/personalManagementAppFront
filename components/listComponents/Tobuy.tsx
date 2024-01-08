import React from 'react'
import TobuyUploadForm from './TobuyUploadForm'
import TobuyList from './TobuyList'

type Props = {}

const Tobuy = (props: Props) => {
  return (
    <div>
      <TobuyUploadForm/>
      <TobuyList/>
    </div>
  )
}

export default Tobuy