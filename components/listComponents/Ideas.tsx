import React from 'react'
import IdeaUploadForm from './IdeaUploadForm'
import IdeaList from './IdeaList'

type Props = {}

const Ideas = (props: Props) => {
  return (
    <div>
      <IdeaUploadForm />
      <IdeaList />
    </div>
  )
}

export default Ideas