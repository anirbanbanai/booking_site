import Navbar from '@/components/Navbar'
import Homes from "@/components/Homes"
import Image from 'next/image'
import Search from '@/components/Search'

export default function Home() {
  return (
   <main>
    <Navbar/>
    <Homes/>
    <Search/>
   </main>
  )
}
