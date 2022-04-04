import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

export function useSearch<T = string>(handle: (search: T) => any, time?: number) {
    const [search, setSearch] = useState<T>()
    const searchTimeoutRef = useRef<NodeJS.Timeout>()

    // search after a time
    useEffect(() => {
        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current)
        }
        searchTimeoutRef.current = setTimeout(() => {
            if (!!search) handle(search)
        }, time || 500)
        return () => {
            console.log('Search effect cleanup')
        }
    }, [search])

    // clear timeout when unmount
    useEffect(() => {
        return () => {
            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current)
            }
        }
    }, [])
    return { search, setSearch }
}
