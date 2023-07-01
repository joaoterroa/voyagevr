/** @type {import('tailwindcss').Config} */
const { Tokens } = require("./.mirrorful/theme_cjs.js");
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // colors: {
            //     customdark: "#171717",
            //     customlight: "#f5f5f5",
            // },
            // fontFamily: {
            //     inter: ["Inter", "sans-serif"],
            // },
            // backgroundImage: {
            //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            //     "gradient-conic":
            //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            // },
            colors: {
                customdark: "#171717",
                customlight: "#f5f5f5",
            },
        },
    },
    plugins: [],
};
