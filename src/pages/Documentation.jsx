import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import Reveal from '../components/Reveal'
import { Chip, Icon, PageHeader } from '../components/ui'
import { documentation } from '../data/content'

/* Desktop grid placement per tile size. */
const SPAN = {
  feature: 'md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-[560px]',
  tall: 'md:col-span-1 md:row-span-1 min-h-[260px]',
  wide: 'md:col-span-3 min-h-[300px]',
}

export default function Documentation() {
  const [preview, setPreview] = useState(null)
  const [visible, setVisible] = useState(6)

  const items = documentation.items.slice(0, visible)
  const hasMore = visible < documentation.items.length

  return (
    <div className="container-page py-stack-lg">
      <PageHeader center title={documentation.title} subtitle={documentation.subtitle} />

      <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-gutter md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 70}
            className={SPAN[item.span] ?? SPAN.tall}
          >
            <button
              type="button"
              onClick={() =>
                setPreview({ src: item.image, alt: item.alt, caption: item.caption })
              }
              className="group relative block size-full overflow-hidden rounded-lg border border-hairline text-left shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className={`absolute inset-0 size-full transition-transform duration-700 group-hover:scale-105 ${
                  item.fit === 'contain'
                    ? 'bg-surface-high object-contain object-top p-2'
                    : 'object-cover'
                }`}
              />
              {/* Screenshots are readable only when whole, so their scrim is confined
                  to the caption strip rather than washing over the whole tile. */}
              <span
                className={
                  item.fit === 'contain'
                    ? 'absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/55 to-transparent'
                    : 'absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent'
                }
              />

              <span className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-6">
                <Chip variant={item.tagStyle === 'primary' ? 'primary' : 'muted'}>{item.tag}</Chip>
                <span className="font-display text-headline-sm font-semibold text-white">
                  {item.title}
                </span>
                <span className="max-w-xl text-body-md text-white/85">{item.caption}</span>
              </span>

              <span className="absolute top-4 right-4 rounded-full bg-white/15 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <Icon name="zoom" className="size-5" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {hasMore && (
        <div className="no-print mt-stack-lg flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + 6)}
            className="rounded border-2 border-on-surface px-6 py-3 text-label-md tracking-[0.05em] font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            Load more moments
          </button>
        </div>
      )}

      <Lightbox image={preview} onClose={() => setPreview(null)} />
    </div>
  )
}
