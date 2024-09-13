/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                backgroundBlack: '#0d0d0d',
                primaryWhite: '#e5e5e5',
                textGrey: '#9ca3af',
                accentPurple: '#8b5cf6'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
      ],
};