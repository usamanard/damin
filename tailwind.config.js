/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.4rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.37rem', { lineHeight: '1.58rem' }],
      '2xl': ['1.87rem', { lineHeight: '2.18rem' }],
      '3xl': ['2.5rem', { lineHeight: '2.87rem' }],
      '4xl': ['2.35rem', { lineHeight: '3.17rem' }],  
      '5xl': ['2.81rem', { lineHeight: '3.23rem' }],
      '6xl': ['3.43rem', { lineHeight: '3.65rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
      '8xl': ['5rem', { lineHeight: '5.25rem' }],
      '9xl': ['5.8rem', { lineHeight: '5.9rem' }],

    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        MainColor:'#203241',
        TextColor:'#475467',
        SecondColor:'#D23D3C',
        Accent:'#FDE272',
        // Add more custom colors as needed
      },

      fontFamily: {
        'BearFont-black': ['Mona-Sans-Black', 'sans'],
        'BearFont-bold': ['Mona-Sans-Bold', 'sans'],
        'BearFont-light': ['Mona-Sans-Light', 'sans'],
        'BearFont-medium': ['Mona-Sans-Medium', 'sans'],
        'BearFont-regular': ['Mona-Sans-Regular', 'sans'],
        'BearFont-semibold': ['Mona-Sans-SemiBold', 'sans'],


        'BearFont-blackWide': ['Mona-Sans-BlackWide', 'sans'],
        'BearFont-boldWide': ['Mona-Sans-BoldWide', 'sans'],
        'BearFont-lightWide': ['Mona-Sans-LightWide', 'sans'],
        'BearFont-mediumWide': ['Mona-Sans-MediumWide', 'sans'],
        'BearFont-regularWide': ['Mona-Sans-RegularWide', 'sans'],
        'BearFont-semiboldWide': ['Mona-Sans-SemiBoldWide', 'sans'],


        'NardFont-black': ['FormaDJRMicro-Black'],
        'NardFont-bold': ['FormaDJRMicro-Bold'],
        'NardFont-extrabold': ['FormaDJRMicro-ExtraBold'],
        'NardFont-extralight': ['FormaDJRMicro-ExtraLight'],
        'NardFont-light': ['FormaDJRMicro-Light'],
        'NardFont-medium': ['FormaDJRMicro-Medium'],
        'NardFont-regular': ['FormaDJRMicro-Regular'],
        // 'BearFont-semiboldWide': ['Mona-Sans-SemiBoldWide', 'sans'],



        'montserrat': ['Montserrat-Regular', 'sans-serif'],
        'montserrat-medium': ['Montserrat-Medium', 'sans-serif'],
        'montserrat-semibold': ['Montserrat-SemiBold', 'sans-serif'],



        'manrope': ['Manrope', 'sans'],
      },

      animation: {
        scroll: 'scroll 60s linear infinite',   
        scroll2: 'scroll2 60s linear infinite',        

      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-200px * 14))' },
        },
        scroll2: {
          '0%': { transform: 'translateX(calc(-200px * 14))' },
          '100%': { transform: 'translateX(0))' },
        },

      },



      

    },
  },
  plugins: [],
}
