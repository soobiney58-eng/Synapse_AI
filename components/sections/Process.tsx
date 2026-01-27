'use client'

import ScrollAnimation from '@/components/ScrollAnimation'

export default function Process() {
  const steps = [
    {
      number: '1',
      title: '브리프',
      description: '체계적인 질문을 통해 요구사항을 명확히 정리합니다.',
      items: [
        '목표와 기대 효과 명확화',
        '핵심 기능 우선순위 설정',
      ],
    },
    {
      number: '2',
      title: '스펙·견적',
      description: 'AI 분석을 통해 최적의 기술 스택과 현실적인 견적을 제시합니다.',
      items: [
        '기술 스택 추천',
        '개발 범위 및 기간 산정',
      ],
    },
    {
      number: '3',
      title: '제안서',
      description: '상세한 설계와 프로토타입으로 구체적인 결과물을 보여드립니다.',
      items: [
        'UI/UX 설계',
        '시스템 아키텍처',
      ],
    },
    {
      number: '4',
      title: '개발·런칭',
      description: '애자일 방식으로 빠르고 안정적인 개발과 배포를 진행합니다.',
      items: [
        '핵심 기능 우선 개발',
        '피드백 반영·지속 운영 지원',
      ],
    },
  ]

  return (
    <section id="process" className="py-40 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 
              className="font-pretendard font-bold text-center"
              style={{
                fontSize: '36px',
                fontWeight: 700,
                letterSpacing: '-0.9px',
                lineHeight: '50.4px',
                color: '#0F1114',
                marginBottom: '20px',
              }}
            >
              AI프로젝트를 더 빠르게, 더 정확하게
            </h2>
            <p 
              className="font-pretendard text-center"
              style={{
                fontSize: '22px',
                fontWeight: 500,
                letterSpacing: '-0.55px',
                lineHeight: '30.8px',
                color: 'rgba(15, 17, 20, 0.8)',
              }}
            >
              아이디어부터 배포까지, 검증된 4단계 프로세스로 진행합니다.
            </p>
          </div>
        </ScrollAnimation>

        {/* 4열 Flex 레이아웃 - 육각형 카드 (1200px Full Width) */}
        <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row overflow-visible gap-4 md:gap-0 px-4 sm:px-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 relative ${index > 0 ? 'md:-ml-[1.5px]' : ''}`}
              style={{
                zIndex: steps.length - index,
              }}
            >
              <ScrollAnimation>
                {/* Hexagon Card Container */}
                <div className="flex justify-center items-center w-full h-full">
                <div 
                  className="relative w-full"
                  style={{
                    height: '340px',
                    maxWidth: '100%',
                  }}
                >
                  {/* SVG Hexagon Border Background */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 300 340"
                    preserveAspectRatio="none"
                    style={{ zIndex: 0 }}
                  >
                    <defs>
                      <filter id={`shadow-${index}`}>
                        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                        <feOffset dx="0" dy="2" result="offsetblur"/>
                        <feComponentTransfer>
                          <feFuncA type="linear" slope="0.08"/>
                        </feComponentTransfer>
                        <feMerge>
                          <feMergeNode/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    {/* 기본 육각형 테두리 */}
                    <polygon
                      points="150,0 300,85 300,255 150,340 0,255 0,85"
                      fill="white"
                      stroke="#D1D5DB"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                      filter={`url(#shadow-${index})`}
                    />
                    {/* 첫 번째 육각형: 왼쪽 외곽 테두리 강화 */}
                    {index === 0 && (
                      <line
                        x1="0"
                        y1="85"
                        x2="0"
                        y2="255"
                        stroke="#D1D5DB"
                        strokeWidth="3"
                        vectorEffect="non-scaling-stroke"
                      />
                    )}
                    {/* 마지막 육각형: 오른쪽 외곽 테두리 강화 */}
                    {index === steps.length - 1 && (
                      <line
                        x1="300"
                        y1="85"
                        x2="300"
                        y2="255"
                        stroke="#D1D5DB"
                        strokeWidth="3"
                        vectorEffect="non-scaling-stroke"
                      />
                    )}
                  </svg>

                  {/* Content Container - 완벽한 중앙 정렬 */}
                  <div 
                    className="relative h-full flex flex-col justify-center items-center text-center"
                    style={{
                      width: '100%',
                      height: '340px',
                      padding: '40px 30px',
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      zIndex: 1,
                    }}
                  >
                    {/* Step Number */}
                    <div 
                      className="font-pretendard font-normal"
                      style={{
                        fontSize: '20px',
                        fontWeight: 400,
                        color: '#4A4CE8',
                        lineHeight: '1',
                        marginBottom: '16px',
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 
                      className="font-pretendard font-bold text-black text-xl"
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#000000',
                        lineHeight: '1.3',
                        marginBottom: '12px',
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="font-pretendard text-gray-600 text-sm break-keep"
                      style={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#4B5563',
                        lineHeight: '1.5',
                        marginBottom: '16px',
                      }}
                    >
                      {step.description}
                    </p>

                    {/* List Items - 중앙 정렬 */}
                    <ul 
                      className="font-pretendard text-gray-500 text-xs space-y-1"
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        color: '#6B7280',
                        lineHeight: '1.5',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        textAlign: 'center',
                      }}
                    >
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
