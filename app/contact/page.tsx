'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <main className="pt-32 pb-20 bg-dark-bg">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow mb-4 text-[#b9b2a7]"
        >
          Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="section-title mb-8 text-[#f4f0e8] max-w-4xl"
        >
          Let us discuss your upcoming project.
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <form onSubmit={handleSubmit} className="space-y-7 mt-2 surface-panel p-6 sm:p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block text-xs uppercase tracking-[0.14em] text-dark-muted mb-3">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            <label className="block text-xs uppercase tracking-[0.14em] text-dark-muted mb-3">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.29 }}
          >
            <label className="block text-xs uppercase tracking-[0.14em] text-dark-muted mb-3">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 }}
          >
            <label className="block text-xs uppercase tracking-[0.14em] text-dark-muted mb-3">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full"
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.43 }}
            type="submit"
            className="btn-primary"
          >
            Send Message
          </motion.button>
          </form>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="space-y-5"
          >
            <div className="surface-panel p-3">
              <div className="relative aspect-[4/5] overflow-hidden" data-cursor="image">
                <Image
                  src="/images/wal_172619-city-9599967_1920.jpg"
                  alt="Studio city context"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
            <div className="surface-panel p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[#9f978b] mb-3">Studio</p>
              <p className="text-[#e3ddd3]">New Delhi</p>
              <p className="text-[#b2aa9d] mt-2">hello@jayshrivastava.com</p>
              <p className="text-[#b2aa9d] mt-1">+91 98765 43210</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  )
}