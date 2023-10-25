import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '../components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SpotifyAPIWebApp',
  description: 'SpotifyAPIWebApp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
