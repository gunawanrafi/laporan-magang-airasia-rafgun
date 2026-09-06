import { useEffect, useRef, useState } from 'react'

/**
 * Fades content in the first time it enters the viewport.
 *
 * Uses a measured rect rather than IntersectionObserver on purpose: the
 * observer only fires once the page has been composited, which leaves
 * content stuck at opacity 0 in headless renders and print-to-PDF. A
 * rect check on mount plus a passive scroll listener behaves the same
 * for a real visitor and can never leave content invisible.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const check = () => {
      const rect = el.getBoundingClientRect()
      const isNear = rect.top < window.innerHeight * 0.92 && rect.bottom > 0
      if (isNear) {
        setShown(true)
        window.removeEventListener('scroll', check)
        window.removeEventListener('resize', check)
      }
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)

    // Safety net: never leave content hidden, whatever happens above.
    const failsafe = setTimeout(() => setShown(true), 2000)

    return () => {
      clearTimeout(failsafe)
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
