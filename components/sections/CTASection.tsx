'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="t-h2 font-bold text-white">
            지금 당장, <span className="text-white">아이디어</span>를 구체화해 보세요.
          </h2>
          <p className="t-body text-white text-lg opacity-90">
            AI 특화 풀스택 팀이 여러분의 아이디어를 현실로 만들어드립니다.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center h-14 px-8 rounded-ui bg-white text-primary font-medium text-lg transition-all duration-160 hover:bg-gray-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 shadow-md"
            >
              문의하기
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

