/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                spraypaint: ['Rubik Spray Paint', 'system-ui'],
                bubbles: ['Rubik Bubbles', 'system-ui'],
                nunito: ['Nunito', 'system-ui'],
                abz: ['ABeeZee', 'sans-serif'],
            },
            screens: {
                mobile: { max: '892px' },
                ipad: { min: '893px', max: '1024px' },
            },
            colors: {
                sunshine: '#FFEB3B',
                sky: '#4FC3F7',
                applegreen: '#8BC34A',
                tangerine: '#FF9800',
                pinkgum: '#FF80AB',
                grape: '#AB47BC',
                softgray: '#B0BEC5',
                butter: '#FFEDBE',
                stone: '#8D8686',
            },
        },
    },
    plugins: [],
}
