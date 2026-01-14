import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { idea, email, timestamp } = body

    // 기본 유효성 검사
    if (!idea || !email) {
      return NextResponse.json(
        { error: '아이디어와 이메일은 필수입니다.' },
        { status: 400 }
      )
    }

    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 주소를 입력해주세요.' },
        { status: 400 }
      )
    }

    // TODO: 실제 데이터베이스나 이메일 서비스에 저장
    // 예: await saveToDatabase({ idea, email, timestamp })
    // 예: await sendEmail({ to: 'contact@synapse.ai', subject: 'New Idea Submission', body: idea })

    console.log('New submission:', { idea, email, timestamp })

    return NextResponse.json(
      {
        success: true,
        message: '제출이 완료되었습니다. 24시간 이내에 연락드리겠습니다.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 다시 시도해주세요.' },
      { status: 500 }
    )
  }
}
