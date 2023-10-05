import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from './providers'

const poppins = Poppins({
  display: 'swap',
  weight: ['300', '400', '600'],
  preload: true,
  subsets: ['latin'],
  style: 'normal'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
