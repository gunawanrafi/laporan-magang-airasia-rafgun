import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { Card, Chip, Icon, PageHeader, StatusChip } from '../components/ui'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <div className="container-page py-stack-lg">
      <PageHeader
        eyebrow="Portfolio"
        title="Projects"
        subtitle="The work I owned during the internship — what the problem was, how it was built, and what changed as a result."
      />

      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <Card accent className="group flex h-full flex-col">
              <Link to={`/projects/${project.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden bg-surface-variant">
                  <img
                    src={project.gallery.image}
                    alt={project.gallery.alt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-stack-sm flex flex-wrap items-center gap-3 text-caption text-secondary">
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="calendar" className="size-4" />
                    {project.period}
                  </span>
                  <StatusChip status={project.status} />
                </div>

                <h2 className="text-headline-sm md:text-headline-md">
                  <Link to={`/projects/${project.slug}`} className="hover:text-primary">
                    {project.title}
                  </Link>
                </h2>

                <p className="mt-stack-sm text-body-md text-secondary">{project.summary}</p>

                <div className="mt-stack-md flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Chip key={tag} variant="soft">
                      {tag}
                    </Chip>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-stack-md text-label-md tracking-[0.05em] text-primary"
                >
                  View case study
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
