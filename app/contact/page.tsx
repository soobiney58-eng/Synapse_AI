'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'

function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    budget: '',
    inquiry: '',
    privacyAgree: false,
    marketingAgree: false,
  })

  // URL 파라미터로 전달된 AI 워크벤치 결과 / 요금제 정보를 폼에 주입
  useEffect(() => {
    const plan = searchParams.get('plan')
    const summary = searchParams.get('summary')
    const budget = searchParams.get('budget')
    const timeline = searchParams.get('timeline')
    const problem = searchParams.get('problem')
    const targetUser = searchParams.get('targetUser')
    const featuresParam = searchParams.get('features')
    const input = searchParams.get('input')

    const featuresList = featuresParam ? featuresParam.split(',') : []

    const parts: string[] = []

    if (summary || budget || timeline || featuresList.length) {
      parts.push('[AI 워크벤치 분석 결과]')
      if (summary) parts.push(`- 프로젝트: ${summary}`)
      if (targetUser) parts.push(`- 타겟 사용자: ${targetUser}`)
      if (problem) parts.push(`- 해결할 문제: ${problem}`)
      if (budget) parts.push(`- 예상 예산: ${budget}`)
      if (timeline) parts.push(`- 예상 기간: ${timeline}`)
      if (featuresList.length) parts.push(`- 주요 기능: ${featuresList.join(', ')}`)
      parts.push('')
      parts.push('(여기에 추가 내용을 적어주세요)')
    }

    if (plan) {
      const planNames: Record<string, string> = {
        starter: '스타터',
        standard: '스탠다드',
        custom: '커스텀',
      }
      const planName = planNames[plan] || plan
      parts.unshift(`${planName} 요금제 관련 문의입니다.`)
    }

    const combined = parts.join('\n')

    if (combined) {
      setFormData((prev) => ({
        ...prev,
        inquiry: combined,
      }))
    } else if (input) {
      // 입력 원본만 전달된 경우
      setFormData((prev) => ({
        ...prev,
        inquiry: input,
      }))
    }
  }, [searchParams])

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = '성함을 입력해주세요.'
    }

    if (!formData.company.trim()) {
      newErrors.company = '회사명을 입력해주세요.'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '전화번호를 입력해주세요.'
    } else if (!/^[0-9-]+$/.test(formData.phone)) {
      newErrors.phone = '올바른 전화번호 형식이 아닙니다.'
    }

    if (!formData.budget) {
      newErrors.budget = '예산을 선택해주세요.'
    }

    if (!formData.inquiry.trim()) {
      newErrors.inquiry = '문의 내용을 입력해주세요.'
    }

    if (!formData.privacyAgree) {
      newErrors.privacyAgree = '개인정보수집 및 이용에 동의해주세요.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // TODO: API 호출 또는 폼 제출 로직
      console.log('Form submitted:', formData)
      alert('상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.')
      // Reset form
      setFormData({
        name: '',
        company: '',
        phone: '',
        budget: '',
        inquiry: '',
        privacyAgree: false,
        marketingAgree: false,
      })
    }
  }

  return (
    <section className="pt-[220px] pb-24 bg-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-h1 font-bold font-pretendard text-text-strong dark:text-dark-text-strong mb-4">
              상담 신청하기
            </h1>
            <p className="text-h5 font-pretendard text-text-muted dark:text-dark-text-muted">
              프로젝트에 대한 문의사항을 남겨주시면 빠르게 연락드리겠습니다.
            </p>
          </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 성함 */}
              <div>
                <label htmlFor="name" className="block text-h5 font-medium font-pretendard text-text-strong dark:text-dark-text-strong mb-2">
                  성함 <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 rounded-ui border ${
                    errors.name
                      ? 'border-danger focus:ring-danger'
                      : 'border-line dark:border-dark-line focus:ring-focus-ring'
                  } bg-bg dark:bg-dark-bg text-text-strong dark:text-dark-text-strong text-body font-pretendard focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all`}
                  placeholder="홍길동"
                />
                {errors.name && (
                  <p className="mt-1 text-caption font-pretendard text-danger">{errors.name}</p>
                )}
              </div>

              {/* 회사명 */}
              <div>
                <label htmlFor="company" className="block text-h5 font-medium font-pretendard text-text-strong dark:text-dark-text-strong mb-2">
                  회사명 <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 rounded-ui border ${
                    errors.company
                      ? 'border-danger focus:ring-danger'
                      : 'border-line dark:border-dark-line focus:ring-focus-ring'
                  } bg-bg dark:bg-dark-bg text-text-strong dark:text-dark-text-strong text-body font-pretendard focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all`}
                  placeholder="(주)회사명"
                />
                {errors.company && (
                  <p className="mt-1 text-caption font-pretendard text-danger">{errors.company}</p>
                )}
              </div>

              {/* 전화번호 */}
              <div>
                <label htmlFor="phone" className="block text-h5 font-medium font-pretendard text-text-strong dark:text-dark-text-strong mb-2">
                  전화번호 <span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 rounded-ui border ${
                    errors.phone
                      ? 'border-danger focus:ring-danger'
                      : 'border-line dark:border-dark-line focus:ring-focus-ring'
                  } bg-bg dark:bg-dark-bg text-text-strong dark:text-dark-text-strong text-body font-pretendard focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all`}
                  placeholder="010-1234-5678"
                />
                {errors.phone && (
                  <p className="mt-1 text-caption font-pretendard text-danger">{errors.phone}</p>
                )}
              </div>

              {/* 예산 */}
              <div>
                <label htmlFor="budget" className="block text-h5 font-medium font-pretendard text-text-strong dark:text-dark-text-strong mb-2">
                  예산 <span className="text-danger">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full h-12 px-4 rounded-ui border ${
                    errors.budget
                      ? 'border-danger focus:ring-danger'
                      : 'border-line dark:border-dark-line focus:ring-focus-ring'
                  } bg-bg dark:bg-dark-bg text-text-strong dark:text-dark-text-strong text-body font-pretendard focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all`}
                >
                  <option value="">예산을 선택해주세요</option>
                  <option value="under-500">500만원 미만</option>
                  <option value="500-1000">500만원 ~ 1,000만원</option>
                  <option value="1000-2000">1,000만원 ~ 2,000만원</option>
                  <option value="2000-5000">2,000만원 ~ 5,000만원</option>
                  <option value="over-5000">5,000만원 이상</option>
                </select>
                {errors.budget && (
                  <p className="mt-1 text-caption font-pretendard text-danger">{errors.budget}</p>
                )}
              </div>

              {/* 문의하기 */}
              <div>
                <label htmlFor="inquiry" className="block text-h5 font-medium font-pretendard text-text-strong dark:text-dark-text-strong mb-2">
                  문의하기 <span className="text-danger">*</span>
                </label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-ui border ${
                    errors.inquiry
                      ? 'border-danger focus:ring-danger'
                      : 'border-line dark:border-dark-line focus:ring-focus-ring'
                  } bg-bg dark:bg-dark-bg text-text-strong dark:text-dark-text-strong text-body font-pretendard focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all resize-none`}
                  placeholder="프로젝트에 대한 문의사항을 자세히 작성해주세요."
                />
                {errors.inquiry && (
                  <p className="mt-1 text-caption font-pretendard text-danger">{errors.inquiry}</p>
                )}
              </div>

              {/* 개인정보수집 및 이용동의 */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacyAgree"
                    checked={formData.privacyAgree}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-line dark:border-dark-line text-primary focus:ring-focus-ring focus:ring-2 focus:ring-offset-2 checked:bg-primary checked:border-primary accent-primary"
                  />
                  <span className="text-h5 font-pretendard text-text-strong dark:text-dark-text-strong">
                    개인정보수집 및 이용동의 <span className="text-danger">[필수]</span>
                  </span>
                </label>
                {errors.privacyAgree && (
                  <p className="mt-1 ml-8 text-caption font-pretendard text-danger">{errors.privacyAgree}</p>
                )}
              </div>

              {/* 마케팅 활용 동의 */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="marketingAgree"
                    checked={formData.marketingAgree}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-line dark:border-dark-line text-primary focus:ring-focus-ring focus:ring-2 focus:ring-offset-2 checked:bg-primary checked:border-primary accent-primary"
                  />
                  <span className="text-h5 font-pretendard text-text-strong dark:text-dark-text-strong">
                    마케팅 활용 동의 <span className="text-text-muted dark:text-dark-text-muted">[선택]</span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full h-14 px-6 rounded-ui bg-primary text-white text-button font-medium font-pretendard transition-all duration-160 hover:bg-primary-600 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                >
                  상담시작하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Suspense fallback={
        <section className="pt-[220px] pb-24 bg-bg dark:bg-dark-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-h5 font-pretendard text-text-muted dark:text-dark-text-muted">
                로딩 중...
              </p>
            </div>
          </div>
        </section>
      }>
        <ContactForm />
      </Suspense>
      <Footer />
    </main>
  )
}

