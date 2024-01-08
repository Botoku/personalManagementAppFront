import React from 'react'
import MealUploadForm from './MealUploadForm'
import MealList from './MealList'

type Props = {}

const Meals = (props: Props) => {
  return (
    <div>
      <MealUploadForm />
      <MealList />
    </div>
  )
}

export default Meals