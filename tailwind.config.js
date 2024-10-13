/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                mobile: { max: '892px' },
                ipad: { min: '893px', max: '1024px' },
            },
            fontFamily: {
                spraypaint: ['Rubik Spray Paint', 'system-ui'],
                bubbles: ['Rubik Bubbles', 'system-ui'],
                nunito: ['Nunito', 'system-ui'],
                abz: ['ABeeZee', 'sans-serif'],
            },
            colors: {
                sunshine: '#FFEB3B',
                bluesky: '#4FC3F7',
                applegreen: '#8BC34A',
                tangerine: '#FF9800',
                pinkgum: '#FF80AB',
                grape: '#AB47BC',
                softgray: '#B0BEC5',
                butter: '#FFEDBE',
                cheese: '#FFD568',
                stone: '#8D8686',
                lava: '#CD0045',
                limblue: '#005981',
                darkgreen: '#2B4D39',
                wood: '#D68E5E',
            },
        },
    },
    plugins: [],
}
