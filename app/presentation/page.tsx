import Link from 'next/link'
import { Section } from '../components/Section'

export const metadata = {
    title: 'Portfolio de présentation • Hugo Nannucci',
    description: 'Sélection de projets et compétences clés',
}

export default function PresentationPage() {
    return (
        <main>
            <Section>
                <h1 className='text-3xl font-semibold text-primary'>Portfolio de présentation</h1>
                <p className='text-sm text-muted-foreground mt-2'>
                    Sélection courte de mes meilleures réalisations, orientées résultats et impact.
                </p>
            </Section>
            <Section>
                <h2 className='text-2xl font-semibold'>Projets sélectionnés</h2>
                <ul className='list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1'>
                    <li>
                        MyTwitter — React, Tailwind, Laravel —
                        <Link className='underline ml-1' target='_blank' href='https://github.com/HugoNannucci/Mytwitter'>repo</Link>
                    </li>
                    <li>
                        MyQuizz — PHP (MVC/POO), Symfony, Twig —
                        <Link className='underline ml-1' target='_blank' href='https://github.com/HugoNannucci/MyQuizz'>repo</Link>
                    </li>
                    <li>
                        MySpotify — React, API REST —
                        <Link className='underline ml-1' target='_blank' href='https://github.com/HugoNannucci/MySpotify'>repo</Link>
                    </li>
                </ul>
            </Section>
            <Section>
                <h2 className='text-2xl font-semibold'>Compétences démontrées</h2>
                <ul className='list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1'>
                    <li>Front-end: composants réutilisables, routing, formulaires, styles (React/Next.js, Tailwind)</li>
                    <li>Back-end: API REST, auth, persistance (Laravel, Symfony)</li>
                    <li>Déploiement: mise en ligne d’applications web</li>
                </ul>
            </Section>
        </main>
    )
}


