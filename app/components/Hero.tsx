import Image from 'next/image';
import { Section } from './Section';

export const Hero = () => {
	return (
        <Section id='hero' className='flex max-md:flex-col items-start gap-4'>
			<div className='flex-[3] w-full'>
                <h1 className='font-caption font-bold text-5xl text-orange-500'>Hugo Nannucci</h1>
                <h2 className='text-3xl font-caption'>Développeur Web</h2>
				<p className='text-base'>
					En tant que développeur passionné par la programmation, je souhaite mettre en
					pratique mes compétences au service de vos projets et objectifs.
				</p>
				<p className='text-base mt-10 font-semibold pt-2'>
					{"Actuellement en Alternance chez Zonebourse!"}
				</p>
                <div className='text-sm text-muted-foreground mt-4 space-y-1'>
                    <p>
                        Email : <a className='underline' href='mailto:nannucci.hugo@gmail.com'>nannucci.hugo@gmail.com</a>
                    </p>
                    <p>Localisation : France</p>
                </div>
			</div>
			<div className=' flex-[2] max-md:m-auto ml-auto'>
				<div className='rounded-full overflow-hidden w-[300px] h-[300px] max-md:w-56 max-md:h-56 shadow-foreground-soft'>
					<Image
						src='/moi2.jpg'
						alt="photo d'Hugo Nannucci"
						width={300}
						height={300}
						className='w-full h-full object-cover'
					/>
				</div>
			</div>
		</Section>
	)
}
