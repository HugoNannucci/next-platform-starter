import { ComponentPropsWithoutRef } from 'react'

export const DotNetLogo = (
    props: ComponentPropsWithoutRef<'svg'> & { size?: number }
) => {
    const { size = 42, ...rest } = props
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <circle cx="64" cy="64" r="64" fill="#512BD4" />
            <g fill="#fff">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="inherit" fontSize="40">.NET</text>
            </g>
        </svg>
    )
}


