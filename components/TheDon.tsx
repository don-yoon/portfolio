import React from "react"
import { AnimatePresence, motion } from "framer-motion"


const TheDon = () => {
  return (
    <div className="flex w-1/2 justify-center bg-[#232376] p-2">
      <AnimatePresence initial={true}>
        <svg width="318.9" height="74" viewBox="0 0 319 75" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{duration: 4, yoyo: Infinity, ease: "easeInOut" }}
            strokeLinecap="round" 
            fillRule="evenodd" 
            fontSize="9pt" 
            stroke="white" 
            strokeWidth="1mm" 
            fill="transparent" 
            d="M 75.6 44.1 L 75.6 73 L 73.6 73 L 73.6 44.1 A 51.133 51.133 0 0 0 73.278 38.155 Q 72.557 32.009 70.216 28.215 A 14.897 14.897 0 0 0 69.95 27.8 A 11.701 11.701 0 0 0 61.539 22.462 A 16.261 16.261 0 0 0 59.2 22.3 A 19.993 19.993 0 0 0 50.42 24.365 A 23.448 23.448 0 0 0 49.85 24.65 Q 45.3 27 42 31.05 Q 38.7 35.1 37.3 40.2 L 37.3 73 L 35.3 73 L 35.3 0 L 37.3 0 L 37.3 34.5 Q 40.5 28 46.45 24.15 A 23.562 23.562 0 0 1 54.986 20.676 A 22.442 22.442 0 0 1 59.1 20.3 A 18.928 18.928 0 0 1 62.657 20.619 A 14.103 14.103 0 0 1 66.25 21.8 A 13.124 13.124 0 0 1 70.791 25.523 A 15.85 15.85 0 0 1 71.4 26.35 A 19.289 19.289 0 0 1 73.407 30.149 A 26.278 26.278 0 0 1 74.55 33.8 Q 75.6 38.2 75.6 44.1 Z M 318.9 44.1 L 318.9 73 L 316.9 73 L 316.9 44.1 Q 316.9 34.363 314.561 29.119 A 14.612 14.612 0 0 0 313.75 27.55 A 10.327 10.327 0 0 0 306.285 22.517 A 15.881 15.881 0 0 0 303.6 22.3 A 21.665 21.665 0 0 0 294.184 24.488 A 25.131 25.131 0 0 0 293.85 24.65 Q 289.1 27 285.6 31.05 Q 282.1 35.1 280.6 40.2 L 280.6 73 L 278.6 73 L 278.6 21.1 L 280.6 21.1 L 280.6 34.5 Q 282.8 30.3 286.4 27.1 Q 290 23.9 294.45 22.1 Q 298.9 20.3 303.5 20.3 A 18.539 18.539 0 0 1 306.789 20.578 A 13.309 13.309 0 0 1 310.4 21.75 Q 313.3 23.2 315.2 26.1 Q 316.847 28.613 317.742 32.329 A 30.65 30.65 0 0 1 318 33.5 Q 318.773 37.367 318.882 42.416 A 78.206 78.206 0 0 1 318.9 44.1 Z M 137.5 48.2 L 90 48.2 Q 90.5 54.9 93.7 60.3 Q 96.9 65.7 102 68.85 Q 107.1 72 113.1 72 Q 119.1 72 124.3 68.95 A 20.093 20.093 0 0 0 128.516 65.706 A 16.163 16.163 0 0 0 131.7 61.1 L 133.6 61.6 A 16.34 16.34 0 0 1 130.558 66.437 A 20.219 20.219 0 0 1 129.05 67.95 A 23.007 23.007 0 0 1 121.961 72.299 A 26.056 26.056 0 0 1 121.7 72.4 Q 117.5 74 113 74 Q 107.9 74 103.35 71.85 Q 98.8 69.7 95.35 65.95 Q 91.9 62.2 89.95 57.25 Q 88 52.3 88 46.7 A 27.912 27.912 0 0 1 89.696 36.903 A 26.163 26.163 0 0 1 91.3 33.4 Q 94.6 27.4 100.15 23.85 Q 105.7 20.3 112.5 20.3 Q 119.4 20.3 125.05 23.9 Q 130.7 27.5 134.1 33.55 A 26.758 26.758 0 0 1 137.459 45.477 A 32.084 32.084 0 0 1 137.5 47.1 L 137.5 47.65 L 137.5 48.2 Z M 173.2 73 L 150.4 73 L 150.4 2 L 173.2 2 A 43.766 43.766 0 0 1 181.059 2.668 Q 187.156 3.781 191.75 6.75 Q 199.1 11.5 202.8 19.55 A 40.773 40.773 0 0 1 206.323 33.196 A 49.08 49.08 0 0 1 206.5 37.4 A 48.566 48.566 0 0 1 205.64 46.761 A 36.242 36.242 0 0 1 202.45 56.2 Q 198.4 64.2 190.9 68.6 A 31.588 31.588 0 0 1 179.893 72.48 A 41.548 41.548 0 0 1 173.2 73 Z M 173.2 4 L 152.4 4 L 152.4 71 L 173.2 71 A 39.886 39.886 0 0 0 180.981 70.281 Q 185.81 69.32 189.663 67.078 A 24.697 24.697 0 0 0 190.45 66.6 Q 197.4 62.2 200.95 54.55 A 38.326 38.326 0 0 0 204.25 42.316 A 47.21 47.21 0 0 0 204.5 37.4 A 44.003 44.003 0 0 0 203.53 27.968 A 35.196 35.196 0 0 0 200.85 20.15 Q 197.2 12.6 190.25 8.3 Q 183.346 4.028 173.333 4 A 47.311 47.311 0 0 0 173.2 4 Z M 24.9 69 L 26 70.6 L 24.75 71.35 Q 23.9 71.86 22.658 72.346 A 25.975 25.975 0 0 1 21.4 72.8 Q 19.431 73.456 16.847 73.497 A 21.881 21.881 0 0 1 16.5 73.5 Q 14.1 73.5 12.05 72.5 Q 10 71.5 8.75 69.7 A 7.011 7.011 0 0 1 7.525 66.163 A 8.759 8.759 0 0 1 7.5 65.5 L 7.5 23.1 L 0 23.1 L 0 21.1 L 7.5 21.1 L 7.5 3 L 9.5 3 L 9.5 21.1 L 22 21.1 L 22 23.1 L 9.5 23.1 L 9.5 65.5 A 6.838 6.838 0 0 0 9.939 67.541 A 5.399 5.399 0 0 0 11.8 69.95 Q 13.9 71.5 16.5 71.5 A 16.96 16.96 0 0 0 19.114 71.309 Q 20.956 71.022 22.4 70.3 A 267.723 267.723 0 0 0 22.964 70.017 Q 24.636 69.176 24.867 69.024 A 0.233 0.233 0 0 0 24.9 69 Z M 240.9 74 Q 235.8 74 231.3 71.9 Q 226.8 69.8 223.4 66.05 Q 220 62.3 218.1 57.45 Q 216.2 52.6 216.2 47.2 Q 216.2 41.7 218.15 36.85 Q 220.1 32 223.5 28.25 Q 226.9 24.5 231.4 22.4 Q 235.9 20.3 240.9 20.3 Q 245.9 20.3 250.4 22.4 Q 254.9 24.5 258.3 28.25 Q 261.7 32 263.65 36.85 Q 265.6 41.7 265.6 47.2 Q 265.6 52.6 263.7 57.45 Q 261.8 62.3 258.35 66.05 Q 254.9 69.8 250.45 71.9 Q 246 74 240.9 74 Z M 218.2 47.4 Q 218.2 54.1 221.25 59.7 Q 224.3 65.3 229.45 68.65 Q 234.6 72 240.8 72 Q 247 72 252.2 68.6 Q 257.4 65.2 260.5 59.5 Q 263.6 53.8 263.6 47.1 Q 263.6 40.4 260.5 34.75 Q 257.4 29.1 252.25 25.7 Q 247.1 22.3 240.9 22.3 Q 234.8 22.3 229.6 25.75 Q 224.4 29.2 221.3 34.9 Q 218.2 40.6 218.2 47.4 Z M 90 46.2 L 135.4 46.2 A 30.24 30.24 0 0 0 134.213 39.228 A 24.985 24.985 0 0 0 131.9 33.85 Q 128.8 28.5 123.8 25.4 Q 118.8 22.3 112.6 22.3 Q 106.5 22.3 101.5 25.4 A 23.192 23.192 0 0 0 93.546 33.732 A 27.072 27.072 0 0 0 93.45 33.9 A 26.87 26.87 0 0 0 90.317 43.15 A 32.823 32.823 0 0 0 90 46.2 Z" 
          />
        </svg>
      </AnimatePresence>
    </div>
  )
}

export default TheDon