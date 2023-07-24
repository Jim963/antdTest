/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        navyBlue: "#275682",
      },
      borderColor: {
        btnBorder: "#999",
      },
      fontSize: {
        modalTitle: "22px",
        btnContent: "16px",
      },
      width: {
        modalWidth: "600px",
        btnBig: "200px",
        btnMiddle: "150px",
        btnSmall: "100px",
      },
      height: {
        modalHeight: "535px",
        btnBig: "48px",
        btnMiddle: "48px",
        btnMiddle: "32px",
      },
      padding: {
        modalPadding: "32px 40px 40px",
      },
      borderRadius: {
        modalRadius: "24px",
        btnRadius: "8px",
      },
      boxShadow: {
        modalShadow: "0 3px 12px 0 rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
  //解決tailwind 與 ant-design衝突
  corePlugins: {
    preflight: false,
  },
};
