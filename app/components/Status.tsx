'use client'

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Braces, Code, Hash, HeartHandshake, LucideIcon, Newspaper, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Section } from './Section';
import { useMode } from './mode-context';

export const Status = () => {
    const { mode } = useMode()
    const visibleProjects = mode === 'presentation' ? PROJECT.filter(p => p.title !== 'Morpion') : PROJECT
    return (
        <Section id='projets' className='flex max-md:flex-col items-start gap-4'>
			<div className='flex-[3] w-full'>
				<Card className='w-full p-4 flex flex-col gap-2 border-2 border-orange-500'>
					<p className='text-lg text-muted-foreground border-b'>Projets</p>
                    <div className='flex flex-col gap-4'>
                        {visibleProjects.map((project, index) => (
                            <Projects
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                techno={project.techno}
                                description={project.description}
                                url={project.url}
                                rncp={project.rncp}
                                rncpList={project.rncpList}
                            />
                        ))}
                    </div>
				</Card>
			{/* </div>
			<div className='flex-[2] flex flex-col gap-4 w-full'>
				<Card className=' p-4 flex-1'><p className='text-lg text-muted-foreground'>Front-End</p>
                    <div className='flex flex-col gap-4'>
                    </div>
                </Card>
				<Card className=' p-4 flex-1'><p className='text-lg text-muted-foreground'>Back-End</p></Card> */}
			</div>
		</Section>
	)
}

const PROJECT: ProjectProps[] = [
    {
        Logo: Newspaper,
        title: "App Boursière & Journalistique",
        techno: 'React Native | Symfony',
        description: [
            "Application mobile d’actualités et de suivi boursier",
            "Conception et réalisation de A à Z",
            "Backend Symfony (API, sécurité, persistance)",
            "App mobile React Native (UI, navigation, appels API)",
        ],
        url: 'https://play.google.com/store/apps/details?id=com.surperformance.app&utm_source=emea_Med',
        rncp: { part1: true, part2: true, part3: true },
        rncpList: [
            "Rédaction d'un Cahier des Charges",
            "Rédaction des spécifications techniques",
            "Déploiement d'un environnement de travail avec des outils de versionnage, de partage et de collaboration/communication",
            "Réalisation d'une maquette",
            "Identification des fonctionnalités à développer pour structurer l'architecture de la solution web et de la base de données",
            "Rédaction d'une présentation pour présenter les choix techniques, les maquettes et le schéma de la solution web",
            "Développement du prototype de la solution web",
            "Rédaction du code de la solution en transcrivant les fonctionnalités du Cahier des Charges",
            "Intégration des différents éléments de la solution web",
            "Implémentation de la partie \"front-end\"",
            "Implémentation de la logique et de la base de données",
            "Implémentation des règles d'authentification",
            "Implémentation d'un plan de tests en concevant les différents tests unitaires et d’intégration",
            "Déploiement d'une application web en utilisant un serveur",
            "Rédaction d'une documentation technique à destination des équipes parties prenantes",
            "Rédaction d'une documentation utilisateur pour apporter un support aux utilisateurs",
            "Monitoring du lancement d'une solution web, en recueillant les retours utilisateurs",
            "Identification des améliorations qualitatives et de performance d'une solution web",
            "Analyse de la qualité de l’ergonomie et de l’accessibilité de la solution",
            "Rédaction d'un document argumentatif en listant des propositions d'améliorations",
        ]
    },
    {
        Logo: ShoppingCart,
        title: 'Site E-commerce',
        techno: 'Next.js | Tailwind | Symfony/Laravel',
        description: [
            "Catalogue et fiches produit",
            "Panier et gestion des commandes",
            "Paiement (sandbox)",
        ],
        url: 'https://github.com/tom-marchandise/E-commerce',
        rncp: { part1: true, part2: true },
        rncpList: [
            "Rédaction d'un Cahier des Charges",
            "Rédaction des spécifications techniques",
            "Déploiement d'un environnement de travail avec des outils de versionnage, de partage et de collaboration/communication",
            "Réalisation d'une maquette",
            "Identification des fonctionnalités à développer pour structurer l'architecture de la solution web et de la base de données",
            "Rédaction d'une présentation pour présenter les choix techniques, les maquettes et le schéma de la solution web",
            "Développement du prototype de la solution web",
            "Rédaction du code de la solution en transcrivant les fonctionnalités du Cahier des Charges",
            "Intégration des différents éléments de la solution web",
            "Implémentation de la partie \"front-end\"",
            "Implémentation de la logique et de la base de données",
            "Implémentation des règles d'authentification",
            "Implémentation d'un plan de tests en concevant les différents tests unitaires et d’intégration",
            "Déploiement d'une application web en utilisant un serveur",
        ]
    },
    {
        Logo: Hash,
        title: 'My Twitter',
        techno: 'React | Tailwind | Laravel',
        description: ["Création d'une API Laravel", "Interface de connexion et d'inscription", "Possibilité d'écrire et de posté un tweet contenant du texte, une image, un hashtag et de commenter les tweets d'autres utilisateurs",],
        url: 'https://github.com/HugoNannucci/Mytwitter',
        rncp: { part2: true }
    },
    {
        Logo: Braces,
        title: 'MyQuizz',
        techno: 'PHP | MVC | POO | Symfony | Twig',
        description: ["Création d'un site de quizz", "Créer un quizz", "Répondre à des quizz", "Panel admin", "Gestion des utilisateurs et des quizz", "Gestion des questions et des réponses", "Gestion des catégories de quizz"],
        url: 'https://github.com/HugoNannucci/MyQuizz',
        rncp: { part2: true }
    },
    {
        Logo: HeartHandshake,
        title: 'MySpotify',
        techno: 'React | JS | API rest',
        description: ["Création d'un site exploitant une API rest", "Interface de connexion et d'inscription", "Possibilité de rechercher des artistes, des albums et des chansons et de les écouter"],
        url: 'https://github.com/HugoNannucci/MySpotify'
    },
    {
        Logo: Code,
        title: 'Morpion',
        techno: 'React | JS',
        description: ["Création de jeu en JavaScript", "Morpion"],
        url: '/morpion'
    },
]

type ProjectProps = {
    Logo: LucideIcon
    title: string
    techno: string
    description: string[]
    url: string
    rncp?: { part1?: boolean; part2?: boolean; part3?: boolean }
    rncpList?: string[]
}

const Projects = (props: ProjectProps) => {

    const [show, setShow] = useState(false);
    const { mode } = useMode()

    const handleShow = () => setShow(!show);

	return (
		<div onClick={handleShow} className=' flex flex-col'>
			<div className={`inline-flex items-center gap-4 transition-colors p-1 rounded ${show ? 'bg-accent/50' : 'hover:bg-accent/50'}`}>
            <span className='bg-accent text-accent-foreground p-3 rounded-sm'>
				<props.Logo size={16} />
			</span>
            <div>
			<p className="text-lg font-semibold">{props.title}</p>
			<div className='flex flex-wrap gap-1 pt-0.5'>
				{props.techno.split('|').map((t, i) => (
					<Badge key={i} variant={'outline'} className='border-orange-500 text-orange-600 bg-orange-500/10'>
						{t.trim()}
					</Badge>
				))}
			</div>
            </div>
            </div>
            {show && (
                <div className=' text-sm text-muted-foreground flex justify-center pt-4'>
                    <div className=' w-5/6 flex flex-col gap-4'>
                        <ul className=' list-disc'>
                            {props.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
						{mode === 'apprentissage' && (
                            <div className='mt-2'>
                                <p className='text-base font-semibold mb-2'>Compétences RNCP</p>
								{props.rncpList ? (
									<ul className='list-disc pl-5'>
										{props.rncpList.map((item, idx) => (
											<li key={idx}>{item}</li>
										))}
									</ul>
								) : (
									<>
										{props.rncp?.part1 && (
                                    <div className='mb-3'>
                                        <p className='font-medium'>Cadrer un Projet et Conceptualiser une Solution Web</p>
                                        <ul className='list-disc pl-5'>
                                            <li>Rédaction d'un Cahier des Charges</li>
                                            <li>Rédaction des spécifications techniques</li>
                                            <li>Déploiement d'un environnement de travail (versionning/partage/communication)</li>
                                            <li>Réalisation d'une maquette</li>
                                            <li>Identification des fonctionnalités et de l'architecture (web + base de données)</li>
                                            <li>Rédaction d'une présentation des choix techniques, maquettes et schéma</li>
                                        </ul>
                                    </div>
										)}
										{props.rncp?.part2 && (
                                    <div className='mb-3'>
                                        <p className='font-medium'>Développer une Solution Web</p>
                                        <ul className='list-disc pl-5'>
                                            <li>Développement du prototype</li>
                                            <li>Rédaction du code selon le Cahier des Charges</li>
                                            <li>Intégration des différents éléments</li>
                                            <li>Implémentation du front-end</li>
                                            <li>Implémentation de la logique et de la base de données</li>
                                            <li>Implémentation des règles d'authentification</li>
                                            <li>Plan de tests (unitaires et d’intégration)</li>
                                            <li>Déploiement sur un serveur</li>
                                        </ul>
                                    </div>
										)}
										{props.rncp?.part3 && (
                                    <div>
                                        <p className='font-medium'>Déployer un Système d’Assurance Qualité</p>
                                        <ul className='list-disc pl-5'>
                                            <li>Documentation technique (équipes)</li>
                                            <li>Documentation utilisateur (support)</li>
                                            <li>Monitoring du lancement (retours utilisateurs)</li>
                                            <li>Identification des améliorations qualitatives et de performance</li>
                                            <li>Analyse ergonomie et accessibilité</li>
                                            <li>Document argumentatif (propositions d'améliorations)</li>
                                        </ul>
                                    </div>
										)}
									</>
								)}
                            </div>
                        )}
                        <div>
                            <Link
                                target='_blank'
                                href={props.url}
                                className={cn(
                                    buttonVariants({ variant: 'outline' }),
                                    'inline-flex items-center gap-1 h-8 px-3 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition'
                                )}
                            >
                                Voir le projet <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
		</div>
	)
}


