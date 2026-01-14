'use client'

import { Check } from 'lucide-react'
import Link from 'next/link'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Section4() {
  const plans = [
    {
      name: '스타터',
      price: '500만원',
      description: '소규모 프로젝트를 위한 기본 패키지',
      planKey: 'starter',
      features: [
        '기본 기능 명세서',
        '개발 견적서',
        '기술 스택 제안',
        '1회 수정 가능',
      ],
      popular: false,
    },
    {
      name: '스탠다드',
      price: '1,500만원',
      description: '중규모 프로젝트를 위한 추천 패키지',
      planKey: 'standard',
      features: [
        '상세 기능 명세서',
        '정확한 개발 견적서',
        '기술 스택 및 아키텍처 설계',
        '팀 구성 제안',
        '3회 수정 가능',
        '프로젝트 관리 도구 제공',
      ],
      popular: true,
    },
    {
      name: '커스텀',
      price: '맞춤형',
      description: '대규모 프로젝트를 위한 맞춤 솔루션',
      planKey: 'custom',
      features: [
        '전체 프로젝트 기획',
        '상세 기술 문서',
        '정확한 예산 및 일정 산정',
        '전문 개발 팀 구성',
        '무제한 수정',
        '전담 PM 배정',
        '24/7 기술 지원',
      ],
      popular: false,
    },
  ]

  const commonFeatures = [
    '상세 제안서',
    '무료 상담',
    '기술 검토',
    '프로젝트 계획',
  ]

  return (
    <section 
      id="pricing" 
      className="py-32 bg-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1918px' }}>
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-[360px] gap-8 sm:gap-12 md:gap-[70px]">
          {/* Header Section */}
          <ScrollAnimation>
            <div className="flex flex-col items-center text-center w-full max-w-[507px]" style={{ gap: '20px' }}>
              <h2 
                className="font-pretendard font-bold text-center dark:text-dark-text-strong whitespace-normal md:whitespace-nowrap"
                style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  letterSpacing: '-0.9px',
                  lineHeight: '50.4px',
                  color: '#0F1114',
                }}
              >
                예측 가능한 비용, 신뢰할 수 있는 결과
              </h2>
              <div 
                className="font-pretendard text-center dark:text-dark-text-muted leading-relaxed"
                style={{
                  fontSize: '22px',
                  fontWeight: 500,
                  letterSpacing: '-0.55px',
                  lineHeight: '30.8px',
                  color: 'rgba(15, 17, 20, 0.8)',
                }}
              >
                <span className="block whitespace-normal md:whitespace-nowrap">프로젝트 범위에 따라 명확하게 산정된 요금제입니다.</span>
                <span className="block">모든 요금에는 상세 제안서와 상담이 포함됩니다.</span>
              </div>
            </div>
          </ScrollAnimation>

          {/* Pricing Cards */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[26px] w-full">
            {plans.map((plan, index) => (
              <ScrollAnimation key={index}>
                <div
                  className="bg-white dark:bg-dark-bg-elevated rounded-[20px] flex flex-col w-full md:w-auto transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    width: plan.popular ? '366px' : '340px',
                    maxWidth: '100%',
                    minHeight: '583px',
                    padding: '24px',
                    border: plan.popular 
                      ? '2px solid #4A4CE8' 
                      : '1px solid #DFE1E5',
                    borderRadius: '20px',
                    gap: '40px',
                    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.08)',
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.popular) {
                      // 스타터와 커스텀 카드는 호버 시 진한 회색으로만 변경
                      e.currentTarget.style.borderColor = '#9CA3AF'
                      e.currentTarget.style.borderWidth = '2px'
                    } else {
                      // 스탠다드 카드는 이미 보라색 테두리이므로 더 진하게
                      e.currentTarget.style.borderColor = '#3A3CD8'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.popular) {
                      e.currentTarget.style.borderColor = '#DFE1E5'
                      e.currentTarget.style.borderWidth = '1px'
                    } else {
                      e.currentTarget.style.borderColor = '#4A4CE8'
                    }
                  }}
                >
                  {/* Plan Header */}
                  <div className="flex flex-col" style={{ gap: '28px' }}>
                    <div className="flex flex-col" style={{ gap: '8px' }}>
                      <h3 
                        className="font-pretendard font-bold dark:text-dark-text-strong"
                        style={{
                          fontSize: '24px',
                          fontWeight: 700,
                          color: '#0F1114',
                          lineHeight: '1.3',
                        }}
                      >
                        {plan.name}
                      </h3>
                      <p 
                        className="font-pretendard dark:text-dark-text-muted"
                        style={{
                          fontSize: '16px',
                          fontWeight: 400,
                          color: 'rgba(15, 17, 20, 0.8)',
                          lineHeight: '1.5',
                        }}
                      >
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline" style={{ gap: '8px' }}>
                      <span 
                        className="font-pretendard font-bold dark:text-dark-text-strong"
                        style={{
                          fontSize: '36px',
                          fontWeight: 700,
                          color: '#0F1114',
                          lineHeight: '1',
                        }}
                      >
                        {plan.price}
                      </span>
                      {plan.price !== '맞춤형' && (
                        <span 
                          className="font-pretendard dark:text-dark-text-muted"
                          style={{
                            fontSize: '16px',
                            fontWeight: 400,
                            color: 'rgba(15, 17, 20, 0.8)',
                          }}
                        >
                          부터
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex flex-col" style={{ gap: '16px', flex: 1 }}>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start" style={{ gap: '12px' }}>
                        <div 
                          className="flex-shrink-0 rounded-full flex items-center justify-center bg-transparent border border-[#A5ACB7]"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: 'transparent',
                            marginTop: '2px',
                            border: '1px solid #A5ACB7',
                          }}
                        >
                          <Check className="w-3 h-3 text-[#A5ACB7]" strokeWidth={2.5} style={{ color: '#A5ACB7' }} />
                        </div>
                        <span 
                          className="font-pretendard dark:text-dark-text-strong"
                          style={{
                            fontSize: '14px',
                            fontWeight: 400,
                            color: '#0F1114',
                            lineHeight: '1.5',
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/contact?plan=${plan.planKey}`}
                    className="flex items-center justify-center rounded-[12px] font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      width: '100%',
                      height: '44px',
                      padding: '12px 16px',
                      gap: '6px',
                      backgroundColor: '#4A4CE8',
                      color: '#FFFFFF',
                      fontSize: '16px',
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}
                  >
                    알아보기
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Common Features Section */}
          <ScrollAnimation>
            <div className="flex flex-col items-center text-center w-full max-w-[921px]" style={{ gap: '43px' }}>
              <h3 
                className="font-pretendard font-semibold text-center"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  letterSpacing: '0px',
                  lineHeight: '28px',
                  color: '#0F1114',
                }}
              >
                모든 요금제에 공통 포함
              </h3>
              
              <div className="flex flex-row flex-wrap items-center justify-center gap-8 md:gap-[142px]">
                {commonFeatures.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center" style={{ gap: '11px' }}>
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: '#F2F0FF',
                      }}
                    >
                      <Check className="w-6 h-6 text-[#4A4CE8]" strokeWidth={2.5} />
                    </div>
                    <span 
                      className="font-pretendard text-center"
                      style={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#0F1114',
                        lineHeight: '1.5',
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Disclaimer */}
          <ScrollAnimation>
            <p 
              className="font-pretendard text-center"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                letterSpacing: '0px',
                lineHeight: '20px',
                color: '#6B7280',
              }}
            >
              * VAT 및 외부 API 비용 별도 • 프로젝트 복잡도에 따라 견적이 달라질 수 있습니다.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
