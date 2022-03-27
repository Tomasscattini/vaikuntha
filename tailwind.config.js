module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                beige: '#C1BAB2',
                darkGreen: '#232616',
                green: '#3E5041',
                terra: '#591310',
                yellow: '#C19A5B'
            }
        },
        fontFamily: {
            primary: 'Poppins',
            secondary: 'SUNN-Line-Regular'
        },
        keyframes: {}
    },
    plugins: [],
    purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html']
};
