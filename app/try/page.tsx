'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Sparkles, Loader2, CheckCircle2 } from 'lucide-react'
import Footer from '@/components/sections/Footer'

type Step = 'input' | 'loading' | 'result'

interface AnalysisResult {
  summary: string
  targetCustomer: string
  features: string[]
  estimatedDuration: string
  estimatedCost: string
}

const exampleIdeas = [
  '의료진을 위한 AI 진단 보조 시스템',
  '학생들을 위한 개인화 학습 플랫폼',
  '고객 문의 자동 응답 AI 챗봇',
  '소상공인을 위한 재고 관리 도구',
]

const loadingItems = [
  '프로젝트 범위 분석 중…',
  '기술 스택 설정 중…',
  '예상 일정 및 비용 산출 중…',
]

// Mock 분석 결과 생성 함수
const generateMockResult = (idea: string): AnalysisResult => {
  return {
    summary: `${idea} 프로젝트는 현대적인 기술 스택을 활용하여 사용자 중심의 솔루션을 제공합니다. AI와 데이터 분석을 결합한 혁신적인 접근 방식으로 시장에서 차별화된 가치를 창출할 수 있습니다.`,
    targetCustomer: '중소기업, 스타트업, 교육 기관, 의료 기관',
    features: [
      '사용자 친화적인 인터페이스',
      '실시간 데이터 분석 및 인사이트 제공',
      '모바일 및 웹 플랫폼 지원',
      'AI 기반 자동화 기능',
      '보안 및 개인정보 보호',
    ],
    estimatedDuration: '8-12주',
    estimatedCost: '2,000만원 ~ 3,500만원',
  }
}

export default function TryPage() {
  const router = useRouter()
  const [step, setStep] = useState<Step>('input')
  const [projectIdea, setProjectIdea] = useState('')
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentLoadingItem, setCurrentLoadingItem] = useState(0)

  // 로딩 단계 처리
  useEffect(() => {
    if (step === 'loading') {
      setLoadingProgress(0)
      setCurrentLoadingItem(0)

      // 프로그레스 바 애니메이션
      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 2
        })
      }, 60)

      // 로딩 항목 순환
      const itemInterval = setInterval(() => {
        setCurrentLoadingItem((prev) => (prev + 1) % loadingItems.length)
      }, 1000)

      // 3초 후 결과 단계로 전환
      const resultTimer = setTimeout(() => {
        setAnalysisResult(generateMockResult(projectIdea))
        setStep('result')
        clearInterval(progressInterval)
        clearInterval(itemInterval)
      }, 3000)

      return () => {
        clearInterval(progressInterval)
        clearInterval(itemInterval)
        clearTimeout(resultTimer)
      }
    }
  }, [step, projectIdea])

  const handleStartAnalysis = () => {
    if (projectIdea.trim()) {
      setStep('loading')
    }
  }

  const handleDownloadProposal = () => {
    // TODO: 제안서 PDF 다운로드 또는 새 페이지로 이동
    alert('제안서 다운로드 기능은 준비 중입니다.')
  }

  const handleStartProject = () => {
    // 프로젝트 정보를 쿼리 파라미터로 전달하여 상담 페이지로 이동
    const params = new URLSearchParams({
      idea: projectIdea,
      summary: analysisResult?.summary || '',
      duration: analysisResult?.estimatedDuration || '',
      cost: analysisResult?.estimatedCost || '',
    })
    router.push(`/contact?${params.toString()}`)
  }

  return (
    <main className="min-h-screen">
      <section className="pt-16 pb-24 bg-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-h5 font-pretendard text-text-muted dark:text-dark-text-muted hover:text-text-strong dark:hover:text-dark-text-strong transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} aria-hidden="true" />
            홈으로 돌아가기
          </Link>

          <div className="max-w-2xl mx-auto">
            {/* ① 입력 단계 */}
            {step === 'input' && (
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <h1 className="text-h1 font-bold font-pretendard text-text-strong dark:text-dark-text-strong leading-[1.5]">
                    개발하고 싶은 프로젝트<br />
                    아이디어를 입력해주세요
                  </h1>
                  <p className="text-h5 font-pretendard text-text-muted dark:text-dark-text-muted">
                    AI가 프로젝트를 분석하여 상세한 스펙과 견적을 제안해드립니다
                  </p>
                </div>

                {/* Form Section */}
                <div className="bg-bg-soft dark:bg-dark-bg-soft rounded-card p-8 border border-line dark:border-dark-line space-y-8">
                  {/* 프로젝트 아이디어 텍스트 영역 */}
                  <div>
                    <label htmlFor="idea" className="block text-h5 font-medium font-pretendard text-text-strong dark:text-dark-text-strong mb-2">
                      프로젝트 아이디어
                    </label>
                    <textarea
                      id="idea"
                      value={projectIdea}
                      onChange={(e) => setProjectIdea(e.target.value)}
                      rows={6}
                      className="w-full px-4 py-4 rounded-ui border border-line dark:border-dark-line bg-bg dark:bg-dark-bg text-text-strong dark:text-dark-text-strong text-body font-pretendard placeholder:text-text-muted dark:placeholder:text-dark-text-muted focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 transition-all resize-none"
                      placeholder="프로젝트 아이디어를 자유롭게 입력해주세요..."
                    />
                  </div>

                  {/* 예시 아이디어 버튼들 */}
                  <div>
                    <p className="text-h5 font-medium font-pretendard text-text-strong dark:text-dark-text-strong mb-5">
                      또는 아래 예시 중 하나를 선택하세요
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {exampleIdeas.map((example, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setProjectIdea(example)}
                          className="text-left px-4 py-3 rounded-ui border border-line dark:border-dark-line bg-bg dark:bg-dark-bg text-body font-pretendard text-text-strong dark:text-dark-text-strong hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-160"
                        >
                          {example}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={handleStartAnalysis}
                    disabled={!projectIdea.trim()}
                    className="w-full h-14 px-6 rounded-ui bg-primary text-white text-button font-medium font-pretendard transition-all duration-160 hover:bg-primary-600 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
                  >
                    AI 분석 시작하기
                  </button>
                </div>
              </div>
            )}

            {/* ② 로딩 단계 */}
            {step === 'loading' && (
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <h1 className="text-h1 font-bold font-pretendard text-text-strong dark:text-dark-text-strong">
                    AI가 분석 중입니다…
                  </h1>
                  <p className="text-h5 font-pretendard text-text-muted dark:text-dark-text-muted">
                    프로젝트 요구사항을 분석하고 최적의 솔루션을 도출하고 있습니다
                  </p>
                </div>

                {/* Loading Section */}
                <div className="bg-bg-soft dark:bg-dark-bg-soft rounded-card p-8 border border-line dark:border-dark-line space-y-6">
                  {/* 프로그레스 바 */}
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-line dark:bg-dark-line rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
                        style={{ width: `${loadingProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* 진행 중인 항목 리스트 */}
                  <ul className="space-y-3">
                    {loadingItems.map((item, index) => (
                      <li
                        key={index}
                        className={`flex items-center gap-3 text-body font-pretendard transition-opacity duration-300 ${
                          index === currentLoadingItem
                            ? 'text-text-strong dark:text-dark-text-strong opacity-100'
                            : 'text-text-muted dark:text-dark-text-muted opacity-50'
                        }`}
                      >
                        {index === currentLoadingItem ? (
                          <Loader2 className="w-5 h-5 text-primary animate-spin" strokeWidth={1.5} />
                        ) : (
                          <div className="w-5 h-5" />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* ③ 결과 단계 */}
            {step === 'result' && analysisResult && (
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 dark:bg-success/20 border border-success/20 dark:border-success/30">
                    <CheckCircle2 className="w-5 h-5 text-success" strokeWidth={1.5} />
                    <span className="text-h5 font-medium font-pretendard text-success">분석 완료</span>
                  </div>
                  <h1 className="text-h1 font-bold font-pretendard text-text-strong dark:text-dark-text-strong">
                    AI 분석 결과
                  </h1>
                  <p className="text-h5 font-pretendard text-text-muted dark:text-dark-text-muted">
                    프로젝트에 대한 상세 분석 결과입니다
                  </p>
                </div>

                {/* Result Card */}
                <div className="bg-bg-soft dark:bg-dark-bg-soft rounded-card p-8 border border-line dark:border-dark-line space-y-6">
                  {/* 프로젝트 요약 */}
                  <div>
                    <h3 className="text-h3 font-bold font-pretendard text-text-strong dark:text-dark-text-strong mb-3">
                      프로젝트 요약
                    </h3>
                    <p className="text-body font-pretendard text-text-strong dark:text-dark-text-strong leading-relaxed">
                      {analysisResult.summary}
                    </p>
                  </div>

                  {/* 타깃 고객 */}
                  <div>
                    <h3 className="text-h3 font-bold font-pretendard text-text-strong dark:text-dark-text-strong mb-3">
                      타깃 고객
                    </h3>
                    <p className="text-body font-pretendard text-text-strong dark:text-dark-text-strong">
                      {analysisResult.targetCustomer}
                    </p>
                  </div>

                  {/* 주요 기능 리스트 */}
                  <div>
                    <h3 className="text-h3 font-bold font-pretendard text-text-strong dark:text-dark-text-strong mb-3">
                      주요 기능
                    </h3>
                    <ul className="space-y-2">
                      {analysisResult.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-body font-pretendard text-text-strong dark:text-dark-text-strong">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 예상 기간 및 비용 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-line dark:border-dark-line">
                    <div>
                      <label className="text-h5 font-medium font-pretendard text-text-muted dark:text-dark-text-muted block mb-1">
                        예상 기간
                      </label>
                      <p className="text-h3 font-bold font-pretendard text-text-strong dark:text-dark-text-strong">
                        {analysisResult.estimatedDuration}
                      </p>
                    </div>
                    <div>
                      <label className="text-h5 font-medium font-pretendard text-text-muted dark:text-dark-text-muted block mb-1">
                        예상 비용
                      </label>
                      <p className="text-h3 font-bold font-pretendard text-text-strong dark:text-dark-text-strong">
                        {analysisResult.estimatedCost}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleStartProject}
                    className="flex-1 h-14 px-6 rounded-ui bg-primary text-white text-button font-medium font-pretendard transition-all duration-160 hover:bg-primary-600 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                  >
                    이 프로젝트로 시작하기
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadProposal}
                    className="flex-1 h-14 px-6 rounded-ui border border-line dark:border-dark-line bg-bg dark:bg-dark-bg text-button font-medium font-pretendard text-text-strong dark:text-dark-text-strong transition-all duration-160 hover:bg-bg-soft dark:hover:bg-dark-bg-soft active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                  >
                    제안서 보기
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
