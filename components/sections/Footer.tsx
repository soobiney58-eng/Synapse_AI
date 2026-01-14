'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo */}
          <h3 className="t-h3 text-white">Synapse AI</h3>
          
          {/* Email */}
          <div>
            <p className="t-body text-white">contact@synapse.ai</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="t-caption text-gray-400 text-center">
            © 2024 Synapse AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

