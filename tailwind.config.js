export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#f20d0d",
                "background-dark": "#000000",
                "surface-dark": "#121212",
                "accent-yellow": "#FFD700",
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"],
                "heading": ["Archivo Black", "sans-serif"],
                "accent": ["Permanent Marker", "cursive"],
                "body": ["Outfit", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.375rem",
                "md": "0.375rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
}
