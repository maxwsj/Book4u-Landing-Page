module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      screens: {
         mb: { max: '639px' },
         // => @media (min-width: 640px) { ... }

         sm: '640px',
         // => @media (min-width: 640px) { ... }

         md: '768px',
         // => @media (min-width: 768px) { ... }

         lg: '1024px',
         // => @media (min-width: 1024px) { ... }

         xl: '1280px',
         // => @media (min-width: 1280px) { ... }

         '2xl': '1536px',
         // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
         Montserrat: ['Montserrat'],
         Poppins: ['Poppins'],
      },
      extend: {
         fontSize: {
            'h-title': ['30px', '55px'],
         },

         colors: {
            primary: '#614242',
            secondary: '#FF722D',
            tertiary: '#3C9691',
            quaternary: '#D9D0C1',
            snow: '#FFFAFA',
            'btn-black': '#343A40',
            'blue-medium': '#A7D8DB',
            'black-txt': '#1D1C1C',
         },

         display: ['group-hover'],
      },
   },
   plugins: [require('daisyui')],
   daisyui: {
      styled: true,
      themes: false,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: '',
      darkTheme: 'dark',
   },
   important: true,
};
