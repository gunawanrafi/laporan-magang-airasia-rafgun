import { Link } from 'react-router-dom'
import { footer, site } from '../data/content'
import { Icon } from './ui'

export default function Footer() {
  return (
    <footer className="no-print mt-stack-lg border-t border-outline-variant bg-surface-low">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-stack-md md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-headline-sm font-bold text-tertiary">{site.brand}</p>
          <p className="mt-1 text-caption text-secondary">
            © {site.year} {site.reportTitle} • Digital Portfolio
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {footer.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="link-underline text-label-md tracking-[0.05em] text-on-surface-variant transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-on-surface-variant transition-colors hover:text-primary"
          >
            <Icon name="linkedin" className="size-5" />
          </a>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded border border-secondary px-3 py-1.5 text-label-md tracking-[0.05em] text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
          >
            <Icon name="download" className="size-4" />
            Download PDF
          </button>
        </div>
      </div>
    </footer>
  )
}
