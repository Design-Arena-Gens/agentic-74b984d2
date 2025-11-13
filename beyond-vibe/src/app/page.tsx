import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Launch AI programs with confidence",
    description:
      "Cut through the hype with repeatable playbooks, capability matrices, and rollout plans that scale across engineering organizations.",
  },
  {
    title: "Build responsible guardrails",
    description:
      "Get practical checklists for policy, security, and compliance so AI-assisted code never compromises your delivery standards.",
  },
  {
    title: "Measure real impact fast",
    description:
      "Track developer velocity, quality, and sentiment with dashboards and experiments that link AI work to business outcomes.",
  },
];

const audience = [
  "Heads of Engineering and CTOs guiding AI roadmaps",
  "Product-minded engineering managers shaping delivery teams",
  "Founders spinning up high-leverage AI-enabled squads",
];

const tableOfContents = [
  {
    title: "Part I — Foundations",
    chapters: [
      "Why vibe coding fails in production",
      "AI capability mapping across the SDLC",
      "Principles for human-in-the-loop systems",
    ],
  },
  {
    title: "Part II — Execution",
    chapters: [
      "Designing safe, auditable workflows",
      "Embedding copilots in code review and QA",
      "Operational analytics for AI-assisted teams",
    ],
  },
  {
    title: "Part III — Leadership",
    chapters: [
      "Hiring for augmented development",
      "Governance frameworks and playbooks",
      "Scaling beyond the first success story",
    ],
  },
];

const testimonials = [
  {
    quote:
      "This is the first guide that shows leaders exactly how to introduce AI into their org without losing rigor.",
    name: "Priya Shah",
    role: "VP Engineering, Relay Systems",
  },
  {
    quote:
      "Beyond Vibe Coding helped us transform experimentation into measurable wins that our exec team understands.",
    name: "Miguel Ortega",
    role: "Director of Platform, Lattice Labs",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-neutral-800">
            Beyond Vibe Coding
          </span>
          <Link
            href="https://www.amazon.com/Beyond-Vibe-Coding-Leveraging-AI-Assisted/dp/B0F6S5425Y"
            target="_blank"
            className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[rgb(var(--accent))]"
          >
            Buy on Amazon
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 sm:py-24">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-600">
              AI-READY ENGINEERING
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              A clear operating manual for teams building software with AI.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-neutral-600">
              <em>Beyond Vibe Coding</em> by Jason Bloom is a pragmatic field
              guide for leaders who need to integrate AI-assisted development
              without losing quality, compliance, or trust. Ship faster, stay
              accountable, and turn AI from an experiment into a durable edge.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://www.amazon.com/Beyond-Vibe-Coding-Leveraging-AI-Assisted/dp/B0F6S5425Y"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--accent))] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[rgba(222,72,49,0.35)] transition hover:bg-[rgb(var(--accent-dark))]"
              >
                Get the book
              </Link>
              <Link
                href="#sample"
                className="inline-flex items-center justify-center rounded-full border border-neutral-800/10 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:border-neutral-800/40 hover:text-neutral-900"
              >
                Download sample chapter
              </Link>
            </div>
            <div className="flex items-center gap-10 text-sm text-neutral-500">
              <div>
                <p className="font-semibold text-neutral-800">
                  9 delivery frameworks
                </p>
                <p>Pair AI velocity with guardrails.</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-800">
                  30+ worksheets & canvases
                </p>
                <p>Ready to run with your teams.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,15,15,0.12)]"></div>
            <figure className="overflow-hidden rounded-[36px] border border-white/40">
              <Image
                src="/beyond-vibe-cover.jpg"
                alt="Beyond Vibe Coding book cover"
                width={700}
                height={1000}
                className="h-full w-full object-cover"
                priority
              />
            </figure>
            <div className="absolute -bottom-10 left-1/2 w-[clamp(220px,60%,340px)] -translate-x-1/2 rounded-3xl bg-white/90 px-6 py-4 shadow-xl shadow-black/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                inside the book
              </p>
              <p className="mt-2 text-sm font-medium text-neutral-700">
                Checklists, maturity models, and practical prompts you can put
                into your next sprint planning session.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-200/70 bg-white/80 p-8 shadow-[0_16px_36px_rgba(15,15,15,0.08)] backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-10 rounded-[40px] border border-neutral-200/60 bg-white/80 p-10 shadow-[0_24px_42px_rgba(15,15,15,0.06)] backdrop-blur lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              WHY IT MATTERS
            </p>
            <h2 className="text-3xl font-semibold text-neutral-900">
              AI alone doesn&apos;t ship software—teams with clarity do.
            </h2>
            <p className="text-base leading-relaxed text-neutral-600">
              Bloom dissects real-world AI transformations, surfacing the
              rituals and metrics that keep engineers focused on impact. Instead
              of hype, you&apos;ll get concrete facilitation guides, operating
              cadences, and sample documentation you can adapt immediately.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            <li className="rounded-3xl border border-neutral-200/60 bg-white/70 p-6">
              <p className="text-4xl font-semibold text-neutral-900">4x</p>
              <p className="mt-2 text-sm text-neutral-600">
                Faster onboarding for AI copilots when teams adopt the discovery
                workshop frameworks.
              </p>
            </li>
            <li className="rounded-3xl border border-neutral-200/60 bg-white/70 p-6">
              <p className="text-4xl font-semibold text-neutral-900">60%</p>
              <p className="mt-2 text-sm text-neutral-600">
                Reduction in rework after implementing the guardrail scorecards
                and prompt libraries.
              </p>
            </li>
            <li className="rounded-3xl border border-neutral-200/60 bg-white/70 p-6">
              <p className="text-4xl font-semibold text-neutral-900">3</p>
              <p className="mt-2 text-sm text-neutral-600">
                Sample OKR templates linking AI capability adoption to product
                delivery metrics.
              </p>
            </li>
            <li className="rounded-3xl border border-neutral-200/60 bg-white/70 p-6">
              <p className="text-4xl font-semibold text-neutral-900">18</p>
              <p className="mt-2 text-sm text-neutral-600">
                Facilitator scripts and prompts to accelerate cross-functional
                alignment in sprint ceremonies.
              </p>
            </li>
          </ul>
        </section>

        <section id="sample" className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-[36px] border border-neutral-200/70 bg-white/90 p-10 shadow-[0_22px_46px_rgba(0,0,0,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              WHO IT&apos;S FOR
            </p>
            <h2 className="mt-6 text-3xl font-semibold text-neutral-900">
              Crafted for leaders operating at the intersection of AI and
              software delivery.
            </h2>
            <ul className="mt-6 space-y-3 text-base text-neutral-600">
              {audience.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[rgb(var(--accent))]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="https://beyondvibecoding.com/sample.pdf"
              target="_blank"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--accent))] transition hover:text-[rgb(var(--accent-dark))]"
            >
              Read a preview (PDF)
              <span aria-hidden>↗</span>
            </Link>
          </div>

          <div className="space-y-6 rounded-[36px] border border-neutral-200/60 bg-white/80 p-10 shadow-[0_20px_40px_rgba(15,15,15,0.07)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              WHAT&apos;S INSIDE
            </p>
            <div className="space-y-7">
              {tableOfContents.map((section) => (
                <div key={section.title}>
                  <p className="text-sm font-semibold uppercase tracking-wide text-neutral-800">
                    {section.title}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                    {section.chapters.map((chapter) => (
                      <li key={chapter} className="flex gap-3">
                        <span aria-hidden className="text-neutral-400">
                          —
                        </span>
                        <span>{chapter}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-[40px] border border-neutral-200/60 bg-white/80 p-10 shadow-[0_24px_42px_rgba(15,15,15,0.06)] backdrop-blur lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              ABOUT THE AUTHOR
            </p>
            <h2 className="text-3xl font-semibold text-neutral-900">
              Jason Bloom has led AI-adjacent product engineering for teams at
              Atlassian, Stripe, and fast-scaling startups.
            </h2>
            <p className="text-base text-neutral-600">
              He distills a decade of delivery leadership into blueprints you
              can adapt immediately—covering governance councils, prompt
              pattern libraries, and the rituals that keep human judgment at the
              center of every release.
            </p>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 transition hover:text-neutral-900"
            >
              Follow Jason on LinkedIn
              <span aria-hidden>↗</span>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-neutral-200/60 bg-white/90 p-6 shadow-[0_16px_32px_rgba(15,15,15,0.08)]"
              >
                <p className="text-sm text-neutral-700">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-6 text-sm font-semibold text-neutral-900">
                  {testimonial.name}
                  <span className="block text-xs font-medium uppercase tracking-wide text-neutral-500">
                    {testimonial.role}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-[40px] border border-neutral-200/70 bg-gradient-to-br from-white via-white to-[rgba(222,72,49,0.1)] p-10 shadow-[0_24px_52px_rgba(15,15,15,0.12)]">
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-600">
                NEXT STEP
              </p>
              <h2 className="text-3xl font-semibold text-neutral-900">
                Equip your team with the operating system for AI-assisted
                delivery.
              </h2>
              <p className="text-base text-neutral-600">
                The book includes templates, facilitation guides, and workshop
                agendas ready for your next planning session, plus access to an
                exclusive resource hub with updated prompts and scorecards.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.amazon.com/Beyond-Vibe-Coding-Leveraging-AI-Assisted/dp/B0F6S5425Y"
                  target="_blank"
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Buy on Amazon
                </Link>
                <Link
                  href="mailto:hello@beyondvibecoding.com"
                  className="rounded-full border border-neutral-800/10 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:border-neutral-800/40 hover:text-neutral-900"
                >
                  Bulk orders & workshops
                </Link>
              </div>
            </div>
            <div className="rounded-[32px] bg-white/90 p-6 text-sm text-neutral-600 shadow-[0_20px_40px_rgba(15,15,15,0.08)]">
              <p className="font-semibold text-neutral-900">
                Resource hub access includes:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <span aria-hidden>▹</span>
                  Quarterly updates with new AI tooling scorecards.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden>▹</span>
                  Workshop slide decks and facilitation tips.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden>▹</span>
                  Community office hours with Jason Bloom.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Beyond Vibe Coding. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="mailto:hello@beyondvibecoding.com"
              className="transition hover:text-neutral-800"
            >
              Contact
            </Link>
            <Link
              href="https://www.amazon.com/Beyond-Vibe-Coding-Leveraging-AI-Assisted/dp/B0F6S5425Y"
              target="_blank"
              className="transition hover:text-neutral-800"
            >
              Amazon listing
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
