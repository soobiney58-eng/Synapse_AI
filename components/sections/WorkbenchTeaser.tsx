'use client'

import Link from 'next/link'
import { ArrowRight, HelpCircle, Users, AlertTriangle } from 'lucide-react'

export default function WorkbenchTeaser() {
  const questions = [
    {
      icon: HelpCircle,
      question: '무엇을 만들고 싶으신가요?',
      answer: '모바일 앱, 웹 서비스, AI 솔루션 등',
    },
    {
      icon: Users,
      question: '누구를 위한 서비스인가요?',
      answer: '타겟 사용자와 사용 시나리오',
    },
    {
      icon: AlertTriangle,
      question: '어떤 문제를 해결하나요?',
      answer: '핵심 가치와 차별화 포인트',
    },
  ]

  const sampleBrief = {
    projectName: '피트니스 트래킹 앱',
    features: ['운동 기록', '칼로리 추적', '친구와 챌린지'],
    timeline: '3개월',
    budget: '5,000만원',
  }

  return (
    <section id="portfolio" className="py-24 bg-bg-soft dark:bg-dark-bg-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Question Cards */}
          <div className="space-y-6">
            <h2 className="t-h2 font-bold text-text-strong dark:text-dark-text-strong">Workbench</h2>
            <p className="t-body text-text-muted dark:text-dark-text-muted mb-8">
              간단한 질문으로 시작하는 아이디어 구체화
            </p>
            <div className="flex flex-col gap-6">
              {questions.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-card bg-bg dark:bg-dark-bg border border-line dark:border-dark-line shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="t-h3 text-text-strong dark:text-dark-text-strong">{item.question}</h3>
                      <p className="t-body text-text-muted dark:text-dark-text-muted">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Real-time Brief Card */}
          <div className="space-y-6">
            <h2 className="t-h2 font-bold text-text-strong dark:text-dark-text-strong">실시간 브리프</h2>
            <div className="p-8 rounded-card bg-bg dark:bg-dark-bg border-2 border-primary/20 shadow-md">
              <div className="space-y-6">
                <div>
                  <label className="t-caption text-text-muted dark:text-dark-text-muted block mb-2">
                    프로젝트명
                  </label>
                  <p className="t-h3 text-text-strong dark:text-dark-text-strong">{sampleBrief.projectName}</p>
                </div>

                <div>
                  <label className="t-caption text-text-muted dark:text-dark-text-muted block mb-2">
                    주요 기능
                  </label>
                  <ul className="space-y-2">
                    {sampleBrief.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="t-body text-text-strong dark:text-dark-text-strong">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-line dark:border-dark-line">
                  <div>
                    <label className="t-caption text-text-muted dark:text-dark-text-muted block mb-1">
                      예상 기간
                    </label>
                    <p className="t-body font-medium text-text-strong dark:text-dark-text-strong">
                      {sampleBrief.timeline}
                    </p>
                  </div>
                  <div>
                    <label className="t-caption text-text-muted dark:text-dark-text-muted block mb-1">
                      예상 예산
                    </label>
                    <p className="t-body font-medium text-text-strong dark:text-dark-text-strong">
                      {sampleBrief.budget}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/experience"
            className="group inline-flex items-center justify-center h-12 px-6 rounded-ui bg-primary text-white font-medium transition-all duration-160 hover:bg-primary-600 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2"
          >
            시냅스 체험하기
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}

