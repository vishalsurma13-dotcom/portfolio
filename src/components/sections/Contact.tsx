import CopyEmailButton from "@/components/CopyEmailButton";
import { contact, site, socials, ui } from "@/data/site";

export default function Contact() {
  const titleId = `${contact.id}-title`;
  return (
    <section id={contact.id} aria-labelledby={titleId} className="section">
      <div className="wrap">
        <p className="text-[16px] leading-[1.6] text-ink-3">{contact.label}</p>
        <h2
          id={titleId}
          className="mt-5 max-w-[16ch] font-serif text-[clamp(40px,7vw,88px)] leading-[1.3] text-ink"
        >
          {contact.title}
        </h2>

        <p className="mt-12">
          <span className="sr-only">{ui.emailLabel}: </span>
          <a
            href={`mailto:${site.email}`}
            className="font-serif text-[clamp(22px,3.6vw,38px)] leading-[1.5] break-all text-ink underline decoration-1 underline-offset-[10px] transition-colors hover:text-accent"
          >
            {site.email}
          </a>
        </p>

        <div className="mt-8">
          <CopyEmailButton email={site.email} />
        </div>

        <ul aria-label={ui.socialLabel} className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-7">
          {socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="nav-link text-[17px] leading-[1.7] text-ink-2 hover:text-ink"
              >
                {social.label} <span aria-hidden="true">↗</span>
                <span className="sr-only"> {ui.newTab}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
