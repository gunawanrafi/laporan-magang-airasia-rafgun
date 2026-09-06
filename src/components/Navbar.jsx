import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/content'
import { Icon } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close the drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  // Deepen the header hairline once the page leaves the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll behind the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `relative py-1 text-label-md tracking-[0.05em] transition-colors duration-200 ${
      isActive ? 'text-primary' : 'text-secondary hover:text-primary'
    } after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-primary after:transition-transform after:duration-200 ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    }`

  return (
    <header
      className={`no-print glass sticky top-0 z-50 w-full border-b transition-shadow duration-300 ${
        scrolled ? 'border-outline-variant shadow-card' : 'border-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={site.logo} alt="" className="h-8 w-auto" />
          <span className="font-display text-headline-sm font-bold text-primary md:text-headline-md">
            {site.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-2 rounded bg-primary px-4 py-2 text-label-md tracking-[0.05em] font-semibold text-white transition-colors hover:bg-primary-bright sm:inline-flex"
          >
            <Icon name="mail" className="size-4" />
            Contact
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded p-2 text-secondary transition-colors hover:bg-surface-variant hover:text-primary lg:hidden"
          >
            <Icon name={open ? 'x' : 'menu'} className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-outline-variant bg-surface-lowest transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <nav className="container-page flex flex-col py-2" aria-label="Mobile">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `border-b border-surface-variant py-3 text-body-md last:border-0 ${
                  isActive ? 'font-semibold text-primary' : 'text-secondary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="mt-3 mb-3 inline-flex items-center justify-center gap-2 rounded bg-primary px-4 py-3 text-label-md font-semibold tracking-[0.05em] text-white sm:hidden"
          >
            <Icon name="mail" className="size-4" />
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
