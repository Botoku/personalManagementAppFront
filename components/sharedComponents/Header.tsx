'use client'
import React, {useContext} from 'react'
import Link from 'next/link'
import { ContentDisplayContext } from '../helpers/ContextProvider'
import { UserButton } from '@clerk/nextjs'
type Props = {}

const Header = (props: Props) => {
const {setSection, activeSection} = useContext(ContentDisplayContext)
  return (
    <div className='border-lime-100 border-b-2  '>
      <UserButton />
        <ul className='px-2 flex justify-between  gap-1 sm:gap-2 mb-2 w-[80%] mx-auto'>
            <li className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${activeSection === "todo" && "bg-purple-700"}`} onClick={() =>setSection && setSection('todo')}>To Do</li>
            <li className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${activeSection === "tobuy" && "bg-purple-700"}`} onClick={() => setSection && setSection('tobuy')}>To Buy</li>
            <li className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${activeSection === "expenses" && "bg-purple-700"}`} onClick={() => setSection && setSection('expenses')}>Expenses</li>
            <li className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${activeSection === "meals" && "bg-purple-700"}`} onClick={() => setSection && setSection('meals')}>Meals</li>
            <li className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${activeSection === "ideas" && "bg-purple-700"}`} onClick={() => setSection && setSection('ideas')}>Ideas</li>
        </ul>
    </div>
  )
}

export default Header