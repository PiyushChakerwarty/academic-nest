import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#2563EB', hover: '#1E4FD6', subtle: '#EFF6FF' },
        ink: '#0F172A',
        body: '#1E293B',
        muted: '#475569',
        border: '#E2E8F0',
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#DC2626'
      },
      borderRadius: { xl: '16px', pill: '999px' },
      boxShadow: { card: '0 12px 24px rgba(0,0,0,0.08)' }
    },
  },
  plugins: [],
} satisfies Config
