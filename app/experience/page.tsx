'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, Calculator, Code, FileText, RefreshCw } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'

type Step = 'input' | 'loading' | 'result'
type FeatureAnalysis = {
  category: 'commerce' | 'community' | 'o2o' | 'default'
  features: string[]
}
type ResultData = {
  summary: string
  targetUser: string
  problem: string
  features: string[]
  timeline: string
  budget: string
}

const analyzeFeatures = (input: string): FeatureAnalysis => {
  const lowered = input.toLowerCase()
  const includes = (words: string[]) => words.some((w) => lowered.includes(w))

  // 1) 쇼핑몰/커머스
  if (includes(['쇼핑', 'shopping', '판매', '상점', '마켓', '거래', '중고'])) {
    return {
      category: 'commerce',
      features: [
        '소셜 로그인 및 회원가입',
        '상품 검색 및 카테고리 필터링',
        '장바구니 및 PG 결제 연동',
        '주문 내역 및 배송 추적',
        '사용자 리뷰 및 평점 시스템',
      ],
    }
  }

  // 2) 커뮤니티/SNS
  if (includes(['커뮤니티', 'sns', '소셜', '채팅', '모임', '게시판', '소통'])) {
    return {
      category: 'community',
      features: [
        '프로필 설정 및 관리',
        '실시간 1:1 및 그룹 채팅',
        '게시글/댓글 작성 및 좋아요',
        '친구 추가 및 팔로우 관리',
        '푸시 알림 및 활동 피드',
      ],
    }
  }

  // 3) 예약/O2O/위치기반
  if (includes(['예약', '배달', '지도', '위치', '여행', '매칭'])) {
    return {
      category: 'o2o',
      features: [
        '실시간 위치 기반 지도 서비스',
        '날짜/시간 예약 및 캘린더 연동',
        '실시간 서비스 상태 추적',
        'GPS 기반 주변 탐색',
        'QR 코드 티켓/인증 시스템',
      ],
    }
  }

  // 4) 기본/관리/기타
  return {
    category: 'default',
    features: [
      '관리자(Admin) 대시보드',
      '데이터 통계 및 리포트',
      '회원 등급 및 권한 관리',
      '공지사항 및 고객센터(FAQ)',
      '통합 검색 기능',
    ],
  }
}

const generateResult = (input: string): ResultData => {
  const text = input.trim()
  const lowered = text.toLowerCase()
  const contains = (keywords: string[]) => keywords.some((k) => lowered.includes(k))
  const featureAnalysis = analyzeFeatures(text)

  if (contains(['쇼핑', 'shopping', '판매', '상점', '마켓'])) {
    return {
      summary: text || '쇼핑/커머스 서비스 기획',
      targetUser: '쇼핑 고객',
      problem: text || '상품 판매/구매 경험 개선',
      features: featureAnalysis.features,
      timeline: '6-10주',
      budget: '1,500만원 ~',
    }
  }

  if (contains(['게시판', '소통', '채팅', '모임', '커뮤니티', 'sns'])) {
    return {
      summary: text || '커뮤니티/SNS 서비스 기획',
      targetUser: '커뮤니티 사용자',
      problem: text || '소통 및 참여 활성화',
      features: featureAnalysis.features,
      timeline: '5-8주',
      budget: '1,000만원 ~',
    }
  }

  if (contains(['예약', '배달', '지도', '위치', '여행', '매칭'])) {
    return {
      summary: text || '예약/O2O 서비스 기획',
      targetUser: '온디맨드 사용자',
      problem: text || '실시간 매칭·예약 편의 제공',
      features: featureAnalysis.features,
      timeline: '5-9주',
      budget: '1,200만원 ~',
    }
  }

  return {
    summary: text || 'AI 기반 서비스 기획',
    targetUser: '일반 사용자',
    problem: text || '비즈니스 효율화 및 사용자 가치 제공',
    features: featureAnalysis.features,
    timeline: '4-6주',
    budget: '800만원 ~',
  }
}

export default function ExperiencePage() {
  const [step, setStep] = useState<Step>('input')
  const [inputText, setInputText] = useState('')
  const [progress, setProgress] = useState(0)
  const [activeStepIndex, setActiveStepIndex] = useState(-1)
  const [analysisResult, setAnalysisResult] = useState<ResultData>(() => generateResult(''))
  const router = useRouter()

  const exampleOptions = ['의료진을 위한 AI 진단 보조', '학습 플랫폼', '챗봇', '재고 관리']

  const loadingSteps = [
    {
      icon: Lightbulb,
      title: '아이디어 분석',
      description: 'AI가 프로젝트 아이디어를 분석하고 핵심 요구사항을 파악합니다.',
    },
    {
      icon: Calculator,
      title: '견적 산출',
      description: '개발 범위와 예상 기간을 기반으로 현실적인 견적을 계산합니다.',
    },
    {
      icon: Code,
      title: '스펙 생성',
      description: '최적의 기술 스택과 아키텍처를 설계합니다.',
    },
    {
      icon: FileText,
      title: '제안서 완성',
      description: '상세한 제안서와 프로토타입을 생성합니다.',
    },
  ]

  const resultData = {
    summary: '개인 사용자를 위한 수기 입력 부담 해결 쇼핑몰',
    targetUser: '2030 직장인',
    problem: '불필요한 지출 관리',
    features: [
      '자동 주문 처리 시스템',
      '실시간 재고 관리',
      '결제 통합 (카드, 간편결제)',
      '배송 추적 기능',
      '고객 리뷰 및 평점 시스템',
    ],
    timeline: '4-6주',
    budget: '500만원 ~ 1,000만원',
  }

  const handleExampleSelect = (example: string) => {
    setInputText(example)
  }

  const handleStartAnalysis = () => {
    if (!inputText.trim()) return
    setAnalysisResult(generateResult(inputText))
    setStep('loading')
    setProgress(0)
    setActiveStepIndex(-1)
  }

  const handleReset = () => {
    setStep('input')
    setInputText('')
    setProgress(0)
    setActiveStepIndex(-1)
  }

  const handleContactClick = () => {
    const { summary, targetUser, problem, timeline, budget, features } = analysisResult
    const params = new URLSearchParams()
    params.set('summary', summary)
    params.set('targetUser', targetUser)
    params.set('problem', problem)
    params.set('timeline', timeline)
    params.set('budget', budget)
    params.set('features', features.join(','))
    if (inputText.trim()) {
      params.set('input', inputText.trim())
    }
    router.push(`/contact?${params.toString()}`)
  }

  useEffect(() => {
    if (step === 'loading') {
      const duration = 5500
      const interval = 40
      const increment = 100 / (duration / interval)

      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return Math.min(prev + increment, 100)
        })
      }, interval)

      const stepDelays = [0, 1500, 3000, 4500]
      stepDelays.forEach((delay, index) => {
        setTimeout(() => {
          setActiveStepIndex(index)
        }, delay)
      })

      const toResult = setTimeout(() => {
        setStep('result')
      }, duration)

      return () => {
        clearInterval(progressInterval)
        clearTimeout(toResult)
      }
    }
  }, [step])

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col items-center gap-6 text-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full font-pretendard font-semibold text-sm bg-[#4A4CE8] text-white">
              ✨ AI 워크벤치 체험
            </span>
            <h1 className="font-pretendard font-bold text-3xl md:text-4xl text-[#0F1114]">
              시냅스 AI를 직접 체험해보세요
            </h1>
            <p className="font-pretendard text-gray-600 text-lg max-w-3xl mt-1">
              프로젝트 아이디어를 입력하면 AI가 스펙·견적·제안서를 자동으로 생성합니다. 입력 → 로딩 →
              결과 흐름을 경험해보세요.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-10 lg:p-12">
            <AnimatePresence mode="wait">
              {step === 'input' && (
                <motion.div
                  key="input"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-8"
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h3 className="font-pretendard font-bold text-2xl text-[#0F1114]">프로젝트 아이디어 입력</h3>
                    <p className="font-pretendard text-gray-600">
                      아이디어를 입력하면 AI가 자동으로 분석하여 제안서를 생성합니다.
                    </p>
                  </div>

                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="개발하고 싶은 프로젝트 아이디어를 자유롭게 입력해주세요..."
                    className="h-60 bg-gray-50 border-none rounded-xl p-6 resize-none font-pretendard text-base text-[#0F1114] focus:outline-none focus:ring-2 focus:ring-[#4A4CE8]/20"
                  />

                  <div className="flex flex-col gap-4 text-left">
                    <label className="font-pretendard text-sm text-gray-600 font-medium">또는 예시 선택</label>
                    <div className="grid grid-cols-2 gap-3">
                      {exampleOptions.map((example, index) => (
                        <button
                          key={index}
                          onClick={() => handleExampleSelect(example)}
                          className="bg-white border border-gray-200 rounded-xl p-4 text-left font-pretendard transition-all duration-300 hover:border-[#4A4CE8] hover:bg-[#4A4CE8]/5 text-[#0F1114] text-sm font-medium"
                        >
                          {example}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleStartAnalysis}
                    disabled={!inputText.trim()}
                    className={`w-full h-14 rounded-xl font-pretendard font-bold text-white transition-all duration-300 ${
                      inputText.trim() ? 'bg-[#4A4CE8] hover:bg-[#3A3CD8]' : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    AI 분석 시작하기
                  </button>
                </motion.div>
              )}

              {step === 'loading' && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-8"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="font-pretendard font-semibold text-lg text-[#0F1114]">진행 상황</span>
                      <span className="font-pretendard font-semibold text-lg text-[#4A4CE8]">
                        {Math.round(progress)}% 완료
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#4A4CE8] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {loadingSteps.map((stepItem, index) => {
                      const Icon = stepItem.icon
                      const isActive = index <= activeStepIndex
                      const isCurrent = index === activeStepIndex

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0.5 }}
                          animate={{
                            opacity: isActive ? 1 : 0.5,
                            backgroundColor: isActive ? 'rgba(74, 76, 232, 0.1)' : '#FFFFFF',
                            borderColor: isActive ? 'rgba(74, 76, 232, 0.2)' : '#E5E7EB',
                          }}
                          transition={{ duration: 0.4 }}
                          className="rounded-xl p-6 border"
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                isActive ? 'bg-[#4A4CE8]' : 'bg-gray-100'
                              }`}
                            >
                              <Icon
                                className={`w-6 h-6 transition-colors duration-300 ${
                                  isActive ? 'text-white' : 'text-gray-400'
                                }`}
                              />
                            </div>
                            <div className="flex-1">
                              <h3
                                className={`font-pretendard font-bold mb-2 transition-colors duration-300 text-lg ${
                                  isActive ? 'text-[#0F1114]' : 'text-gray-400'
                                }`}
                              >
                                {stepItem.title}
                              </h3>
                              <p
                                className={`font-pretendard transition-colors duration-300 text-sm ${
                                  isActive ? 'text-gray-600' : 'text-gray-400'
                                }`}
                              >
                                {stepItem.description}
                              </p>
                            </div>
                            {isCurrent && (
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-shrink-0">
                                <div className="animate-spin rounded-full h-6 w-6 border-2 border-[#4A4CE8] border-t-transparent" />
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {step === 'result' && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-8"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-pretendard font-bold text-2xl text-[#0F1114]">AI 분석 결과</h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-pretendard font-semibold text-sm text-gray-600">한 줄 요약</label>
                    <div className="bg-gray-50 rounded-lg p-4 font-pretendard text-[#0F1114]">{analysisResult.summary}</div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-pretendard font-semibold text-sm text-gray-600">타겟 사용자</label>
                    <div className="bg-gray-50 rounded-lg p-4 font-pretendard text-[#0F1114]">{analysisResult.targetUser}</div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-pretendard font-semibold text-sm text-gray-600">해결할 문제</label>
                    <div className="bg-gray-50 rounded-lg p-4 font-pretendard text-[#0F1114]">{analysisResult.problem}</div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-pretendard font-semibold text-sm text-gray-600">필수 기능 (AI 추천)</label>
                    <ul className="bg-gray-50 rounded-lg p-4 list-disc list-inside font-pretendard space-y-2 text-[#0F1114]">
                      {analysisResult.features.map((feature, index) => (
                        <li key={index} className="text-sm">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-pretendard font-semibold text-sm text-gray-600">예상 기간</label>
                      <div className="bg-gray-50 rounded-lg p-4 font-pretendard text-[#0F1114]">{analysisResult.timeline}</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-pretendard font-semibold text-sm text-gray-600">예상 예산</label>
                      <div className="bg-gray-50 rounded-lg p-4 font-pretendard text-[#0F1114]">{analysisResult.budget}</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleContactClick}
                      className="w-full h-14 rounded-xl font-pretendard font-bold border border-gray-300 bg-white text-gray-700 transition-all duration-300 hover:bg-gray-50 flex items-center justify-center"
                    >
                      문의하기
                    </button>
                    <button
                      onClick={handleReset}
                      className="w-full h-14 rounded-xl font-pretendard font-bold text-white bg-[#4A4CE8] transition-all duration-300 hover:bg-[#3A3CD8] flex items-center justify-center gap-2"
                    >
                      <RefreshCw className="w-5 h-5" />
                      다시 분석하기
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

