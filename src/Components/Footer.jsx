
/**
 * Footer.jsx
 * Requires Tailwind CSS and the "Plus Jakarta Sans" font.
 * Add this once in your index.html <head> (or import it in your global CSS):
 *
 * <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
 */

const legalLinks = [
  { label: "Policy Privacy", href: "#" },
  { label: "Term & Conditions", href: "#" },
  { label: "Refund And Cancellation", href: "#" },
  { label: "Disclaimer", href: "#" },
];

const contactItems = [
  { label: "Hello-Designer@Gerold.Com", href: "mailto:Hello-Designer@Gerold.Com" },
  { label: "+01 123 654 8096", href: "tel:+011236548096" },
  { label: "+01 123 654 8096", href: "tel:+011236548096" },
];

const bottomNav = [
  { label: "WORK.", href: "#" },
  { label: "SERVICES.", href: "#" },
  { label: "ABOUT.", href: "#" },
  { label: "CONTACT.", href: "#" },
];


const FacebookIcon = () => (
  <svg width="9" height="14" viewBox="0 0 9 16" fill="#fff">
    <path d="M5.8 16V8.7h2.4l.4-2.9H5.8V4c0-.8.2-1.4 1.4-1.4h1.5V.1C8.4.1 7.5 0 6.5 0 4.3 0 2.9 1.3 2.9 3.7v2.1H.4v2.9h2.5V16h2.9Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="0.9" fill="#fff" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.78 2.66 4.78 6.12V21h-4v-4.8c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.85 1.25-1.85 2.54V21h-4V9.75Z" />
  </svg>
);

// The third circle in the design is intentionally empty (no icon), same as the reference.
const socials = [
  { name: "Facebook", icon: <FacebookIcon />, href: "#" },
  { name: "Instagram", icon: <InstagramIcon />, href: "#" },
  { name: "", icon: null, href: "#" },
  { name: "LinkedIn", icon: <LinkedinIcon />, href: "#" },
];
import bgImage from "../assets/Footer-bg.png"
const gradientBg ={
    background:`url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
}

const Footer = () => {
  return (
    <div className="w-full bg-[#0d0813] font-['Plus_Jakarta_Sans',sans-serif]">
      <footer className="relative isolate overflow-hidden rounded-t-[60px] bg-[#3d0f6e] text-white md:rounded-t-[100px] lg:min-h-[510px]" style={gradientBg}>
        

        {/* ---------- Content ---------- */}
        <div className="mx-auto flex min-h-[510px] w-full max-w-[1290px] flex-col justify-between px-6 pb-[30px] pt-[10px] lg:px-0 lg:pt-[120px]">
          {/* Top columns */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[430px_260px_295px_1fr] lg:gap-0">
            {/* Brand */}
            <div>
              <a href="#" className="flex items-center gap-[7px]">
               <img src="footerlogo.png" alt="Logo" /> 
              </a>

              <p className="mt-[32px] max-w-[350px] text-[16px] font-sora leading-[24px] text-white/90">
                I break down complex user the experience problems the create integrity focused to
                solutions that&rsquo;s connect.
              </p>

              <div className="mt-[18px] flex items-center gap-[8px]">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.name || "Social link"}
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white/25"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal details */}
            <div>
              <h4 className="text-[20px] font-sora font-semibold uppercase leading-[24px]">Legal Details</h4>
              <ul className="mt-[34px] flex flex-col gap-[12px]">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[15px] leading-[22.5px] text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[20px] font-sora font-semibold uppercase leading-[24px]">Contact</h4>
              <ul className="mt-[34px] flex flex-col gap-[12px]">
                {contactItems.map((c, i) => (
                  <li key={i}>
                    <a href={c.href} className="text-[15px] leading-[22.5px] text-white">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="max-w-[300px] text-[20px] font-sora font-semibold uppercase leading-[24px]">
                Subscribe to my newsletter!
              </h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-[20px] flex items-center gap-[8px]"
              >
                <input
                  type="email"
                  aria-label="Email address"
                  className="h-[56px] w-[237px] rounded-full border-2 border-[#0b0712] bg-white px-6 text-[15px] text-[#0b0712] outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="-mt-[4px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#0b0712]"
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12 12 2M4.5 2H12v7.5" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 border-t border-white/10 pt-[32px] lg:mt-0">
            <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[399px_auto_1fr]">
              <div className="flex items-center gap-[10px]">
                <span className="h-[8px] w-[8px] rounded-full bg-[#22ff3c]" />
                <span className="text-[12px] font-sora font-semibold uppercase leading-[24px] tracking-[0.01em]">
                  Available for freelance
                </span>
              </div>

              <nav className="flex flex-wrap items-center gap-x-[35px] gap-y-2">
                {bottomNav.map((n) => (
                  <a key={n.label} href={n.href} className="text-[15px] leading-[20px] text-white">
                    {n.label}
                  </a>
                ))}
              </nav>

              <p className="text-[15px] uppercase leading-[20px] lg:text-right">
                ©All Rights Reserved ByThemejunction
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;