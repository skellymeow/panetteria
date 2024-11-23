import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			'background-secondary': 'hsl(var(--background-secondary))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				hover: 'hsl(var(--primary-hover))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				hover: 'hsl(var(--secondary-hover))'
  			},
  			muted: 'hsl(var(--muted))',
  			accent: 'hsl(var(--accent))',
  			border: 'hsl(var(--border))',
  		},
  		fontFamily: {
  			poppins: ["var(--font-poppins)"],
  			"source-code": ["var(--font-source-code)"],
  			sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
  			mono: ["var(--font-source-code)", "monospace"],
  		},
  	},
  },
  plugins: [],
} satisfies Config;
