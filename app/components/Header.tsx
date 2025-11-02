"use client";

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Cv } from './Cv';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { ModeToggle } from './ModeToggle';
import { Section } from './Section';

export const Header = () => {
    const [open, setOpen] = useState(false);
	return (
		<header className=' sticky top-0 bg-background'>
			<Section className=' flex items-center'>
                <p className=' text-lg font-bold text-primary '>dev.hugo-nannucci.com</p>
				<div className=' flex-1' />
				<button
					className={cn(buttonVariants({ variant: 'ghost' }), 'md:hidden h-8 px-2')}
					onClick={() => setOpen(!open)}
					aria-expanded={open}
					aria-controls='mobile-nav'
				>
					{open ? <X size={20} /> : <Menu size={20} />}
				</button>
				<ul className=' hidden md:flex gap-2 items-center'>
                    <li>
                        <ModeToggle />
                    </li>
                    <li>
                        <Link href="/#projets" className={cn(buttonVariants({ variant: 'ghost' }), 'h-6 px-2')}>Projets</Link>
                    </li>
                    <li>
                        <Link href="/#skills" className={cn(buttonVariants({ variant: 'ghost' }), 'h-6 px-2')}>Skills</Link>
                    </li>
                    <li>
                        <Link href="/#contact" className={cn(buttonVariants({ variant: 'ghost' }), 'h-6 px-2')}>Contact</Link>
                    </li>
					<Cv />
					<Link
						target='_blank'
						href='https://github.com/HugoNannucci'
						className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}
					>
						<GithubIcon size={24} className=' text-foreground' />
					</Link>
					<Link
						target='_blank'
						href='https://Linkedin.com/in/hugo-nannucci-6995a8302/'
						className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}
					>
						<LinkedInIcon size={24} className=' text-foreground' />
					</Link>
				</ul>
			</Section>
			{open && (
				<div id='mobile-nav' className='md:hidden border-t'>
					<Section className='flex flex-col gap-2 py-2'>
						<ModeToggle />
						<Link href="/#projets" className={cn(buttonVariants({ variant: 'ghost' }), 'justify-start h-8')}
							onClick={() => setOpen(false)}
						>
							Projets
						</Link>
						<Link href="/#skills" className={cn(buttonVariants({ variant: 'ghost' }), 'justify-start h-8')}
							onClick={() => setOpen(false)}
						>
							Skills
						</Link>
						<Link href="/#contact" className={cn(buttonVariants({ variant: 'ghost' }), 'justify-start h-8')}
							onClick={() => setOpen(false)}
						>
							Contact
						</Link>
						<div className='flex items-center gap-2 pt-2'>
							<Cv />
							<Link target='_blank' href='https://github.com/HugoNannucci' className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}>
								<GithubIcon size={24} className=' text-foreground' />
							</Link>
							<Link target='_blank' href='https://Linkedin.com/in/hugo-nannucci-6995a8302/' className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}>
								<LinkedInIcon size={24} className=' text-foreground' />
							</Link>
						</div>
					</Section>
				</div>
			)}
		</header>
	)
}
