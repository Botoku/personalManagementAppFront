'use client'
import React, {useContext} from 'react'
import Link from 'next/link'
import { ContentDisplayContext } from '../helpers/ContextProvider'
type Props = {}

const Header = (props: Props) => {
const {setSection} = useContext(ContentDisplayContext)
  return (
    <div className=''>
        <ul className=' flex lg:flex-col gap-1 sm:gap-2 border-lime-100 border-b-2 mb-2 lg:border-b-0 lg:border-r-2'>
            <li onClick={() =>setSection && setSection('todo')}>To Do</li>
            <li onClick={() => setSection && setSection('tobuy')}>To Buy</li>
            <li onClick={() => setSection && setSection('expenses')}>Expenses</li>
            <li onClick={() => setSection && setSection('meals')}>Meals</li>
            <li onClick={() => setSection && setSection('ideas')}>Ideas</li>
        </ul>
    </div>
  )
}

export default Header