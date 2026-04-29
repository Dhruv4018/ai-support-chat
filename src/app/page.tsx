import HomeClient from '@/components/HomeClient'
import { getSession } from '@/lib/getSession'
import React from 'react'

const Page = async () => {
  const session = await getSession()

  return (
    <HomeClient email={session?.user?.email ?? ""} />
  )
}

export default Page