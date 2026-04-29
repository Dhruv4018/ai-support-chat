'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react"
import axios from "axios"
import { useRouter } from 'next/navigation'

const HomeClient = ({ email }: { email: string }) => {

  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    window.location.href = "/api/auth/login"

  }

  const firstLetter = email?.[0]?.toUpperCase() ?? ""



  const [open, setOpen] = useState(false)


  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains((e.target as Node)))
        setOpen(false)





    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])


  const navigate = useRouter()


  const features = [
    {
      title: "Plug & Play",
      desc: "Add the chatbot to your site with a single script tag."
    },
    {
      title: "Admin Controlled",
      desc: "You chatbot exactly what the AI knows and answer."
    },
    {
      title: "Always Online",
      desc: "Your customers get instant support 24/7."
    }
  ]

  const handleLogOut = () => {
    window.location.href = "/api/auth/logout"
    window.location.href = "/"

  }


  return (
    <div className='min-h-screen bg-linear-0-to-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden'>
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200'
      >
        <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
          <div className='text-lg font-semibold tracking-tight '>Support <span className='text-zinc-400'>Ai</span></div>
          {email ? <div className='relative' ref={popupRef}>

            <button className='w-10 h-10 rounded-full bg-black  text-white flex items-center justify-center font-semibold hover:scale-105 transition cursor-pointer' onClick={() => setOpen(!open)}>


              {firstLetter}
            </button>

            {open &&
              (<motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className='absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden' >
                <button className='w-full text-left px-4 py-3 text-sm hover:bg-zinc-100' onClick={() => navigate.push("/dashboard")}>Dashboard</button>
                <button className='block px-4 py-3 text-sm text-red-600 hover:bg-zinc-100 cursor-pointer' onClick={handleLogOut}>Logout</button>

              </motion.div>
              )}





          </div> : <button
            className='px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disable:opacity-60 flex items-center gap-2 cursor-pointer'
            onClick={handleLogin}

            disabled={loading}


          >
            {loading ? "Loading..." : "Login"}
          </button>}


        </div>

      </motion.div>

      <section className='pt-36 pb-28 px-6'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}

          >

            <h1 className='text-4xl md:text-5xl font-semibold leading-tight'>
              AI Customer Support  <br />
              Built for Modern <br /> Websites
            </h1>
            <p className='mt-6 text-lg text-zinc-600 max-w-xl'>
              Add a powerful AI chatbot to your website in minutes.
              <br />
              Let your customer get instant answers using your own buiness knowledge
            </p>
            <div className="mt-10 flex gap-4">

              {email ? <button className=' cursor-pointer px-7 py-3 rounded-xl bg-black text-white font-medium hover:bg-zinc-800 transition disable:opacity-60' onClick={() => navigate.push("/dashboard")}>Get to Dashboard</button> : <button className=' cursor-pointer px-7 py-3 rounded-xl bg-black text-white font-medium hover:bg-zinc-800 transition disable:opacity-60' onClick={handleLogin}>Get Started</button>}


              <a href='#feature' className="px-7 py-3 rounded-xl border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition cursor-pointer" >Learn More </a>
            </div>


          </motion.div>



          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='relative'
          >

            <div className='rounded-2xl bg-white shadow-2xl border border-zinc-200 p-6'>
              <div className='text-sm text-zinc-500 mb-3'>
                Live Chat Preview

              </div>

              <div className='space-y-4'>
                <div className='bg-black text-white rounded-lg px-4 py-2 text-sm ml-auto w-fit'>
                  Do you offer cash on delivery?
                </div>
                <div className='bg-zinc-100 rounded-lg px-4 py-2 text-sm w-fit'>
                  yes , Cash Delivery is available.
                </div>

              </div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className='absolute -bottom-6 -right-6 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-xl'

              >
                🗨

              </motion.div>



            </div>

          </motion.div>
        </div>

      </section >

      <section id='feature' className='bg-zinc-50 py-28 px-6 border-t border-zinc-200'>
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}

            className='text-3xl font-semibold text-center'  >
            Why Business Choose SupportAI
          </motion.h2>

          <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 '>
            {features.map((f, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-200"
              >
                <h1 className='text-lg font-medium'>
                  {f.title}
                </h1>
                <p className='mt-3 text-zinc-600 text-sm'>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      <footer className='py-10 text-center text-sm text-zinc-500'>
        &copy;{new Date().getFullYear()} SupportAI. All rights reserved.
      </footer>

    </div>
  )
}

export default HomeClient