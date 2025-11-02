import { cn } from '@/lib/utils'
import { HTMLAttributes, PropsWithChildren } from 'react'

export const Section = (props: PropsWithChildren<{ className?: string } & HTMLAttributes<HTMLElement>>) => {
    const { className, children, ...rest } = props
    return (
        <section {...rest} className={cn('max-w-3xl px-4 m-auto py-4', className)}>{children}</section>
    )
}
