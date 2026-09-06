import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { Card, Icon, PageHeader, StatusChip } from '../components/ui'
import { courses } from '../data/content'

export default function Courses() {
  return (
    <div className="container-page py-stack-lg">
      <PageHeader
        eyebrow="Learning"
        title="Courses"
        subtitle="Training completed during the internship, with the notes and lab work I produced along the way."
      />

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        {courses.map((course, i) => (
          <Reveal key={course.slug} delay={i * 70}>
            <Card className="group flex h-full flex-col p-8">
              <div className="mb-stack-sm flex flex-wrap items-center gap-3">
                <StatusChip status={course.status} />
                <span className="inline-flex items-center gap-1.5 text-caption text-secondary">
                  <Icon name="clock" className="size-4" />
                  {course.hours}
                </span>
                <span className="inline-flex items-center gap-1.5 text-caption text-secondary">
                  <Icon name="calendar" className="size-4" />
                  {course.date}
                </span>
              </div>

              <h2 className="text-headline-sm md:text-headline-md">
                <Link to={`/courses/${course.slug}`} className="hover:text-primary">
                  {course.title}
                </Link>
              </h2>

              <p className="mt-1 text-caption tracking-[0.06em] text-secondary uppercase">
                {course.provider}
              </p>

              <p className="mt-stack-sm text-body-md text-secondary">{course.summary}</p>

              <Link
                to={`/courses/${course.slug}`}
                className="mt-auto inline-flex items-center gap-1.5 pt-stack-md text-label-md tracking-[0.05em] text-primary"
              >
                Open documentation
                <Icon
                  name="arrowRight"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
