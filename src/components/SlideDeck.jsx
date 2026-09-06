import { useEffect, useRef, useState } from 'react'
import { Icon } from './ui'

/**
 * Slide viewer for a presented deck. `deck` is
 * { slides: [{ src, title, note? }], downloadUrl?, downloadLabel? }.
 *
 * One slide is shown large with its speaker note beside it; the filmstrip
 * below jumps to any slide. Arrow keys work once the viewer has focus, so
 * keyboard users are not forced through every thumbnail to advance.
 */
export default function SlideDeck({ deck, onPreview }) {
  const [index, setIndex] = useState(0)
  const stripRef = useRef(null)
  const total = deck.slides.length
  const slide = deck.slides[index]

  const go = (next) => setIndex((i) => (i + next + total) % total)

  /* Keep the active thumbnail in view when moving with the arrows. */
  useEffect(() => {
    const strip = stripRef.current
    const active = strip?.querySelector('[data-active="true"]')
    if (!strip || !active) return
    const left = active.offsetLeft - strip.offsetWidth / 2 + active.offsetWidth / 2
    strip.scrollTo({ left, behavior: 'smooth' })
  }, [index])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(-1)
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-stack-lg lg:flex-row">
        {/* Stage */}
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Seminar slides"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="lg:w-2/3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <button
            type="button"
            onClick={() => onPreview?.({ src: slide.src, alt: slide.title, caption: slide.title })}
            className="group relative block w-full overflow-hidden rounded-lg border border-outline-variant bg-surface-high"
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="block h-auto w-full"
              /* The first slide is the visible one on load; the rest can wait. */
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <span className="absolute top-3 right-3 rounded-full bg-white/15 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <Icon name="zoom" className="size-5" />
            </span>
          </button>

          {/* Controls */}
          <div className="no-print mt-stack-sm flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="inline-flex items-center gap-2 rounded border border-outline-variant px-4 py-2 text-label-md tracking-[0.05em] text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              <Icon name="arrowLeft" className="size-4" />
              Prev
            </button>

            <span
              aria-live="polite"
              className="font-mono text-caption tracking-[0.08em] text-secondary"
            >
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="inline-flex items-center gap-2 rounded border border-outline-variant px-4 py-2 text-label-md tracking-[0.05em] text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Next
              <Icon name="arrowRight" className="size-4" />
            </button>
          </div>
        </div>

        {/* Speaker note for the current slide */}
        <div className="lg:w-1/3">
          <p className="text-label-md tracking-[0.08em] text-primary uppercase">
            Slide {index + 1}
          </p>
          <h3 className="mt-2 text-headline-sm">{slide.title}</h3>
          {slide.note && (
            <p className="mt-stack-sm text-body-md text-on-surface-variant">{slide.note}</p>
          )}

          {deck.downloadUrl && (
            <a
              href={deck.downloadUrl}
              download
              className="no-print mt-stack-md inline-flex items-center gap-2 rounded bg-primary px-5 py-3 text-label-md font-semibold tracking-[0.05em] text-white transition-colors hover:bg-primary-bright"
            >
              <Icon name="download" className="size-4" />
              {deck.downloadLabel ?? 'Download the deck'}
            </a>
          )}
        </div>
      </div>

      {/* Filmstrip */}
      <ul
        ref={stripRef}
        className="no-print mt-stack-md flex gap-3 overflow-x-auto pb-2"
        aria-label="Slide thumbnails"
      >
        {deck.slides.map((item, i) => (
          <li key={item.src} className="shrink-0">
            <button
              type="button"
              data-active={i === index}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}: ${item.title}`}
              aria-current={i === index ? 'true' : undefined}
              className={`block w-28 overflow-hidden rounded border-2 transition-colors ${
                i === index
                  ? 'border-primary'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={item.src} alt="" loading="lazy" className="block h-auto w-full" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
