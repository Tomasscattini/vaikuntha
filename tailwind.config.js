module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            beige: '#C1BAB2',
            darkGreen: '#232616',
            green: '#3E5041',
            terra: '#591310',
            yellow: '#C19A5B'
        },
        fontFamily: {
            primary: 'Poppins',
            secondary: 'SUNN-Line-Regular'
        },
        keyframes: {
            'image-grow': {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.15)' }
            },
            'beating-logo': {
                '0%': { transform: 'scale(1)' },
                '10%': { transform: 'scale(0.9)' },
                '25%': { transform: 'scale(1.5)' },
                '27%': { transform: 'scale(1.45)' },
                '40%': { transform: 'scale(1.45)' },
                '45%': { transform: 'scale(1.42)' },
                '60%': { transform: 'scale(2.5)' },
                '62%': { transform: 'scale(2.45)' },
                '80%': { transform: 'scale(2.45)' },
                '85%': { transform: 'scale(2.40)' },
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
                '99%': { 'font-family': 'Poppins', 'font-size': '3.5rem' },
                '100%': { top: '2rem', right: '-28rem', 'font-family': 'SUNN-Line-Regular', 'font-size': '10rem' }
            }
        },
        animation: {
            'image-grow': 'image-grow 40s linear infinite',
            'beating-logo': 'beating-logo 1.5s ease-in-out forwards',
            fade: 'fade 1.5s linear forwards',
            'fade-linear': 'fade-linear 1s linear 1s forwards',
            'translate-word-1': 'translate-word-1 2s linear forwards',
            'translate-word-2': 'translate-word-2 2s linear forwards'
        }
    },
    plugins: [],
    purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html']
};
