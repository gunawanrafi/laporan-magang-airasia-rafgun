import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
  Code2,
  Copy,
  Download,
  GraduationCap,
  Images,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Plane,
  Quote,
  Route,
  Server,
  Smartphone,
  Sparkles,
  StickyNote,
  Terminal,
  TrendingUp,
  Workflow,
  X,
  ZoomIn,
} from 'lucide-react'

/* Named icons so content.js can stay free of imports. */
const ICONS = {
  api: Workflow,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  briefcase: Briefcase,
  calendar: CalendarDays,
  check: CheckCircle2,
  chevron: ChevronRight,
  clock: Clock,
  code: Code2,
  copy: Copy,
  download: Download,
  gallery: Images,
  layers: Layers,
  linkedin: Linkedin,
  mail: Mail,
  menu: Menu,
  note: StickyNote,
  plane: Plane,
  quote: Quote,
  route: Route,
  school: GraduationCap,
  server: Server,
  smartphone: Smartphone,
  sparkles: Sparkles,
  terminal: Terminal,
  trending: TrendingUp,
  workflow: Workflow,
  x: X,
  zoom: ZoomIn,
}

export function Icon({ name, className = 'size-5', ...rest }) {
  const Cmp = ICONS[name] ?? Sparkles
  return <Cmp className={className} strokeWidth={2} aria-hidden="true" {...rest} />
}

/* ------------------------------------------------------------------ */

const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 rounded font-body text-label-md tracking-[0.05em] font-semibold transition-all duration-200 disabled:opacity-50'

const BUTTON_VARIANTS = {
  primary:
    'bg-primary text-white px-6 py-3 hover:bg-primary-bright hover:shadow-lift active:translate-y-px',
  secondary:
    'border-2 border-on-surface text-on-surface px-6 py-3 hover:border-primary hover:text-primary',
  onDark:
    'border-2 border-white/80 text-white px-6 py-3 backdrop-blur-sm hover:bg-white/10 hover:border-white',
  ghost: 'text-primary hover:gap-3 px-0 py-1',
  compact: 'bg-primary text-white px-4 py-2 hover:bg-primary-bright',
}

/** Renders as <Link>, <a> or <button> depending on the props given. */
export function Button({ variant = 'primary', to, href, className = '', children, ...rest }) {
  const cls = `${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}

/* ------------------------------------------------------------------ */

const CHIP_STYLES = {
  outline: 'border border-outline-variant bg-surface text-primary',
  soft: 'bg-surface-variant text-secondary',
  primary: 'bg-primary text-white',
  muted: 'bg-white/85 text-on-surface backdrop-blur-sm',
  success: 'bg-success-soft text-success',
  warning: 'bg-warning-soft text-warning',
  info: 'bg-info-soft text-info',
}

export function Chip({ variant = 'outline', className = '', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-caption font-medium ${CHIP_STYLES[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

/** Status pill for internship milestones. */
export function StatusChip({ status }) {
  const key = String(status).toLowerCase()
  const variant = key.includes('progress') ? 'warning' : key.includes('pending') ? 'info' : 'success'
  return (
    <Chip variant={variant} className="uppercase tracking-[0.08em]">
      {status}
    </Chip>
  )
}

/* ------------------------------------------------------------------ */

/**
 * Level-1 card. `accent` adds the 4px red top border reserved for
 * primary report highlights.
 */
export function Card({ accent = false, hover = true, className = '', children, ...rest }) {
  return (
    <div
      className={`card relative overflow-hidden ${hover ? 'card-hover' : ''} ${className}`}
      {...rest}
    >
      {accent && <span className="absolute inset-x-0 top-0 h-1 bg-primary" aria-hidden="true" />}
      {children}
    </div>
  )
}

export function CardTitle({ icon, children, className = '' }) {
  return (
    <div className={`mb-stack-md flex items-center gap-3 ${className}`}>
      {icon && <Icon name={icon} className="size-6 shrink-0 text-primary" />}
      <h2 className="text-headline-sm md:text-headline-md">{children}</h2>
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** Page-level heading block used at the top of every route. */
export function PageHeader({ eyebrow, title, subtitle, children, center = false }) {
  return (
    <header className={`mb-stack-lg ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="mb-stack-sm text-label-md tracking-[0.12em] text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <h1 className="text-display-sm md:text-display-lg">{title}</h1>
      {subtitle && (
        <p
          className={`mt-stack-sm text-body-lg text-secondary ${center ? 'mx-auto max-w-2xl' : 'max-w-3xl'}`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </header>
  )
}

/** Small back-link with a nudging arrow. */
export function BackLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group mb-stack-md inline-flex w-max items-center gap-2 text-label-md tracking-[0.08em] text-secondary uppercase transition-colors hover:text-primary"
    >
      <Icon
        name="arrowLeft"
        className="size-4 transition-transform group-hover:-translate-x-1"
      />
      {children}
    </Link>
  )
}
