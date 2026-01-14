'use client'

import { Rocket, Handshake, Clock, ThumbsUp } from 'lucide-react'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function ProblemSolution() {
  return (
    <section id="services" className="relative w-full pt-16 sm:pt-24 md:pt-[250px] pb-12 sm:pb-16 md:pb-[100px] bg-bg" style={{ overflow: 'visible' }}>
      {/* 전체 콘텐츠 컨테이너 - 중앙 정렬 */}
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - Text Area */}
          <div className="flex-1 text-left" style={{ maxWidth: '518px' }}>
            <ScrollAnimation>
              <div style={{ gap: '20px' }} className="flex flex-col">
                <h2 
                  className="font-pretendard font-bold text-left dark:text-dark-text-strong text-2xl md:text-3xl lg:text-[36px]"
                  style={{
                    fontWeight: 700,
                    letterSpacing: '-0.9px',
                    lineHeight: '50.4px',
                    color: '#0F1114',
                  }}
                >
                  <span className="block">AI 프로젝트가 막히는 이유,</span>
                  <span className="block">우리는 해결책을 알고 있습니다.</span>
                </h2>
                <p 
                  className="font-pretendard text-left dark:text-dark-text-muted text-lg md:text-xl lg:text-[22px]"
                  style={{
                    fontWeight: 500,
                    letterSpacing: '-0.55px',
                    lineHeight: '30.8px',
                    color: 'rgba(15, 17, 20, 0.8)',
                  }}
                >
                  <span className="block">AI 개발 과정에서 반복되는 문제들을</span>
                  <span className="block">더 빠르고 정확한 방식으로 해결해드립니다.</span>
                </p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Column - Visual Stats Area with Background */}
          <div className="flex-1 w-full relative md:min-h-[645px]" style={{ maxWidth: '534px', overflow: 'visible' }}>
            {/* 배경 육각형 - 모바일에서는 숨김 또는 투명도 낮춤 */}
            <div 
              className="hidden lg:block absolute z-0 pointer-events-none"
              style={{
                width: '475px',
                height: '575px',
                minWidth: '475px',
                minHeight: '575px',
                maxWidth: '475px',
                maxHeight: '575px',
                left: '50%',
                top: '50%',
                transform: 'translate(calc(-50% + 80px), -50%)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #7F69FC 0%, #6E8EFB 100%)',
                opacity: 0.4,
                boxSizing: 'border-box',
              }}
            />

            <ScrollAnimation>
              {/* Stats Cards Grid - 모바일 1열, 데스크탑 2열 */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 w-full lg:w-[534px] mx-auto gap-4 sm:gap-6 lg:gap-[30px]">
                {/* Card 1 - 좌상: 2배 / 더 빠른 납품 */}
                <div 
                  className="bg-white dark:bg-dark-bg-elevated rounded-2xl w-full lg:w-[252px]"
                  style={{
                    display: 'flex',
                    height: '200px',
                    padding: '0 30px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '8px',
                    alignSelf: 'stretch',
                    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    gridRow: '1',
                    gridColumn: '1',
                  }}
                >
                  <Rocket 
                    className="w-8 h-8 lg:w-[42px] lg:h-[42px]" 
                    style={{
                      color: '#4A4CE8',
                    }}
                    strokeWidth={1.75}
                  />
                  <div 
                    className="font-pretendard font-bold text-left dark:text-dark-text-strong text-2xl lg:text-[36px]"
                    style={{
                      fontWeight: 700,
                      letterSpacing: '-0.9px',
                      lineHeight: '50.4px',
                      color: '#0F1114',
                    }}
                  >
                    2배
                  </div>
                  <p 
                    className="font-pretendard text-left dark:text-dark-text-muted text-sm lg:text-base"
                    style={{
                      fontWeight: 500,
                      letterSpacing: '-0.4px',
                      lineHeight: '22.4px',
                      color: 'rgba(15, 17, 20, 0.8)',
                    }}
                  >
                    더 빠른 납품
                  </p>
                </div>

                {/* Card 2 - 우상: 50% / 소통 비용 감소 (지그재그 배치) */}
                <div 
                  className="bg-white dark:bg-dark-bg-elevated rounded-2xl w-full lg:w-[252px]"
                  style={{
                    display: 'flex',
                    height: '200px',
                    padding: '0 30px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '8px',
                    alignSelf: 'stretch',
                    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    marginTop: '30px',
                  }}
                >
                  <Handshake 
                    className="w-8 h-8 lg:w-[42px] lg:h-[42px]" 
                    style={{
                      color: '#4A4CE8',
                    }}
                    strokeWidth={1.75}
                  />
                  <div 
                    className="font-pretendard font-bold text-left dark:text-dark-text-strong text-2xl lg:text-[36px]"
                    style={{
                      fontWeight: 700,
                      letterSpacing: '-0.9px',
                      lineHeight: '50.4px',
                      color: '#0F1114',
                    }}
                  >
                    50%
                  </div>
                  <p 
                    className="font-pretendard text-left dark:text-dark-text-muted text-sm lg:text-base"
                    style={{
                      fontWeight: 500,
                      letterSpacing: '-0.4px',
                      lineHeight: '22.4px',
                      color: 'rgba(15, 17, 20, 0.8)',
                    }}
                  >
                    소통 비용 감소
                  </p>
                </div>

                {/* Card 3 - 좌하: 95% / 고객 만족도 */}
                <div 
                  className="bg-white dark:bg-dark-bg-elevated rounded-2xl w-full lg:w-[252px]"
                  style={{
                    display: 'flex',
                    height: '200px',
                    padding: '0 30px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '8px',
                    alignSelf: 'stretch',
                    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    gridRow: '2',
                    gridColumn: '1',
                    marginTop: '-30px',
                    position: 'relative',
                  }}
                >
                  <ThumbsUp 
                    className="w-8 h-8 lg:w-[42px] lg:h-[42px]" 
                    style={{
                      color: '#4A4CE8',
                    }}
                    strokeWidth={1.75}
                  />
                  <div 
                    className="font-pretendard font-bold text-left dark:text-dark-text-strong text-2xl lg:text-[36px]"
                    style={{
                      fontWeight: 700,
                      letterSpacing: '-0.9px',
                      lineHeight: '50.4px',
                      color: '#0F1114',
                    }}
                  >
                    95%
                  </div>
                  <p 
                    className="font-pretendard text-left dark:text-dark-text-muted text-sm lg:text-base"
                    style={{
                      fontWeight: 500,
                      letterSpacing: '-0.4px',
                      lineHeight: '22.4px',
                      color: 'rgba(15, 17, 20, 0.8)',
                    }}
                  >
                    고객 만족도
                  </p>
                </div>

                {/* Card 4 - 우하: 24H / 평균 응답 시간 */}
                <div 
                  className="bg-white dark:bg-dark-bg-elevated rounded-2xl w-full lg:w-[252px]"
                  style={{
                    display: 'flex',
                    height: '200px',
                    padding: '0 30px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '8px',
                    alignSelf: 'stretch',
                    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    marginTop: '0',
                  }}
                >
                  <Clock 
                    className="w-8 h-8 lg:w-[42px] lg:h-[42px]" 
                    style={{
                      color: '#4A4CE8',
                    }}
                    strokeWidth={1.75}
                  />
                  <div 
                    className="font-pretendard font-bold text-left dark:text-dark-text-strong text-2xl lg:text-[36px]"
                    style={{
                      fontWeight: 700,
                      letterSpacing: '-0.9px',
                      lineHeight: '50.4px',
                      color: '#0F1114',
                    }}
                  >
                    24H
                  </div>
                  <p 
                    className="font-pretendard text-left dark:text-dark-text-muted text-sm lg:text-base"
                    style={{
                      fontWeight: 500,
                      letterSpacing: '-0.4px',
                      lineHeight: '22.4px',
                      color: 'rgba(15, 17, 20, 0.8)',
                    }}
                  >
                    평균 응답 시간
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
