import { redirect } from 'next/navigation'

function Home() {
  return (redirect('/en'))
}

export default Home