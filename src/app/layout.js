import { Providers } from '@/components/Provider/Providers';
import './globals.css';
import AuthProvider from '@/components/Provider/AuthProvider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/trello.svg" />
      </head>
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <Providers>
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}
