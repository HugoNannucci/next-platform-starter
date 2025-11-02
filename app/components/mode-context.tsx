'use client'

import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'

export type PortfolioMode = 'presentation' | 'apprentissage'

type ModeContextValue = {
    mode: PortfolioMode
    setMode: (mode: PortfolioMode) => void
}

const ModeContext = createContext<ModeContextValue | null>(null)

export function useMode(): ModeContextValue {
    const ctx = useContext(ModeContext)
    if (!ctx) throw new Error('useMode must be used within ModeProvider')
    return ctx
}

export function ModeProvider(props: PropsWithChildren<{ initialMode?: PortfolioMode }>) {
    const [mode, setModeState] = useState<PortfolioMode>(props.initialMode || 'presentation')

    const setMode = (next: PortfolioMode) => {
        setModeState(next)
        // persist in cookie for 1 year
        try {
            document.cookie = `mode=${next}; path=/; max-age=${60 * 60 * 24 * 365}`
        } catch {}
    }

    // Sync with cookie if SSR provided a different initial value and client has another
    useEffect(() => {
        const cookie = typeof document !== 'undefined' ? document.cookie.split('; ').find(c => c.startsWith('mode=')) : undefined
        const value = cookie?.split('=')[1] as PortfolioMode | undefined
        if (value && value !== mode) setModeState(value)
    }, [])

    const value = useMemo(() => ({ mode, setMode }), [mode])
    return <ModeContext.Provider value={value}>{props.children}</ModeContext.Provider>
}


