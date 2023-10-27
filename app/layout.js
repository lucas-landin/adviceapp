import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Need a Advice ?',
  description: 'If you need a advice press the button',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
