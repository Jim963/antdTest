/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  //解決tailwind 與 ant-design衝突
  corePlugins:{
    preflight:false
  }
}

