import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import MermaidBlock from '../components/Mermaid'
import Reveal from '../components/Reveal'
import SlideDeck from '../components/SlideDeck'
import { Card, CardTitle, Chip, Icon, StatusChip } from '../components/ui'
import { projects } from '../data/content'

export default function ProjectDetail() {
  const { slug } = useParams()
  const [preview, setPreview] = useState(null)

  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <Navigate to="/projects" replace />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  /* Projects may ship a single gallery image or a set of captured screens. */
  const shots = project.gallery.items ?? [
    {
      src: project.gallery.image,
      alt: project.gallery.alt,
      caption: project.gallery.caption,
    },
  ]

  return (
    <div className="container-page py-stack-lg">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-stack-md flex items-center gap-2 text-body-md">
        <Link to="/projects" className="text-secondary transition-colors hover:text-primary">
          Projects
        </Link>
        <Icon name="chevron" className="size-4 text-outline" />
        <span className="font-semibold text-on-surface">{project.shortTitle ?? project.title}</span>
      </nav>

      {/* Heading */}
      <header className="mb-stack-lg">
        <h1 className="text-display-sm text-primary md:text-display-lg">{project.title}</h1>
        <p className="mt-stack-sm max-w-3xl text-body-lg text-on-surface-variant">
          {project.description}
        </p>
        <div className="mt-stack-md flex flex-wrap items-center gap-3">
          <StatusChip status={project.status} />
          <span className="inline-flex items-center gap-1.5 text-caption text-secondary">
            <Icon name="calendar" className="size-4" />
            {project.period}
          </span>
          {project.tags.map((tag) => (
            <Chip key={tag} variant="soft">
              {tag}
            </Chip>
          ))}
        </div>
      </header>

      {/* Headline figures */}
      {project.metrics && (
        <Reveal className="mb-stack-lg">
          <ul className="grid grid-cols-2 gap-gutter lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <li
                key={metric.label}
                className="rounded border border-hairline bg-surface p-5 transition-colors duration-300 hover:border-primary"
              >
                <Icon name={metric.icon} className="mb-2 size-5 text-primary" />
                <p className="font-display text-headline-md font-bold text-on-surface">
                  {metric.value}
                </p>
                <p className="mt-1 text-caption text-secondary">{metric.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        {/* Documentation gallery */}
        <Reveal className="md:col-span-8">
          <Card accent className="h-full p-6 md:p-8">
            <CardTitle icon="gallery">Documentation Gallery</CardTitle>
            <ul
              className={`grid grid-cols-1 gap-gutter ${shots.length > 1 ? 'sm:grid-cols-2' : ''}`}
            >
              {shots.map((shot) => (
                <li key={shot.src}>
                  <button
                    type="button"
                    onClick={() => setPreview(shot)}
                    className="group relative block aspect-video w-full overflow-hidden rounded border border-outline-variant bg-surface-variant"
                  >
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                      className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {shot.label && (
                      <span className="absolute top-3 left-3 rounded-full bg-white/85 px-3 py-1 text-caption font-medium text-on-surface backdrop-blur-sm">
                        {shot.label}
                      </span>
                    )}
                    <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-2 text-label-md tracking-[0.05em] text-white">
                        <Icon name="zoom" className="size-4" />
                        View full size
                      </span>
                    </span>
                  </button>
                  {shot.caption && (
                    <p className="mt-3 text-body-md text-on-surface-variant">{shot.caption}</p>
                  )}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        {/* Business impact */}
        <Reveal delay={80} className="md:col-span-4">
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg bg-primary p-6 text-white shadow-card md:p-8">
            <Icon
              name="trending"
              className="pointer-events-none absolute -top-6 -right-6 size-40 opacity-10"
            />
            <div className="relative">
              <div className="mb-stack-md flex items-center gap-3">
                <Icon name="trending" className="size-6" />
                <h2 className="text-headline-sm text-white">Business Impact</h2>
              </div>
              <p className="text-body-lg leading-relaxed">{project.impact.body}</p>
            </div>
            <div className="relative mt-stack-lg border-t border-white/20 pt-stack-sm">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-caption">
                {project.impact.chip}
              </span>
            </div>
          </div>
        </Reveal>

        {/* System architecture */}
        <Reveal className="md:col-span-12">
          <Card accent className="p-6 md:p-8">
            <div className="flex flex-col items-start gap-stack-lg md:flex-row">
              <div className="w-full md:w-1/3">
                <CardTitle icon="route">System Architecture</CardTitle>
                <p className="mb-stack-md text-body-md text-on-surface-variant">
                  {project.architecture.body}
                </p>
                <ol className="flex flex-col gap-1">
                  {project.architecture.flow.map((node, i) => (
                    <li key={node.label}>
                      <div
                        className={`flex items-center gap-2 text-label-md tracking-[0.05em] ${
                          node.highlight ? 'font-semibold text-primary' : 'text-secondary'
                        }`}
                      >
                        <Icon name={node.icon} className="size-4" />
                        {node.label}
                      </div>
                      {i < project.architecture.flow.length - 1 && (
                        <span
                          className="my-1 ml-2 block h-4 w-0.5 bg-outline-variant"
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="w-full md:w-2/3">
                {project.architecture.diagram ? (
                  <MermaidBlock block={project.architecture.diagram} />
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setPreview({
                        src: project.architecture.image,
                        alt: project.architecture.alt,
                        caption: 'System architecture',
                      })
                    }
                    className="w-full overflow-hidden rounded border border-outline-variant bg-white"
                  >
                    <img
                      src={project.architecture.image}
                      alt={project.architecture.alt}
                      className="h-auto w-full object-contain"
                    />
                  </button>
                )}
              </div>
            </div>
          </Card>
        </Reveal>

        {/* One run, in order */}
        {project.sequence && (
          <Reveal className="md:col-span-12">
            <Card accent className="p-6 md:p-8">
              <CardTitle icon="workflow">
                {project.sequence.heading ?? 'Daily Run Sequence'}
              </CardTitle>
              <MermaidBlock block={project.sequence} />
            </Card>
          </Reveal>
        )}

        {/* Presented deck */}
        {project.deck && (
          <Reveal className="md:col-span-12">
            <Card accent className="p-6 md:p-8">
              <CardTitle icon="gallery">{project.deck.title}</CardTitle>
              <p className="mb-stack-lg max-w-3xl text-body-md text-on-surface-variant">
                {project.deck.body}
              </p>
              <SlideDeck deck={project.deck} onPreview={setPreview} />
            </Card>
          </Reveal>
        )}

        {/* Configuration walkthrough */}
        {project.guides && (
          <Reveal className="md:col-span-12">
            <Card accent className="p-6 md:p-8">
              <CardTitle icon="terminal">{project.guides.title}</CardTitle>
              <p className="mb-stack-lg max-w-3xl text-body-md text-on-surface-variant">
                {project.guides.body}
              </p>

              <ol className="flex flex-col gap-stack-lg">
                {project.guides.items.map((guide) => (
                  <li
                    key={guide.id}
                    className="rounded-lg border border-hairline bg-surface p-6 md:p-8"
                  >
                    <div className="mb-stack-md flex flex-wrap items-baseline gap-3">
                      <span className="font-display text-headline-md font-bold text-primary">
                        {guide.label}
                      </span>
                      <h3 className="text-headline-sm md:text-headline-md">{guide.title}</h3>
                    </div>

                    <p className="mb-stack-md max-w-3xl text-body-lg text-on-surface-variant">
                      {guide.objective}
                    </p>

                    {guide.topics && (
                      <div className="mb-stack-md flex flex-wrap gap-2">
                        {guide.topics.map((topic) => (
                          <Chip key={topic} variant="soft" className="rounded-sm">
                            {topic}
                          </Chip>
                        ))}
                      </div>
                    )}

                    {/* Numbered task list; the supporting visual sits beside it on wide screens. */}
                    <div className="flex flex-col gap-stack-lg lg:flex-row">
                      <ol className="flex-1 space-y-stack-md">
                        {guide.steps.map((step, i) => (
                          <li key={step.title} className="flex gap-4">
                            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-soft font-display text-caption font-bold text-primary">
                              {i + 1}
                            </span>
                            <div className="min-w-0">
                              <h4 className="text-label-md font-semibold tracking-[0.03em] text-on-surface">
                                {step.title}
                              </h4>
                              {step.path && (
                                <p className="mt-1 font-mono text-[12px] break-words text-secondary">
                                  {step.path}
                                </p>
                              )}
                              <p className="mt-2 text-body-md text-on-surface-variant">
                                {step.body}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>

                      {(guide.image || guide.diagram) && (
                        <div className="lg:w-[45%] lg:shrink-0">
                          {guide.diagram ? (
                            <MermaidBlock block={guide.diagram} />
                          ) : (
                            <figure>
                              <button
                                type="button"
                                onClick={() => setPreview(guide.image)}
                                className="group block w-full overflow-hidden rounded border border-outline-variant bg-white"
                              >
                                <img
                                  src={guide.image.src}
                                  alt={guide.image.alt}
                                  loading="lazy"
                                  className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                              </button>
                              {guide.image.caption && (
                                <figcaption className="mt-2 text-caption text-secondary">
                                  {guide.image.caption}
                                </figcaption>
                              )}
                            </figure>
                          )}
                        </div>
                      )}
                    </div>

                    {guide.cli && (
                      <div className="mt-stack-md overflow-hidden rounded border border-surface-variant">
                        <div className="flex items-center gap-2 border-b border-surface-variant bg-surface-high px-4 py-2">
                          <Icon name="terminal" className="size-4 text-secondary" />
                          <span className="text-label-md tracking-[0.05em] text-on-surface">
                            {guide.cli.title}
                          </span>
                        </div>
                        <pre className="overflow-x-auto bg-inverse-surface p-4 font-mono text-[13px] leading-relaxed text-inverse-on-surface">
                          <code>{guide.cli.lines.join('\n')}</code>
                        </pre>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </Card>
          </Reveal>
        )}

        {/* Technology stack */}
        {project.stack && (
          <Reveal className="md:col-span-12">
            <Card accent className="p-6 md:p-8">
              <CardTitle icon="terminal">{project.stack.title}</CardTitle>
              <p className="mb-stack-md max-w-3xl text-body-md text-on-surface-variant">
                {project.stack.body}
              </p>
              <div className="overflow-x-auto rounded border border-outline-variant md:overflow-visible">
                <table className="data-table">
                  <thead>
                    <tr>
                      {project.stack.columns.map((col) => (
                        <th key={col} scope="col">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.stack.rows.map((row) => (
                      <tr key={row.join("|")}>
                        {row.map((cell, c) => (
                          <td key={project.stack.columns[c]} data-label={project.stack.columns[c]}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Reveal>
        )}

        {/* Run output */}
        {project.artifacts && (
          <Reveal className="md:col-span-12">
            <Card accent className="p-6 md:p-8">
              <CardTitle icon="layers">{project.artifacts.title}</CardTitle>
              <p className="mb-stack-md max-w-3xl text-body-md text-on-surface-variant">
                {project.artifacts.body}
              </p>
              <ul className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
                {project.artifacts.items.map((item) => (
                  <li
                    key={item.name}
                    className="rounded border border-hairline bg-surface p-5 transition-colors duration-300 hover:border-primary"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Icon name={item.icon} className="size-4 shrink-0 text-primary" />
                      <code className="font-mono text-[13px] font-semibold text-on-surface">
                        {item.name}
                      </code>
                    </div>
                    <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        )}

        {/* Step-by-step process */}
        <Reveal className="md:col-span-12">
          <Card accent className="p-6 md:p-8">
            <CardTitle icon="workflow">Step-by-Step Process</CardTitle>
            <ol className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              {project.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded border border-hairline bg-surface p-6 transition-colors duration-300 hover:border-primary"
                >
                  <span className="mb-stack-sm flex size-10 items-center justify-center rounded-full bg-primary-soft font-display font-bold text-primary">
                    {i + 1}
                  </span>
                  <h3 className="mb-2 text-headline-sm">{step.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{step.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <Chip key={tag} variant="soft" className="rounded-sm">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </Reveal>
      </div>

      {/* Next project */}
      {projects.length > 1 && (
        <nav className="no-print mt-stack-lg border-t border-outline-variant pt-stack-md">
          <Link to={`/projects/${next.slug}`} className="group block">
            <p className="text-caption tracking-[0.08em] text-secondary uppercase">Next project</p>
            <p className="mt-1 flex items-center gap-2 text-headline-sm font-display font-semibold text-primary">
              {next.title}
              <Icon
                name="arrowRight"
                className="size-5 transition-transform group-hover:translate-x-1"
              />
            </p>
          </Link>
        </nav>
      )}

      <Lightbox image={preview} onClose={() => setPreview(null)} />
    </div>
  )
}
