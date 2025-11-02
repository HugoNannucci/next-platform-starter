import { cn } from '@/lib/utils'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Anek_Telugu } from 'next/font/google'
import { cookies } from 'next/headers'
import { ModeProvider } from './components/mode-context'
import './globals.css'

const AnekTelugu = Anek_Telugu({ subsets: ['latin'], variable: '--font-caption' })

export const metadata: Metadata = {
    metadataBase: new URL('https://dev.hugo-nannucci.com'),
    title: 'Hugo Nannucci • Portfolio',
    description: 'Développeur web fullstack',
    keywords: ['Hugo Nannucci', 'développeur web', 'fullstack', 'React', 'Laravel', 'Next.js', 'Tailwind'],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: 'https://dev.hugo-nannucci.com/',
        title: 'Hugo Nannucci • Portfolio',
        description: 'Développeur web fullstack',
        images: ['/moi.jpg'],
        locale: 'fr_FR',
        siteName: 'dev.hugo-nannucci.com',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hugo Nannucci • Portfolio',
        description: 'Développeur web fullstack',
        images: ['/moi.jpg'],
    },
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
    const cookieStore = cookies()
    const cookieMode = (cookieStore.get('mode')?.value as 'presentation' | 'apprentissage' | undefined) || 'presentation'
    return (
		<html lang='fr' className='h-full'>
            <body className={cn(GeistSans.variable, AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}>
                <ModeProvider initialMode={cookieMode}>{children}</ModeProvider>
            </body>
		</html>
	)
}
