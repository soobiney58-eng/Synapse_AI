/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primary: {
          DEFAULT: '#5A5CFF',
          600: '#4A4CE8',
          700: '#3D3FC7',
        },
        // TEXT - 그레이스케일 기반
        text: {
          // 새로운 그레이스케일 토큰
          primary: '#131518',    // --text-primary
          secondary: '#2B2F36',  // --text-secondary
          tertiary: '#565E6C',   // --text-tertiary
          disabled: '#A5ACB7',   // --text-disabled
          // 기존 호환성 유지
          strong: '#131518',     // text-primary와 동일
          DEFAULT: '#2B2F36',    // text-secondary와 동일
          muted: '#565E6C',      // text-tertiary와 동일
        },
        // BACKGROUND - 그레이스케일 기반
        bg: {
          // 새로운 그레이스케일 토큰
          surface: '#FBFCFC',    // --bg-surface
          secondary: '#F1F2F4',  // --bg-secondary
          tertiary: '#DFE1E5',   // --bg-tertiary
          // 기존 호환성 유지
          DEFAULT: '#FBFCFC',    // bg-surface와 동일
          soft: '#F1F2F4',      // bg-secondary와 동일
          'solution': '#F4F4FE', // 기존 유지
        },
        // BORDER - 그레이스케일 기반
        border: {
          strong: '#C6CAD1',     // --border-strong
          default: '#DFE1E5',   // --border-default
          light: '#F1F2F4',     // --border-light
        },
        // 기존 line 호환성 유지
        line: '#DFE1E5',        // border-default와 동일
        // ICON - 그레이스케일 기반
        icon: {
          default: '#7E8798',   // --icon-default
          strong: '#565E6C',    // --icon-strong
        },
        // DIVIDER
        divider: '#F1F2F4',     // --divider
        // SYSTEM
        system: {
          black: '#000000',      // --black
          ink: '#131518',       // --ink
          dark: '#2B2F36',      // --dark
        },
        // 기존 색상 유지
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        'focus-ring': 'rgba(90,92,255,0.45)',
        overlay: 'rgba(5,5,6,0.6)',  // --bg-overlay
        'footer-dark': '#121212',
        'solution-text': '#121212',
        // Dark theme colors (will be applied via dark: prefix)
        dark: {
          bg: {
            DEFAULT: '#0B0D12',
            soft: '#11141B',
          },
          text: {
            strong: '#F3F4F6',
            DEFAULT: '#D1D5DB',
            muted: '#9CA3AF',
          },
          line: '#1F2430',
        },
      },
      fontFamily: {
        body: ['Pretendard', 'system-ui', 'sans-serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
        pretendard: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['48px', { lineHeight: '56px', letterSpacing: '-0.01em' }],
        h1: ['42px', { lineHeight: '1.2' }],
        h2: ['36px', { lineHeight: '1.2' }],
        h3: ['28px', { lineHeight: '1.3' }],
        h4: ['22px', { lineHeight: '1.3' }],
        h5: ['16px', { lineHeight: '1.5' }],
        body: ['16px', { lineHeight: '1.5' }],
        button: ['16px', { lineHeight: '1.5' }],
        caption: ['14px', { lineHeight: '1.4' }],
      },
      borderRadius: {
        card: '16px',
        ui: '12px',
        chip: '10px',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(17,24,39,0.06)',
        md: '0 8px 24px rgba(17,24,39,0.08)',
      },
      zIndex: {
        nav: '100',
        dropdown: '200',
        overlay: '400',
        modal: '500',
        toast: '600',
      },
      maxWidth: {
        container: '1200px',
        'container-max': '1280px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      transitionDuration: {
        '160': '160ms',
        '240': '240ms',
      },
    },
  },
  plugins: [],
}

