import { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import MermaidBlock from '../components/Mermaid'
import { BackLink, Card, Icon, StatusChip } from '../components/ui'
import { courses } from '../data/content'

/* ------------------------------------------------------------------ */
/* Blocks                                                              */
/* ------------------------------------------------------------------ */

function CodeBlock({ block }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(block.lines.join('\n'))
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard is unavailable over plain http — fail quietly.
    }
  }

  return (
    <div className="overflow-hidden rounded border border-surface-variant">
      <div className="flex items-center justify-between gap-4 border-b border-surface-variant bg-surface-high px-4 py-2">
        <span className="text-label-md tracking-[0.05em] text-on-surface">{block.title}</span>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${block.title} command`}
          className="no-print inline-flex items-center gap-1.5 text-caption text-secondary transition-colors hover:text-primary"
        >
          <Icon name={copied ? 'check' : 'copy'} className="size-4" />
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto bg-inverse-surface p-4 font-mono text-[13px] leading-relaxed text-inverse-on-surface">
        <code>{block.lines.join('\n')}</code>
      </pre>
    </div>
  )
}

const TRANSPORT_CHIP = { TCP: 'chip-tcp', UDP: 'chip-udp', 'TCP/UDP': 'chip-both' }

function Block({ block, onPreview }) {
  switch (block.type) {
    case 'text':
      return (
        <p
          className={
            block.lead ? 'text-body-lg text-on-surface' : 'text-body-md text-on-surface-variant'
          }
        >
          {block.body}
        </p>
      )

    case 'image':
      return (
        <figure>
          <button
            type="button"
            onClick={() => onPreview({ src: block.src, alt: block.alt, caption: block.caption })}
            className="block aspect-[2/1] w-full overflow-hidden rounded border border-outline-variant bg-surface-high"
          >
            {/* Course images are all requested at 1200x600. Declaring the box and the
                intrinsic size keeps the page height stable while they load, so an
                anchored module link still lands on its heading. */}
            <img
              src={block.src}
              alt={block.alt}
              width="1200"
              height="600"
              loading="lazy"
              className="size-full object-cover"
            />
          </button>
          {block.caption && (
            <figcaption className="mt-2 text-caption text-secondary">{block.caption}</figcaption>
          )}
        </figure>
      )

    case 'list':
      return (
        <div>
          {block.title && <h3 className="mb-stack-sm text-headline-sm">{block.title}</h3>}
          <ul className="space-y-2">
            {block.items.map((item) => (
              <li key={item.term} className="flex gap-3 text-body-md text-on-surface-variant">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-on-surface">{item.term}:</strong>{' '}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'code':
      return <CodeBlock block={block} />

    case 'mermaid':
      return <MermaidBlock block={block} />

    case 'table':
      return (
        <figure>
          {block.title && <h3 className="mb-stack-sm text-headline-sm">{block.title}</h3>}
          <div className="overflow-x-auto rounded border border-outline-variant md:overflow-visible">
            <table className="data-table">
              <thead>
                <tr>
                  {block.columns.map((col) => (
                    <th key={col} scope="col">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("|")}>
                    {row.map((cell, c) => (
                      <td key={block.columns[c]} data-label={block.columns[c]}>
                        {TRANSPORT_CHIP[cell] ? (
                          <span className={`chip ${TRANSPORT_CHIP[cell]}`}>{cell}</span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-caption text-secondary">{block.caption}</figcaption>
          )}
        </figure>
      )

    case 'gallery':
      return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() => onPreview({ src: item.src, alt: item.alt, caption: item.label })}
              className="group relative aspect-video overflow-hidden rounded border border-outline-variant"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-inverse-surface/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-2 text-label-md tracking-[0.05em] text-white">
                  <Icon name="zoom" className="size-5" />
                  {item.label}
                </span>
              </span>
            </button>
          ))}
        </div>
      )

    default:
      return null
  }
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CourseDetail() {
  const { slug } = useParams()
  const location = useLocation()
  const [preview, setPreview] = useState(null)
  const [activeId, setActiveId] = useState(null)

  const course = courses.find((c) => c.slug === slug)

  /*
   * Jump to the module named in the hash.
   *
   * The app runs on HashRouter, so the whole route already lives in the URL
   * fragment. A plain <a href="#osi-model"> would overwrite that fragment and
   * throw the reader onto the 404 route, so module links are <Link>s carrying
   * a nested hash and the scroll is done here instead of by the browser.
   */
  useEffect(() => {
    const id = location.hash.replace(/^#/, '')
    if (!id) return

    /*
     * Position the module heading under the sticky navbar.
     *
     * Done with an explicit scrollTo rather than scrollIntoView: the diagrams
     * mount asynchronously and add height above the target, so the landing
     * point is re-checked for a moment and corrected if the page grew.
     *
     * The stylesheet sets `scroll-behavior: smooth` on :root, which would make
     * each correction animate and fight the one before it, so smoothing is
     * suspended for the duration of the jump and restored afterwards.
     */
    const OFFSET = 112 // matches scroll-mt-28 on the section card
    const root = document.documentElement
    const previousBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'

    let cancelled = false
    let stable = 0
    const startedAt = Date.now()

    // If the reader starts scrolling themselves, stop correcting.
    const abort = () => {
      cancelled = true
    }
    window.addEventListener('wheel', abort, { passive: true, once: true })
    window.addEventListener('touchmove', abort, { passive: true, once: true })
    window.addEventListener('keydown', abort, { once: true })

    let timer = 0
    const settle = () => {
      if (cancelled) return
      const el = document.getElementById(id)
      if (el) {
        const delta = el.getBoundingClientRect().top - OFFSET
        if (Math.abs(delta) < 2) stable += 1
        else {
          stable = 0
          window.scrollTo(0, window.scrollY + delta)
        }
      }
      if (stable < 3 && Date.now() - startedAt < 2500) {
        timer = window.setTimeout(settle, 80)
      } else {
        root.style.scrollBehavior = previousBehavior
      }
    }
    settle()

    return () => {
      cancelled = true
      root.style.scrollBehavior = previousBehavior
      clearTimeout(timer)
      window.removeEventListener('wheel', abort)
      window.removeEventListener('touchmove', abort)
      window.removeEventListener('keydown', abort)
    }
  }, [location.hash, slug])

  // Scrollspy: highlight the module currently nearest the top.
  useEffect(() => {
    if (!course) return
    const sections = course.sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)
    if (!sections.length) return

    const onScroll = () => {
      const marker = window.scrollY + 140
      let current = sections[0].id
      for (const el of sections) {
        if (el.offsetTop <= marker) current = el.id
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [course])

  if (!course) return <Navigate to="/courses" replace />

  return (
    <div className="container-page flex flex-col gap-gutter py-stack-lg md:flex-row">
      {/* Module sidebar */}
      <aside className="no-print w-full shrink-0 md:w-1/4">
        <div className="sticky top-[100px] rounded-lg border border-surface-variant bg-surface-lowest p-6 shadow-card">
          <h2 className="mb-stack-md text-headline-sm">Modules</h2>
          <ul className="ml-2 space-y-stack-sm border-l-2 border-surface-variant pl-4">
            {course.modules.map((mod) => {
              const isActive = activeId === mod.id
              return (
                <li key={mod.id} className="relative">
                  <span
                    className={`absolute top-1.5 -left-[21px] size-2.5 rounded-full border-2 border-surface-lowest transition-colors ${
                      isActive ? 'bg-primary' : 'bg-surface-dim'
                    }`}
                    aria-hidden="true"
                  />
                  <Link
                    to={{ pathname: location.pathname, hash: mod.id }}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block text-label-md tracking-[0.05em] transition-colors ${
                      isActive ? 'font-semibold text-primary' : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {mod.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>

      {/* Documentation body */}
      <article className="w-full space-y-stack-lg md:w-3/4">
        <header className="border-b border-surface-variant pb-stack-md">
          <BackLink to="/courses">Back to courses</BackLink>
          <h1 className="text-display-sm md:text-display-lg">{course.title}</h1>
          <div className="mt-stack-sm flex flex-wrap items-center gap-4 text-caption text-secondary">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="calendar" className="size-4" />
              {course.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="clock" className="size-4" />
              {course.hours}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="school" className="size-4" />
              {course.provider}
            </span>
            <StatusChip status={course.status} />
          </div>
        </header>

        {course.sections.map((section) => (
          <Card
            key={section.id}
            id={section.id}
            accent={section.accent}
            hover={false}
            className="scroll-mt-28 p-6 md:p-8"
          >
            <h2 className="mb-stack-md flex items-center gap-3 text-headline-md">
              <Icon
                name={section.icon}
                className={`size-6 ${section.accent ? 'text-primary' : 'text-tertiary'}`}
              />
              {section.title}
            </h2>
            <div className="space-y-stack-md">
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} onPreview={setPreview} />
              ))}
            </div>
          </Card>
        ))}
      </article>

      <Lightbox image={preview} onClose={() => setPreview(null)} />
    </div>
  )
}
