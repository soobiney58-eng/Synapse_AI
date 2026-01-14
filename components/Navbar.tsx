'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Set active section based on pathname
    if (pathname === '/contact') {
      setActiveSection('contact')
      return
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Active section detection (only on home page)
      if (pathname === '/') {
        const sections = ['home', 'services', 'process', 'pricing']
        const scrollPosition = window.scrollY + 100

        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i])
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handleHomeClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { id: 'home', label: '홈' },
    { id: 'services', label: 'About' },
    { id: 'process', label: '프로세스' },
    { id: 'pricing', label: '가격안내' },
    { id: 'contact', label: '문의하기' },
  ]

  return (
    <>
      <nav
        aria-label="주요 네비게이션"
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-nav w-[calc(100%-3rem)] max-w-container h-[75px] transition-all duration-240 backdrop-blur-[24px] rounded-[48px] py-5 px-8 ${
          isScrolled
            ? 'bg-[linear-gradient(135deg,rgba(255,255,255,0.6),rgba(255,255,255,0.55))] shadow-[0_6px_24px_rgba(17,24,39,0.12)]'
            : 'bg-[linear-gradient(135deg,rgba(255,255,255,0.45),rgba(250,245,255,0.4))] shadow-[0_4px_16px_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="t-h3 font-semibold text-primary hover:text-primary-600 transition-colors tracking-wide"
            onClick={handleHomeClick}
          >
            SYNAPSE AI
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-9" aria-label="주요 메뉴">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id
              const isContact = item.id === 'contact'
              const isHome = item.id === 'home'

              if (isContact) {
                return (
                  <Link
                    key={item.id}
                    href="/contact"
                    className={`t-body transition-colors relative group ${
                      isActive
                        ? 'text-primary font-semibold tracking-wide'
                        : 'text-text hover:text-text-strong'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-160 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                )
              }

              if (isHome) {
                return (
                  <Link
                    key={item.id}
                    href="/"
                    onClick={handleHomeClick}
                    className={`t-body transition-colors relative group ${
                      isActive
                        ? 'text-primary font-semibold tracking-wide'
                        : 'text-text hover:text-text-strong'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-160 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                )
              }

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`t-body transition-colors relative group ${
                    isActive
                      ? 'text-primary font-semibold tracking-wide'
                      : 'text-text hover:text-text-strong'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-160 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* CTA Button */}
            <Link
              href="/experience"
              className="inline-flex items-center justify-center h-12 px-5 bg-primary text-white font-medium transition-all duration-160 hover:bg-primary-600 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-ui"
            >
              시냅스 체험하기
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-6 h-6 text-text-strong hover:text-primary transition-colors"
              aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-dropdown bg-overlay backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="모바일 메뉴"
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-modal bg-bg shadow-lg md:hidden transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between mb-8">
                <span className="t-h3 font-semibold text-primary tracking-wide">SYNAPSE AI</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-6 h-6 text-text-strong hover:text-primary transition-colors"
                  aria-label="메뉴 닫기"
                >
                  <X className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>
              <nav className="space-y-4" aria-label="모바일 메뉴">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id
                  const isContact = item.id === 'contact'
                  const isHome = item.id === 'home'

                  if (isContact) {
                    return (
                      <Link
                        key={item.id}
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block w-full text-left t-body transition-colors py-2 ${
                          isActive
                            ? 'text-primary font-semibold tracking-wide'
                            : 'text-text-strong hover:text-primary'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    )
                  }

                  if (isHome) {
                    return (
                      <Link
                        key={item.id}
                        href="/"
                        onClick={handleHomeClick}
                        className={`block w-full text-left t-body transition-colors py-2 ${
                          isActive
                            ? 'text-primary font-semibold tracking-wide'
                            : 'text-text-strong hover:text-primary'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    )
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left t-body transition-colors py-2 ${
                        isActive
                          ? 'text-primary font-semibold tracking-wide'
                          : 'text-text-strong dark:text-dark-text-strong hover:text-primary'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </button>
                  )
                })}
              </nav>
              <div className="pt-4 border-t border-line space-y-4">
                <Link
                  href="/experience"
                  className="block w-full text-center h-12 px-5 bg-primary text-white font-medium transition-all duration-160 hover:bg-primary-600 active:scale-[0.98] rounded-ui"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  시냅스 체험하기
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
