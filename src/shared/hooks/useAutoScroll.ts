import { useEffect } from 'react'

export const useAutoScroll = (
  ref: React.RefObject<HTMLElement | null>,
  enabled: boolean,
) => {
  useEffect(() => {
    if (!enabled || !ref.current) return

    requestAnimationFrame(() => {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }, [enabled])
}
