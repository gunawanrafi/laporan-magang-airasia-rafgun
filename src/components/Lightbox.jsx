import { useEffect } from 'react'
import { Icon } from './ui'

/**
 * Minimal image viewer. `image` is { src, alt, caption } or null.
 * Closes on Escape, backdrop click, or the close button.
 */
export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt || 'Image preview'}
      onClick={onClose}
      className="no-print fixed inset-0 z-[100] flex items-center justify-center bg-inverse-surface/85 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25"
      >
        <Icon name="x" className="size-6" />
      </button>

      <figure onClick={(e) => e.stopPropagation()} className="max-h-full w-full max-w-5xl">
        <img
          src={image.src}
          alt={image.alt || ''}
          className="max-h-[80vh] w-full rounded-lg object-contain"
        />
        {image.caption && (
          <figcaption className="mt-4 text-center text-body-md text-white/85">
            {image.caption}
          </figcaption>
        )}
      </figure>
    </div>
  )
}
