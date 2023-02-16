/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./Pages/**/*.{html,js}','./index.html'],
    theme: {
        extend: {
            fontFamily: {
                'open-sans': ['Open Sans', 'sans-serif'],
                'tinos': ['Tinos', 'serif'],
              }
        },
},
plugins: [],
}