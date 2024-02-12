import Content from '@/components/sharedComponents/Content'
import Header from '@/components/sharedComponents/Header'
import Image from 'next/image'
import { auth } from '@clerk/nextjs'
import {redirect} from 'next/navigation'

export default async function Home() {
  const {userId} = auth()

  if(userId) redirect('/user')

  return (
    <main className=" min-h-screen w-full">
      <section className='mt-4'>
        <h2>Welcome to your personal management app. Please sign in or sign up to use the app</h2>
      </section>
    </main>
  )
}
