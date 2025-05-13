import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Central dos Convênios',
  description: 'Planos de saúde ideais para você e sua família',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={roboto.variable + ' font-sans'}> {/* A tag <body> foi adicionada */}
        <main>
        
        </main>
        {children}
        
      </body>
    </html>
  )
}
