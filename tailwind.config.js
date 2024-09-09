/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'boton': '8px',
        'input': '6px'
      },
      colors: {
        colors: {
          'input': '#687073',
          'amarilo': '#fee59a',
          'azul': '#0477ad',
          'blanco': '#ffffff',
          'rojo': '#ff0000',
          'azul': '#0477ad',
          'eliminar': '#a31515',
          'gris': '#687073',
          'gristransparente'  : '#00000080',
          'negrotext': '#3E4345',
          'grisinput': '#686F73',
          'celeste': '#e7f3ff'
        },
      }
    },
  },
  plugins: [],
}