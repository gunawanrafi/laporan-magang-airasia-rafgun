import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import {
  Button,
  Card,
  CardTitle,
  Chip,
  Icon,
  StatusChip,
} from "../components/ui";
import { courses, home, projects } from "../data/content";

export default function Home() {
  const { hero, stats, skills, documentationTeaser } = home;

  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* Hero                                                        */}
      {/* ---------------------------------------------------------- */}
      <section className="relative flex min-h-[440px] items-center justify-center overflow-hidden md:h-[500px]">
        <div className="absolute inset-0">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            className="size-full object-cover object-center"
          />
          {/* Darkened so white type clears AA contrast over any crop. */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/75" />
        </div>

        <div className="container-page relative z-10 flex flex-col items-center gap-stack-md py-stack-lg text-center">
          <h1 className="text-display-sm text-white drop-shadow-md md:text-display-lg">
            {hero.title}
          </h1>
          <p className="max-w-3xl text-body-lg text-white/90 drop-shadow-lg">
            {hero.subtitle}
          </p>
          <div className="no-print mt-2 flex flex-wrap justify-center gap-4">
            <Button onClick={() => window.print()}>
              <Icon name="download" className="size-4" />
              {hero.primaryCta.label}
            </Button>
            <Button variant="onDark" to={hero.secondaryCta.to}>
              {hero.secondaryCta.label}
              <Icon name="arrowRight" className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Stats strip                                                 */}
      {/* ---------------------------------------------------------- */}
      <section className="border-b border-outline-variant bg-surface-lowest">
        <div
          className={`container-page grid grid-cols-2 gap-px py-stack-md ${
            stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"
          }`}
        >
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 70}
              className="flex flex-col items-center gap-1 px-2 py-4 text-center md:border-r md:border-surface-variant md:last:border-r-0"
            >
              <Icon name={stat.icon} className="size-5 text-primary" />
              <p className="font-display text-display-sm text-on-surface">
                {stat.value}
              </p>
              <p className="text-caption tracking-[0.06em] text-secondary uppercase">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Bento grid                                                  */}
      {/* ---------------------------------------------------------- */}
      <div className="container-page py-stack-lg">
        <section className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {/* Key projects — spans two columns */}
          <Reveal className="md:col-span-2">
            <Card accent className="h-full p-8">
              <CardTitle icon="briefcase">Key Projects</CardTitle>
              <div className="divide-y divide-surface-variant">
                {projects.map((project) => (
                  <article
                    key={project.slug}
                    className="py-5 first:pt-0 last:pb-0"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="text-headline-sm font-display font-semibold text-primary link-underline"
                      >
                        {project.title}
                      </Link>
                      <StatusChip status={project.status} />
                    </div>
                    <p className="mt-2 text-body-md text-secondary">
                      {project.summary}
                    </p>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="group mt-3 inline-flex items-center gap-1.5 text-label-md tracking-[0.05em] text-primary"
                    >
                      Read case study
                      <Icon
                        name="arrowRight"
                        className="size-4 transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </article>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Skills */}
          <Reveal delay={80}>
            <Card className="h-full bg-surface-low p-8">
              <CardTitle icon="sparkles">Skills</CardTitle>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Completed courses */}
          <Reveal>
            <Card className="h-full p-8">
              <CardTitle icon="school">Courses</CardTitle>
              <ul className="space-y-4">
                {courses.map((course) => (
                  <li key={course.slug}>
                    <Link
                      to={`/courses/${course.slug}`}
                      className="group flex items-start gap-3 text-body-md text-secondary transition-colors hover:text-primary"
                    >
                      <Icon
                        name={course.status === "Completed" ? "check" : "clock"}
                        className={`mt-0.5 size-5 shrink-0 ${
                          course.status === "Completed"
                            ? "text-success"
                            : "text-warning"
                        }`}
                      />
                      <span className="link-underline decoration-transparent group-hover:decoration-current">
                        {course.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Daily documentation teaser — spans two columns */}
          <Reveal delay={80} className="md:col-span-2">
            <Card className="flex h-full flex-col overflow-hidden md:flex-row">
              <div className="relative h-56 w-full shrink-0 md:h-auto md:w-1/2">
                <img
                  src={documentationTeaser.image}
                  alt={documentationTeaser.imageAlt}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:w-1/2">
                <CardTitle icon="gallery">
                  {documentationTeaser.title}
                </CardTitle>
                <p className="text-body-md text-secondary">
                  {documentationTeaser.body}
                </p>
                <Link
                  to={documentationTeaser.cta.to}
                  className="group mt-stack-md inline-flex items-center gap-1.5 text-label-md tracking-[0.05em] text-primary"
                >
                  {documentationTeaser.cta.label}
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Card>
          </Reveal>
        </section>
      </div>
    </>
  );
}
