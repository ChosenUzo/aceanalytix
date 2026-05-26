import Reveal from "@/components/motion/Reveal";
import { site, type TeamMember } from "@/lib/content";
import { cn } from "@/lib/utils";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9V9Z" />
    </svg>
  );
}

export default function TeamMemberRow({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const flip = index % 2 === 1; // alternate: even = image left, odd = image right
  const href = member.linkedin || site.social.linkedin;

  return (
    <Reveal direction={flip ? "left" : "right"}>
      <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Portrait card — taller than wide; LinkedIn reveals on hover */}
        <div className={cn(flip && "lg:order-last")}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="group relative mx-auto block aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-paper-2 shadow-card lg:mx-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {/* darken on hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* LinkedIn pill — slides up + fades in */}
            <span className="absolute bottom-5 left-5 inline-flex translate-y-3 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-md transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-brand">
                <LinkedInIcon size={16} />
              </span>
              Connect
            </span>
            {/* corner brand chip — fades in */}
            <span className="absolute right-5 top-5 grid h-10 w-10 -translate-y-2 place-items-center rounded-full bg-brand text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <LinkedInIcon size={17} />
            </span>
          </a>
        </div>

        {/* Bio */}
        <div className={cn(flip && "lg:order-first")}>
          <h2 className="display text-3xl text-text sm:text-[2.5rem]">{member.name}</h2>
          <p className="mt-2 text-lg font-medium text-brand">{member.role}</p>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            {member.bio}
          </p>

          {member.credentials.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {member.credentials.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-line bg-paper-2 px-3.5 py-1.5 text-sm font-medium text-text"
                >
                  {c}
                </li>
              ))}
            </ul>
          )}

          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            <LinkedInIcon size={15} />
            <span className="border-b border-transparent transition-colors group-hover:border-brand">
              Connect on LinkedIn
            </span>
          </a>
        </div>
      </article>
    </Reveal>
  );
}
