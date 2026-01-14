'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[850px] md:h-[900px] flex items-start overflow-visible pb-12 sm:pb-16 lg:pb-24 bg-[linear-gradient(to_bottom,rgba(90,92,255,0.03),rgba(147,51,234,0.02))]"
      style={{ paddingTop: 'clamp(80px, 15vw, 200px)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="flex flex-col items-center justify-start">
          {/* Text Block */}
          <div 
            className="relative z-50 w-full max-w-[700px] text-center flex flex-col items-center" 
            style={{ gap: '32px', marginBottom: '60px' }}
          >
            {/* Main Title */}
            <h1 
              className="font-pretendard text-center break-keep text-3xl sm:text-4xl md:text-5xl lg:text-[72px]"
              style={{
                fontSize: 'clamp(28px, 5vw, 72px)',
                fontWeight: 800,
                letterSpacing: '-1.8px',
                lineHeight: '1.2',
                color: '#000000',
                wordBreak: 'keep-all',
                whiteSpace: 'normal',
              }}
            >
              <span className="block">
                <span style={{ color: '#5A5CFF' }}>아이디어</span>를 연결하고,
              </span>
              <span className="block">현실로 만듭니다.</span>
            </h1>
            
            {/* Subtitle */}
            <p 
              className="font-pretendard text-center text-base sm:text-lg md:text-xl lg:text-[22px]"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 22px)',
                fontWeight: 500,
                letterSpacing: '-0.55px',
                lineHeight: '1.4',
                color: '#565E6C',
              }}
            >
              AI 특화 풀스택 팀이 아이디어를<br className="hidden sm:block" />스펙·견적·제안서로 구체화합니다.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {/* Primary Button - 시냅스 체험하기 */}
              <Link href="/experience" legacyBehavior>
                <a
                  style={{
                    width: '160px',
                    height: '54px',
                    backgroundColor: '#4A4CE8',
                    color: '#FFFFFF',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '16px',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    padding: '0',
                    border: 'none',
                    zIndex: 50,
                  }}
                >
                  시냅스 체험하기
                </a>
              </Link>
              
              {/* Secondary Button - 회사소개서 다운로드 */}
              <a
                href="/Synapse_Introduction.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                style={{
                  width: '160px',
                  height: '54px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '16px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  zIndex: 50,
                }}
              >
                회사소개서
              </a>
            </div>
          </div>

          {/* Visual Block */}
          <div 
            className="hero-visual relative flex items-center justify-center w-full max-w-4xl mt-8 sm:mt-12 md:mt-16 lg:-mt-2 z-20 -translate-y-[150px]"
            style={{
              width: '100%',
              maxWidth: '489px',
              height: 'auto',
              position: 'relative',
              marginTop: '32px',
            }}
          >                                      
            <img
              src="/main.png"
              alt="Synapse AI Visual"
              className="relative z-10 w-full h-auto object-contain"
              style={{
                width: '100%',
                maxWidth: '489px',
                height: 'auto',
                objectFit: 'contain',
              }}
            />

            {/* Floating Info Cards - 모바일에서는 숨김 */}
            <div className="hidden lg:block">
              {/* 2주 내 MVP 제작 가능 - Left Center */}
              <div 
                className="hero-float-soft-1 absolute z-30 rounded-[20px] shadow-lg lg:-translate-x-[50px]"
                style={{
                  width: '239px',
                  height: '67px',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  top: 'calc(50% - 115px)',
                  left: '-8%',
                  transform: 'translateY(-50%)',
                }}
              >
                <p className="text-base font-pretendard font-medium text-black text-center">
                  2주 내 MVP 제작 가능
                </p>
              </div>

              {/* 전문 풀스택 팀의 빠른 납품 - Right Lower (Reference Card) */}
              <div 
                className="hero-float-soft-3 absolute z-30 rounded-[20px] shadow-lg lg:translate-x-[50px]"
                style={{
                  width: '239px',
                  height: '67px',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  top: '70%',
                  right: '-4%',
                }}
              >
                <p className="text-base font-pretendard font-medium text-black text-center">
                  전문 풀스택 팀의 빠른 납품
                </p>
              </div>

              {/* 기획부터 개발까지 올인원 - Right Upper (Relative to Reference Card) */}
              <div 
                className="hero-float-soft-2 absolute z-30 rounded-[20px] shadow-lg lg:translate-x-[50px]"
                style={{
                  width: '239px',
                  height: '67px',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  top: 'calc(70% - 97px)',
                  right: 'calc(-4% - 80px)',
                }}
              >
                <p className="text-base font-pretendard font-medium text-black text-center">
                  기획부터 개발까지 올인원
                </p>
              </div>
            </div>

            {/* Glow Effect - purple → blue gradient layer blur */}
            <div className="hero-visual-glow absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[115%] h-[130px] md:h-[160px] lg:h-[180px] bg-[radial-gradient(circle_at_center,rgba(127,105,252,0.4),rgba(110,142,251,0.0))] blur-[80px] opacity-40 pointer-events-none z-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
