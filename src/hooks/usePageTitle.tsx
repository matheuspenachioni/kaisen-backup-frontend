import { useEffect } from 'react'

export function usePageTitle(title: string): void {
  useEffect(() => {
    const initialPageTitle = document.title
    document.title = `${initialPageTitle} - ${title}`

    return () => {
      document.title = initialPageTitle
    }
  }, [title])
}
