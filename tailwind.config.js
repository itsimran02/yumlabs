/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans'],
                roboto: ['Roboto', 'sans-serif'],
                serif: ['DM Serif Display', 'serif']
            },
            colors: {
                'header-gray': '#2F3750',
                'fade-gray': '#828796',
                'fade-black': '#0B1226',
                'dark-gray': '#272727',
                'brand-blue': '#0A66EC',
                'accent-blue': '#253F9C',
                'brand-pink': '#F46997',
                'fade-orange': '#E5C090',
                'fade-white': '#F7F7F7',
                'light-blue': '#E7E7FC',
                'light-gray': '#DDDDDD',
                'gray-bg-color': '#F4F8FF',
                'pink-bg-color': '#FFEAF1',
                'section-box-paragraph-color': '#7B7B7B',
                'grid-color': '#F5F5F5',
                'our-service-paragraph': '#696969'
            },
            screens: {
                '3xl': '1920px'
            },
            borderRadius: {
                '4xl': '1.75rem',
                '5xl': '2rem',
                '6xl': '2.25rem',
                '11xl': '3.50rem'
            },
            width: {
                180: '45rem',
                95: '23.75rem',
                89: '22.25rem',
                100: '25rem',
                137.5: '34.375rem',
                150: '37.5rem',
                225: '56.25rem',
                300: '75rem',
                375: '93.75rem',
                17.5: '4.375rem',
                55: '13.75rem'
            },

            padding: {
                45: '11.25rem',
                90: '22.5rem',
                17.5: '4.375rem',
                215.25: '53.813rem',
                62.5: '15.625rem',
                31.25: '7.813rem',
                37.25: '9.313rem',
                169: '42.25rem'
            },
            margin: {
                18: '4.5rem',
                22: '5.5rem'
            },
            fontSize: {
                xxs: '0.625rem',
                '2.5xl': '1.688rem',
                '7.5xl': '5rem',
                '6.5xl': '4.125rem',
                '4.5xl': '2.875rem',
                '5.5xl': '3.5rem'
            },
            height: {
                212: '53.125rem',
                159: '39.875rem',
                75: '18.75rem',
                112.25: '28.125rem',
                150: '37.5rem',
                187.5: '46.875rem',
                17.5: '4.375rem',
                55: '13.75rem'
            },
            lineHeight: {
                14: '3.4375rem',
                15: '3.75rem',
                22.5: '5.625rem',
                24: '6rem',
                24.5: '6.5rem',
                tighter: '4rem',
                12.25: '3.063rem',
                18: '4.5rem',
                13: '3.25rem'
            },
            spacing: {
                46: '11.5625rem'
            },
            backgroundImage: {
                'gradient-linear':
                    'linear-gradient(hsl(282, 33%, 88%), hsl(277, 41%, 88%), hsl(273, 48%, 87%), hsl(268, 55%, 87%), hsl(263, 63%, 86%), hsl(259, 70%, 86%), hsl(254, 77%, 86%), hsl(250, 85%, 86%), hsl(245, 92%, 86%), hsl(240, 100%, 86%))',
                'scroll-gradient': '  linear-gradient(90deg, #0B66EC 0%, #F468985D 100%)'
            }
        }
    },
    plugins: [scrollbarHide]
};
