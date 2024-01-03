import Content from '@/components/sharedComponents/Content'
import Header from '@/components/sharedComponents/Header'
import Image from 'next/image'

export default async function Home() {

  return (
    <main className="lg:flex min-h-screen pt-10">
      <Header />
      <section className=''>
        <Content />
      </section>
    </main>
  )
}
