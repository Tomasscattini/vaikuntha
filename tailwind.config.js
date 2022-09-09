module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            borderWidth: {
                1: '1px'
            }
        },
        colors: {
            beige: '#E0D9D1',
            darkGreen: '#232616',
            green: '#3E5041',
            terra: '#591310',
            yellow: '#C19A5B',
            orange: '#BA6543'
        },
        fontFamily: {
            primary: 'Poppins',
            secondary: 'Amatic SC'
        },
        keyframes: {
            'image-grow': {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.15)' }
            },
            'beating-logo': {
                '0%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1)' },
                '80%': { opacity: 0 },
                '100%': { transform: 'scale(240)' }
            },
            fade: {
                '80%': { opacity: 1 },
                '95%': { opacity: 0 },
                '100%': { opacity: 0 }
            },
            'fade-linear': {
                '100%': { opacity: 0 }
            },
            'translate-word-1': {
                '100%': { top: '1.2rem', right: '-10rem' }
            },
            'translate-word-2': {
                '0%': { top: '1.2rem', right: 0 },
                '100%': { top: '1.2rem', right: '-28rem' }
            },
            'translate-word-1-small': {
                '100%': { top: '1.2rem', right: '-4rem' }
            },
            'translate-word-2-small': {
                '0%': { top: '3rem', right: 0 },
                '100%': { top: '3rem', right: '-12rem' }
            }
        },
        animation: {
            'image-grow': 'image-grow 40s linear infinite',
            'beating-logo': 'beating-logo 1.5s ease-in-out forwards',
            fade: 'fade 1.5s linear forwards',
            'fade-linear': 'fade-linear .5s linear .5s forwards',
            'translate-word-1': 'translate-word-1 1s linear forwards',
            'translate-word-2': 'translate-word-2 1s linear forwards',
            'translate-word-1-small': 'translate-word-1-small 1s linear forwards',
            'translate-word-2-small': 'translate-word-2-small 1s linear forwards'
        }
    },
    plugins: [require('@tailwindcss/line-clamp')],
    purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html']
};
