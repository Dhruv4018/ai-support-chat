import DashboardClient from '@/components/DashboardClient'
import { getSession } from '@/lib/getSession'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
  const session = await getSession()

  // ✅ Token expired ya login nahi — login page pe bhejo
  if (!session || !session.user?.id) {
    redirect('/api/auth/login')
  }

  return (
    <>
      <DashboardClient ownerId={session.user.id}/>
    </>
  )
}

export default page