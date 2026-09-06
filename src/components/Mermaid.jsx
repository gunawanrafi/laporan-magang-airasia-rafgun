import { useEffect, useRef, useState } from 'react'

/* Mermaid is ~500 kB, so it is imported on demand and shared across every diagram. */
let mermaidLoader = null

function loadMermaid() {
  if (!mermaidLoader) {
    mermaidLoader = import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        theme: 'base',
        fontFamily: 'inherit',
        themeVariables: {
          primaryColor: '#eff6ff',
          primaryBorderColor: '#3b82f6',
          primaryTextColor: '#0f172a',
          lineColor: '#94a3b8',
          fontSize: '14px',
        },
        flowchart: { htmlLabels: true, padding: 12, nodeSpacing: 40, rankSpacing: 45 },
      })
      return mermaid
    })
  }
  return mermaidLoader
}

/**
 * Renders one Mermaid definition. `block` is { definition, title?, caption? }.
 * If Mermaid fails to load or the definition does not parse, the source is
 * shown instead of leaving an empty gap on the page.
 */
export default function MermaidBlock({ block }) {
  const hostRef = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false

    loadMermaid()
      .then(async (mermaid) => {
        if (cancelled || !hostRef.current) return
        const id = `mermaid-${Math.random().toString(36).slice(2, 10)}`
        const { svg } = await mermaid.render(id, block.definition)
        if (!cancelled && hostRef.current) hostRef.current.innerHTML = svg
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
    }
  }, [block.definition])

  if (failed) {
    return (
      <figure className="rounded border border-outline-variant bg-surface-high p-4">
        <pre className="overflow-x-auto font-mono text-[12px] leading-relaxed text-on-surface-variant">
          <code>{block.definition}</code>
        </pre>
        {block.caption && (
          <figcaption className="mt-2 text-caption text-secondary">{block.caption}</figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure>
      {block.title && <h3 className="mb-stack-sm text-headline-sm">{block.title}</h3>}
      <div className="overflow-x-auto rounded border border-outline-variant bg-surface-lowest p-4">
        <div
          ref={hostRef}
          className="mermaid flex min-w-fit justify-center"
          role="img"
          aria-label={block.caption || block.title || 'Diagram'}
        />
      </div>
      {block.caption && (
        <figcaption className="mt-2 text-caption text-secondary">{block.caption}</figcaption>
      )}
    </figure>
  )
}
