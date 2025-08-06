import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Zanvexis - A Revolução das Automações',
  description: 'Plataforma premium de automações inteligentes e personalizadas. Transforme seu negócio com tecnologia de ponta.',
  keywords: 'automação, tecnologia, inteligência artificial, inovação, zanvexis',
  authors: [{ name: 'Zanvexis Team' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#00f5ff',
          colorBackground: '#0a0a0f',
          colorInputBackground: '#1a1a2e',
          colorInputText: '#ffffff',
        },
      }}
    >
      <html lang="pt-BR">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}