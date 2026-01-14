'use client'

import ScrollAnimation from '@/components/ScrollAnimation'

export default function Section3() {
  const stats = [
    {
      value: '90%',
      label: '기획 시간 단축',
    },
    {
      value: '24H',
      label: '평균 응답 시간',
    },
    {
      value: '100%',
      label: '시안 만족도',
    },
  ]

  return (
    <section 
      id="section3" 
      className="py-[75px] bg-gradient-to-b from-[#F2F0FF] to-[#F1F4FF]"
      style={{
        background: 'linear-gradient(180deg, rgba(242, 240, 255, 1) 0%, rgba(241, 244, 255, 1) 100%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="flex flex-col items-center gap-12 md:gap-[70px]">
          {/* Header Section */}
          <ScrollAnimation>
            <div className="flex flex-col items-center text-center w-full max-w-[800px]" style={{ gap: '20px' }}>
              <h2 
                className="font-pretendard font-bold text-center"
                style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  letterSpacing: '-0.9px',
                  lineHeight: '50.4px',
                  color: '#0F1114',
                }}
              >
                최대 2주 내 MVP 초안 제안 가능
              </h2>
              <p 
                className="font-pretendard text-center leading-relaxed"
                style={{
                  fontSize: '22px',
                  fontWeight: 500,
                  letterSpacing: '-0.55px',
                  lineHeight: '30.8px',
                  color: '#565E6C',
                }}
              >
                복잡한 기획 과정을 간소화하고, 빠른 프로토타입으로 아이디어의 실현 가능성을 조기에 검증할 수 있습니다.
              </p>
            </div>
          </ScrollAnimation>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-[200px] w-full">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index}>
                <div 
                  className="flex flex-col items-center text-center"
                  style={{
                    gap: '12px',
                  }}
                >
                  {/* Value */}
                  <div 
                    className="font-pretendard font-black text-4xl sm:text-5xl md:text-6xl"
                    style={{
                      fontSize: 'clamp(36px, 8vw, 64px)',
                      fontWeight: 900,
                      letterSpacing: '-1.6px',
                      lineHeight: '1',
                      color: '#4A4CE8',
                    }}
                  >
                    {stat.value}
                  </div>
                  {/* Label */}
                  <div 
                    className="font-pretendard font-medium"
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      letterSpacing: '-0.4px',
                      lineHeight: '22.4px',
                      color: 'rgba(15, 17, 20, 0.8)',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
