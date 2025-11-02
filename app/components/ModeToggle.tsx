'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useMode } from './mode-context'

export const ModeToggle = () => {
    const { mode, setMode } = useMode()
    const isPresentation = mode === 'presentation'
    return (
        <div className='inline-flex items-center gap-1'>
            <button
                type='button'
                onClick={() => setMode('presentation')}
                className={cn(buttonVariants({ variant: isPresentation ? 'default' : 'ghost' }), 'h-6 px-2')}
            >
                Présentation
            </button>
            <button
                type='button'
                onClick={() => setMode('apprentissage')}
                className={cn(buttonVariants({ variant: !isPresentation ? 'default' : 'ghost' }), 'h-6 px-2')}
            >
                Apprentissage
            </button>
        </div>
    )
}


