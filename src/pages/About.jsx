import Reveal from "../components/Reveal";
import { Button, Card, Chip, Icon } from "../components/ui";
import { about, owner, site } from "../data/content";

function Initials({ name }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-caption font-semibold text-white">
      {initials}
    </span>
  );
}

export default function About() {
  return (
    <div className="container-page py-stack-lg">
      {/* Intro */}
      <section className="grid grid-cols-1 items-center gap-stack-lg md:grid-cols-2">
        <Reveal>
          <p className="mb-stack-md text-label-md tracking-[0.12em] text-primary uppercase">
            {about.eyebrow}
          </p>
          <h1 className="text-display-sm md:text-display-lg">
            {about.greeting} <span className="text-primary">{owner.name}</span>.
            <br />
            <span className="text-secondary">{owner.role}.</span>
          </h1>
          <p className="mt-stack-md max-w-xl text-body-lg text-on-surface-variant">
            {about.intro}
          </p>

          <div className="no-print mt-stack-md flex flex-wrap gap-4">
            {owner.resumeUrl ? (
              <Button href={owner.resumeUrl} download>
                <Icon name="download" className="size-4" />
                Download Resume
              </Button>
            ) : (
              <Button onClick={() => window.print()}>
                <Icon name="download" className="size-4" />
                Download Resume
              </Button>
            )}
            <Button
              variant="secondary"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" className="size-4" />
              Connect on LinkedIn
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100} className="relative">
          {/* Offset outline echoes the design's layered frame. */}
          <span
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg border border-outline-variant"
            aria-hidden="true"
          />
          <img
            src={owner.photo}
            alt={`Portrait of ${owner.fullName}`}
            className="relative w-full rounded-lg object-cover shadow-card"
          />
        </Reveal>
      </section>

      {/* Three-up — all three cards stay scoped to the placement itself. */}
      <section className="mt-stack-lg grid grid-cols-1 gap-gutter md:grid-cols-3">
        <Reveal>
          <Card className="h-full p-8">
            <span className="mb-stack-md flex size-11 items-center justify-center rounded-full bg-primary text-white">
              <Icon name={about.placement.icon} className="size-5" />
            </span>
            <h2 className="mb-stack-sm text-headline-md">{about.placement.title}</h2>
            <dl className="space-y-stack-sm">
              {about.placement.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-caption tracking-[0.08em] text-secondary uppercase">
                    {fact.label}
                  </dt>
                  <dd className="font-semibold text-on-surface">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </Reveal>

        <Reveal delay={80}>
          <Card accent className="h-full p-8">
            <span className="mb-stack-md flex size-11 items-center justify-center rounded-full bg-primary text-white">
              <Icon name={about.focus.icon} className="size-5" />
            </span>
            <h2 className="mb-stack-sm text-headline-md">{about.focus.title}</h2>
            <p className="text-body-md text-on-surface-variant">{about.focus.body}</p>
          </Card>
        </Reveal>

        <Reveal delay={160}>
          <Card className="h-full p-8">
            <span className="mb-stack-md flex size-11 items-center justify-center rounded-full bg-primary text-white">
              <Icon name={about.toolkit.icon} className="size-5" />
            </span>
            <h2 className="mb-stack-sm text-headline-md">{about.toolkit.title}</h2>
            <div className="flex flex-wrap gap-2">
              {about.toolkit.items.map((tool) => (
                <Chip key={tool} variant="soft">
                  {tool}
                </Chip>
              ))}
            </div>
          </Card>
        </Reveal>
      </section>

      {/* Experience */}
      {about.experience?.length > 0 && (
        <Reveal className="mt-stack-lg">
          <Card hover={false} className="p-8">
            <div className="mb-stack-md flex items-center gap-3 border-b border-surface-variant pb-stack-md">
              <Icon name="briefcase" className="size-6 text-primary" />
              <h2 className="text-headline-md">What I Worked On at AirAsia</h2>
            </div>

            <ol className="relative space-y-stack-md border-l border-outline-variant pl-6">
              {about.experience.map((entry) => (
                <li key={entry.role} className="relative">
                  <span
                    className="absolute top-2 -left-[27px] size-2.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <p className="font-semibold text-on-surface">{entry.role}</p>
                  <p className="text-caption text-secondary">
                    {entry.org
                      ? `${entry.org} • ${entry.period}`
                      : entry.period}
                  </p>
                  <p className="mt-2 text-body-md text-on-surface-variant">
                    {entry.body}
                  </p>
                </li>
              ))}
            </ol>
          </Card>
        </Reveal>
      )}

      {/* Feedback */}
      {about.feedback.length > 0 && (
        <Reveal className="mt-stack-lg">
          <Card hover={false} className="p-8">
            <div className="mb-stack-md flex items-center gap-3 border-b border-surface-variant pb-stack-md">
              <Icon name="quote" className="size-6 text-primary" />
              <h2 className="text-headline-md">Internship Feedback</h2>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              {about.feedback.map((entry) => (
                <figure
                  key={entry.name}
                  className="rounded-lg border border-hairline bg-surface p-6"
                >
                  <blockquote className="text-body-md text-on-surface-variant italic">
                    “{entry.quote}”
                  </blockquote>
                  <figcaption className="mt-stack-md flex items-center gap-3">
                    <Initials name={entry.name} />
                    <span>
                      <span className="block font-semibold text-on-surface">
                        {entry.name}
                      </span>
                      <span className="block text-caption text-secondary">
                        {entry.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Card>
        </Reveal>
      )}

      {/* Contact */}
      <Reveal className="mt-stack-lg">
        <div className="flex flex-col items-center gap-stack-md rounded-lg bg-primary px-6 py-stack-lg text-center text-white">
          <h2 className="text-headline-md text-white">Let’s talk</h2>
          <p className="max-w-lg text-body-md text-white/85">
            Questions about this report, or about working together? The fastest
            way to reach me is email.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="no-print inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-label-md font-semibold tracking-[0.05em] text-primary transition-transform hover:-translate-y-0.5"
          >
            <Icon name="mail" className="size-4" />
            {site.email}
          </a>
        </div>
      </Reveal>
    </div>
  );
}
