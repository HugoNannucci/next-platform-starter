import Link from 'next/link'
import { Section } from '../components/Section'

export const metadata = {
    title: 'Portfolio d’apprentissage • Hugo Nannucci',
    description: 'Traçabilité des apprentissages et liens compétences ↔ preuves',
}

export default function ApprentissagePage() {
    return (
        <main>
            <Section>
                <h1 className='text-3xl font-semibold text-primary'>Portfolio d’apprentissage</h1>
                <p className='text-sm text-muted-foreground mt-2'>
                    Vue exhaustive et argumentée de mes réalisations, compétences visées et preuves associées.
                </p>
            </Section>
            <Section>
                <h2 className='text-2xl font-semibold'>Liens compétences ↔ projets</h2>
                <ul className='list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-2'>
                    <li>
                        Cadrer un projet & conception: cahier des charges, specs techniques —
                        preuves: MyTwitter (API), MyQuizz (architecture MVC)
                    </li>
                    <li>
                        Développement web: prototype → produit, front-end, logique & base de données —
                        preuves: MyTwitter (Laravel + React), MyQuizz (Symfony), MySpotify (API REST)
                    </li>
                    <li>
                        Authentification: implémentée sur MyTwitter/MyQuizz
                    </li>
                    <li>
                        Déploiement: application mise en ligne (présent site)
                    </li>
                </ul>
            </Section>
            <Section>
                <h2 className='text-2xl font-semibold'>Auto-évaluation (extraits)</h2>
                <ul className='list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1'>
                    <li>Front-end (React/Next): niveau intermédiaire solide, à renforcer sur tests</li>
                    <li>Back-end (Laravel/Symfony): à l’aise sur CRUD/API, approfondir sécurité/perf</li>
                    <li>Conception: à structurer davantage (maquettes, plan de tests)</li>
                </ul>
            </Section>
            <Section>
                <h2 className='text-2xl font-semibold'>Axes d’amélioration</h2>
                <ul className='list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1'>
                    <li>Mettre en place un plan de tests (unitaires/intégration) sur un projet</li>
                    <li>Produire une documentation technique et utilisateur synthétique</li>
                    <li>Améliorer l’accessibilité (audit Lighthouse, correctifs)</li>
                </ul>
            </Section>
            <Section>
                <h2 className='text-2xl font-semibold'>Ressources & liens</h2>
                <ul className='list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1'>
                    <li>
                        MyTwitter —
                        <Link className='underline ml-1' target='_blank' href='https://github.com/HugoNannucci/Mytwitter'>repo</Link>
                    </li>
                    <li>
                        MyQuizz —
                        <Link className='underline ml-1' target='_blank' href='https://github.com/HugoNannucci/MyQuizz'>repo</Link>
                    </li>
                    <li>
                        MySpotify —
                        <Link className='underline ml-1' target='_blank' href='https://github.com/HugoNannucci/MySpotify'>repo</Link>
                    </li>
                </ul>
            </Section>
        </main>
    )
}


