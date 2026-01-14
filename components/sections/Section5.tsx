'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Lightbulb, 
  Calculator, 
  Code, 
  FileText,
  RefreshCw
} from 'lucide-react'
import ScrollAnimation from '@/components/ScrollAnimation'

type Step = 'input' | 'loading' | 'result'

export default function Section5() {
  const [step, setStep] = useState<Step>('input')
  const [inputText, setInputText] = useState('')
  const [progress, setProgress] = useState(0)
  const [activeStepIndex, setActiveStepIndex] = useState(-1)

  // 예시 선택 옵션
  const exampleOptions = [
    '의료진을 위한 AI 진단 보조',
    '학습 플랫폼',
    '챗봇',
    '재고 관리'
  ]

  // 로딩 단계 정보
  const loadingSteps = [
    {
      icon: Lightbulb,
      title: '아이디어 분석',
      description: 'AI가 프로젝트 아이디어를 분석하고 핵심 요구사항을 파악합니다.'
    },
    {
      icon: Calculator,
      title: '견적 산출',
      description: '개발 범위와 예상 기간을 기반으로 현실적인 견적을 계산합니다.'
    },
    {
      icon: Code,
      title: '스펙 생성',
      description: '최적의 기술 스택과 아키텍처를 설계합니다.'
    },
    {
      icon: FileText,
      title: '제안서 완성',
      description: '상세한 제안서와 프로토타입을 생성합니다.'
    }
  ]

  // Mock 결과 데이터 (실제로는 입력값에 따라 동적으로 생성)
  const resultData = {
    summary: '개인 사용자를 위한 수기 입력 부담 해결 쇼핑몰',
    targetUser: '2030 직장인',
    problem: '불필요한 지출 관리',
    features: [
      '자동 주문 처리 시스템',
      '실시간 재고 관리',
      '결제 통합 (카드, 간편결제)',
      '배송 추적 기능',
      '고객 리뷰 및 평점 시스템'
    ],
    timeline: '4-6주',
    budget: '500만원 ~ 1,000만원'
  }

  // 예시 선택 핸들러
  const handleExampleSelect = (example: string) => {
    setInputText(example)
  }

  // 분석 시작 핸들러
  const handleStartAnalysis = () => {
    if (!inputText.trim()) return
    setStep('loading')
    setProgress(0)
    setActiveStepIndex(-1)
  }

  // 다시하기 핸들러
  const handleReset = () => {
    setStep('input')
    setInputText('')
    setProgress(0)
    setActiveStepIndex(-1)
  }

  // 로딩 애니메이션 효과
  useEffect(() => {
    if (step === 'loading') {
      const duration = 3000 // 3초
      const interval = 30 // 30ms마다 업데이트
      const increment = 100 / (duration / interval) // 각 업데이트마다 증가량
      
      // 프로그레스 바 애니메이션
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return Math.min(prev + increment, 100)
        })
      }, interval)

      // 단계별 활성화 (각 단계당 약 750ms)
      const stepDelays = [0, 750, 1500, 2250]
      stepDelays.forEach((delay, index) => {
        setTimeout(() => {
          setActiveStepIndex(index)
        }, delay)
      })

      // 완료 후 결과 화면으로 전환
      setTimeout(() => {
        setStep('result')
      }, duration)

      return () => clearInterval(progressInterval)
    }
  }, [step])

  return (
    <section 
      id="workbench" 
      className="py-32 bg-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="flex flex-col items-center gap-12">
          {/* Header Section */}
          <ScrollAnimation>
            <div className="flex flex-col items-center text-center w-full max-w-[800px] gap-5">
              {/* Badge */}
              <span className="inline-block px-4 py-2 rounded-full font-pretendard font-semibold text-sm bg-[#4A4CE8] text-white">
                ✨ AI 워크벤치 체험
              </span>

              {/* Title */}
              <h2 className="font-pretendard font-bold text-center text-3xl md:text-4xl text-[#0F1114]">
                시냅스 AI를 직접 체험해보세요
              </h2>

              {/* Description */}
              <p className="font-pretendard text-center text-gray-500 mt-4 text-lg">
                프로젝트 아이디어를 입력하면 AI가 자동으로 스펙·견적·제안서를 생성합니다.
              </p>
            </div>
          </ScrollAnimation>

          {/* Main Card Container */}
          <div className="w-full max-w-4xl">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
              <AnimatePresence mode="wait">
                {/* State 1: Input View */}
                {step === 'input' && (
                  <motion.div
                    key="input"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-8"
                  >
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-pretendard font-bold text-2xl text-[#0F1114]">
                        프로젝트 아이디어 입력
                      </h3>
                      <p className="font-pretendard text-gray-600">
                        아이디어를 입력하면 AI가 자동으로 분석하여 제안서를 생성합니다.
                      </p>
                    </div>

                    {/* Textarea */}
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="개발하고 싶은 프로젝트 아이디어를 자유롭게 입력해주세요..."
                      className="bg-gray-50 border-none rounded-xl p-6 resize-none font-pretendard h-60 text-base text-[#0F1114] focus:outline-none focus:ring-2 focus:ring-[#4A4CE8]/20"
                    />

                    {/* Example Chips */}
                    <div className="flex flex-col gap-4">
                      <label className="font-pretendard text-sm text-gray-600 font-medium">
                        또는 예시 선택
                      </label>
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

                    {/* Start Button */}
                    <button
                      onClick={handleStartAnalysis}
                      disabled={!inputText.trim()}
                      className={`w-full h-14 rounded-xl font-pretendard font-bold text-white transition-all duration-300 ${
                        inputText.trim() 
                          ? 'bg-[#4A4CE8] hover:bg-[#3A3CD8] cursor-pointer' 
                          : 'bg-gray-300 cursor-not-allowed'
                      }`}
                    >
                      AI 분석 시작하기
                    </button>
                  </motion.div>
                )}

                {/* State 2: Loading View */}
                {step === 'loading' && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-8"
                  >
                    {/* Progress Bar Section */}
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <span className="font-pretendard font-semibold text-lg text-[#0F1114]">
                          진행 상황
                        </span>
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

                    {/* Loading Steps */}
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
                              borderColor: isActive ? 'rgba(74, 76, 232, 0.2)' : '#E5E7EB'
                            }}
                            transition={{ duration: 0.5 }}
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
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="flex-shrink-0"
                                >
                                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-[#4A4CE8] border-t-transparent"></div>
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}

                {/* State 3: Result View */}
                {step === 'result' && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-8"
                  >
                    {/* Result Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-pretendard font-bold text-2xl text-[#0F1114]">
                        AI 분석 결과
                      </h3>
                    </div>

                    {/* 한 줄 요약 */}
                    <div className="flex flex-col gap-2">
                      <label className="font-pretendard font-semibold text-sm text-gray-600">
                        한 줄 요약
                      </label>
                      <div className="bg-gray-50 rounded-lg p-4 font-pretendard text-[#0F1114]">
                        {resultData.summary}
                      </div>
                    </div>

                    {/* 타겟 사용자 */}
                    <div className="flex flex-col gap-2">
                      <label className="font-pretendard font-semibold text-sm text-gray-600">
                        타겟 사용자
                      </label>
                      <div className="bg-gray-50 rounded-lg p-4 font-pretendard text-[#0F1114]">
                        {resultData.targetUser}
                      </div>
                    </div>

                    {/* 해결할 문제 */}
                    <div className="flex flex-col gap-2">
                      <label className="font-pretendard font-semibold text-sm text-gray-600">
                        해결할 문제
                      </label>
                      <div className="bg-gray-50 rounded-lg p-4 font-pretendard text-[#0F1114]">
                        {resultData.problem}
                      </div>
                    </div>

                    {/* 필수 기능 */}
                    <div className="flex flex-col gap-2">
                      <label className="font-pretendard font-semibold text-sm text-gray-600">
                        필수 기능 (AI 추천)
                      </label>
                      <ul className="bg-gray-50 rounded-lg p-4 list-disc list-inside font-pretendard space-y-2 text-[#0F1114]">
                        {resultData.features.map((feature, index) => (
                          <li key={index} className="text-sm">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 예상 기간 및 예산 (2컬럼) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="font-pretendard font-semibold text-sm text-gray-600">
                          예상 기간
                        </label>
                        <div className="bg-gray-50 rounded-lg p-4 font-pretendard text-[#0F1114]">
                          {resultData.timeline}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-pretendard font-semibold text-sm text-gray-600">
                          예상 예산
                        </label>
                        <div className="bg-gray-50 rounded-lg p-4 font-pretendard text-[#0F1114]">
                          {resultData.budget}
                        </div>
                      </div>
                    </div>

                    {/* 다시하기 버튼 */}
                    <button
                      onClick={handleReset}
                      className="w-full h-14 rounded-xl font-pretendard font-bold text-white bg-[#4A4CE8] transition-all duration-300 hover:bg-[#3A3CD8] flex items-center justify-center gap-2"
                    >
                      <RefreshCw className="w-5 h-5" />
                      다시 분석하기
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
