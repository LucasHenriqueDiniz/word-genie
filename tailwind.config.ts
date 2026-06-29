import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surface colors (Material Design 3 inspired)
        surface: {
          DEFAULT: '#f8f9ff',
          dim: '#cbdbf5',
          bright: '#f8f9ff',
          'container-lowest': '#ffffff',
          'container-low': '#eff4ff',
          container: '#e5eeff',
          'container-high': '#dce9ff',
          'container-highest': '#d3e4fe',
          tint: '#005ac2',
        },
        'on-surface': {
          DEFAULT: '#0b1c30',
          variant: '#424754',
        },
        'inverse-surface': '#213145',
        'inverse-on-surface': '#eaf1ff',

        // Primary colors
        primary: {
          DEFAULT: '#0058be',
          on: '#ffffff',
          container: '#2170e4',
          'on-container': '#fefcff',
          fixed: '#d8e2ff',
          'fixed-dim': '#adc6ff',
          'on-fixed': '#001a42',
          'on-fixed-variant': '#004395',
        },
        'inverse-primary': '#adc6ff',

        // Secondary colors
        secondary: {
          DEFAULT: '#495e8a',
          on: '#ffffff',
          container: '#b6ccff',
          'on-container': '#405682',
          fixed: '#d8e2ff',
          'fixed-dim': '#b1c6f9',
          'on-fixed': '#001a42',
          'on-fixed-variant': '#304671',
        },

        // Tertiary colors
        tertiary: {
          DEFAULT: '#924700',
          on: '#ffffff',
          container: '#b75b00',
          'on-container': '#fffbff',
          fixed: '#ffdcc6',
          'fixed-dim': '#ffb786',
          'on-fixed': '#311400',
          'on-fixed-variant': '#723600',
        },

        // Error colors
        error: {
          DEFAULT: '#ba1a1a',
          on: '#ffffff',
          container: '#ffdad6',
          'on-container': '#93000a',
        },

        // Background
        background: '#f8f9ff',
        'on-background': '#0b1c30',

        // Outline
        outline: {
          DEFAULT: '#727785',
          variant: '#c2c6d6',
        },

        // Semantic colors
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',

        // Surface variant
        'surface-variant': '#d3e4fe',

        // Dark mode backgrounds
        'dark-bg': '#020617',
        'dark-surface': '#0f172a',
        'dark-card': '#1e293b',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'display-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-md': ['24px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-sm': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '600' }],
        'letter-grid': ['32px', { lineHeight: '1', fontWeight: '700' }],
      },

      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },

      spacing: {
        'unit-xs': '4px',
        'unit-sm': '8px',
        'unit-md': '16px',
        'unit-lg': '24px',
        'unit-xl': '48px',
      },

      maxWidth: {
        'container': '768px',
        'container-lg': '1280px',
      },

      boxShadow: {
        'soft': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'glow-primary': '0 0 20px rgba(0, 88, 190, 0.3)',
        'glow-blue': '0 4px 20px rgba(59, 130, 246, 0.25)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, rgba(0, 88, 190, 0.05) 0%, rgba(0, 0, 0, 0) 50%)',
      },
    },
  },
} satisfies Config;
