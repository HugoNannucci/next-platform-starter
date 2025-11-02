"use client"

import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Section } from './Section';
import { DotNetLogo } from './icons/DotNetLogo';
import { FigmaLogo } from './icons/FigmaLogo';
import { LaravelLogo } from './icons/LaravelLogo';
import { NextJsLogo } from './icons/NextJsLogo';
import { ReactLogo } from './icons/ReactLogo';
import { SymfonyLogo } from './icons/SymfonyLogo';
import { TailwindLogo } from './icons/TailwindLogo';
import { useMode } from './mode-context';
export const Skills = () => {
	const { mode } = useMode()
	const [tab, setTab] = useState<'frontend' | 'backend'>('frontend')
	const isPresentation = mode === 'presentation'
	return (
		<Section id='skills' className='flex flex-col items-start gap-4'>
			<Badge variant={'outline'}>Skills</Badge>
			<h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary'>
				I love working on...
			</h2>
			{isPresentation ? (
				<>
					<div className='inline-flex items-center gap-1'>
						<button onClick={() => setTab('frontend')} className={`h-6 px-2 rounded ${tab === 'frontend' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}>Front-end</button>
						<button onClick={() => setTab('backend')} className={`h-6 px-2 rounded ${tab === 'backend' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}>Back-end</button>
					</div>
					{tab === 'frontend' ? (
						<div className='flex max-md:flex-col gap-4'>
							<div className='flex flex-col gap-2 flex-1'>
								<ReactLogo size={42} className=' animate-spin' style={{ animationDuration: "10s" }} />
								<h3 className='text-2xl font-semibold tracking-tight'>React</h3>
								<p className='text-sm text-muted-foreground'>J’aime travailler avec React pour sa souplesse et sa logique basée sur les composants. Il me permet de créer des interfaces dynamiques, réactives et faciles à maintenir. Son écosystème riche et sa communauté active en font un outil incontournable pour le développement front-end moderne.</p>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<TailwindLogo size={42} className=' animate-spin' style={{ animationDuration: "10s" }} />
								<h3 className='text-2xl font-semibold tracking-tight'>Tailwind</h3>
								<p className='text-sm text-muted-foreground'>Tailwind CSS me permet de concevoir rapidement des interfaces modernes et harmonieuses. J’apprécie sa philosophie utilitaire qui me donne un contrôle total sur le design tout en garantissant une grande cohérence visuelle à travers mes projets.</p>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<FigmaLogo size={42} className=' animate-spin' style={{ animationDuration: "10s" }} />
								<h3 className='text-2xl font-semibold tracking-tight'>Figma</h3>
								<p className='text-sm text-muted-foreground'>Avec Figma, j’aime pouvoir passer facilement du concept au concret. C’est un outil qui favorise la collaboration et me permet d’assurer une parfaite continuité entre le design et le développement, tout en gagnant du temps sur la conception des interfaces.</p>
							</div>
						</div>
					) : (
						<div className='flex max-md:flex-col gap-4'>
							<div className='flex flex-col gap-2 flex-1'>
								<LaravelLogo size={42} className=' animate-spin' style={{ animationDuration: "10s" }} />
								<h3 className='text-2xl font-semibold tracking-tight'>Laravel</h3>
								<p className='text-sm text-muted-foreground'>Laravel me plaît pour sa simplicité, sa syntaxe élégante et son écosystème complet. C’est un framework qui rend le développement backend agréable tout en offrant une grande puissance et une productivité remarquable, surtout pour les API et les projets web structurés.</p>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<SymfonyLogo size={42} className=' animate-spin' style={{ animationDuration: "10s" }} />
								<h3 className='text-2xl font-semibold tracking-tight'>Symfony</h3>
								<p className='text-sm text-muted-foreground'>J’aime Symfony pour sa robustesse et sa rigueur architecturale. Il impose de bonnes pratiques et offre une grande flexibilité pour concevoir des applications fiables et évolutives, ce qui en fait une base solide pour des projets complexes.</p>
							</div>
						</div>
					)}
				</>
			) : (
				<>
					<div className='inline-flex items-center gap-1'>
						<button onClick={() => setTab('frontend')} className={`h-6 px-2 rounded ${tab === 'frontend' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}>Front-end</button>
						<button onClick={() => setTab('backend')} className={`h-6 px-2 rounded ${tab === 'backend' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}>Back-end</button>
					</div>
					{tab === 'frontend' ? (
						<div className='flex max-md:flex-col gap-4'>
							<div className='flex flex-col gap-2 flex-1'>
								<ReactLogo size={42} className=' animate-spin' style={{ animationDuration: "10s" }} />
								<h3 className='text-2xl font-semibold tracking-tight'>React</h3>
								<p className='text-sm text-muted-foreground'>J’aime travailler avec React pour sa souplesse et sa logique basée sur les composants. Il me permet de créer des interfaces dynamiques, réactives et faciles à maintenir. Son écosystème riche et sa communauté active en font un outil incontournable pour le développement front-end moderne.</p>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<TailwindLogo size={42} className=' animate-spin' style={{ animationDuration: "10s" }} />
								<h3 className='text-2xl font-semibold tracking-tight'>Tailwind</h3>
								<p className='text-sm text-muted-foreground'>Tailwind CSS me permet de concevoir rapidement des interfaces modernes et harmonieuses. J’apprécie sa philosophie utilitaire qui me donne un contrôle total sur le design tout en garantissant une grande cohérence visuelle à travers mes projets.</p>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<NextJsLogo size={42} className=' animate-spin' style={{ animationDuration: "10s" }} />
								<h3 className='text-2xl font-semibold tracking-tight'>Next.js</h3>
								<p className='text-sm text-muted-foreground'>Avec Next.js, j’apprécie la combinaison parfaite entre performance, SEO et ergonomie de développement. Son rendu côté serveur et ses possibilités de génération statique permettent de créer des sites ultra-rapides tout en gardant la puissance de React.</p>
							</div>
						</div>
					) : (
						<div className='flex max-md:flex-col gap-4'>
							<div className='flex flex-col gap-2 flex-1'>
								<LaravelLogo size={42} className=' animate-spin' style={{ animationDuration: "10s" }} />
								<h3 className='text-2xl font-semibold tracking-tight'>Laravel</h3>
								<p className='text-sm text-muted-foreground'>Laravel me plaît pour sa simplicité, sa syntaxe élégante et son écosystème complet. C’est un framework qui rend le développement backend agréable tout en offrant une grande puissance et une productivité remarquable, surtout pour les API et les projets web structurés.</p>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<SymfonyLogo size={42} className=' animate-spin' style={{ animationDuration: "10s" }} />
								<h3 className='text-2xl font-semibold tracking-tight'>Symfony</h3>
								<p className='text-sm text-muted-foreground'>J’aime Symfony pour sa robustesse et sa rigueur architecturale. Il impose de bonnes pratiques et offre une grande flexibilité pour concevoir des applications fiables et évolutives, ce qui en fait une base solide pour des projets complexes.</p>
							</div>
							<div className='flex flex-col gap-2 flex-1'>
								<DotNetLogo size={42} className=' animate-spin' style={{ animationDuration: "10s" }} />
								<h3 className='text-2xl font-semibold tracking-tight'>.NET</h3>
								<p className='text-sm text-muted-foreground'>.NET m’intéresse pour sa stabilité et sa polyvalence. C’est un environnement idéal pour développer des applications performantes et maintenables, notamment côté entreprise, avec une excellente intégration entre le backend et les outils Microsoft.</p>
							</div>
						</div>
					)}
				</>
			)}
		</Section>
	)
}
