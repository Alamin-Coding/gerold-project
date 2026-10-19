import React from "react";
import "../Styles/LogoLoop.css";

const PRIMARY = [
	"Graphic",
	"Design",
	"Motion",
	"Development",
	"Design",
	"Development",
	"Webflow",
];
const SECONDARY = [
	"Graphic",
	"Webflow",
	"Development",
	"Design",
	"Development",
	"Motion",
	"Webflow",
];

const Asterisk = () => (
	<svg
		aria-hidden="true"
		viewBox="0 0 24 24"
		className="h-6 w-6 shrink-0 text-white"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.2"
		strokeLinecap="round"
	>
		<path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7" />
	</svg>
);

const Track = ({ items, reverse = false }) => {
	// Content is rendered twice so the -50% translate loops seamlessly
	const loop = [...items, ...items];
	return (
		<div
			className={`flex w-max items-center gap-16 whitespace-nowrap pr-16 ${
				reverse ? "role-marquee-reverse" : "role-marquee"
			}`}
		>
			{loop.map((label, i) => (
				<React.Fragment key={`${label}-${i}`}>
					<span className="text-lg font-bold uppercase tracking-wide text-white">
						{label}
					</span>
					<Asterisk />
				</React.Fragment>
			))}
		</div>
	);
};

const Role = () => {
	return (
		<section
			aria-label="Roles"
			className="relative h-[296px] w-full overflow-hidden bg-[#140C1C] sm:h-[300px] md:h-[330px]"
		>
			{/* Marquee keyframes (kept local so no tailwind.config change is needed) */}
			<style>{`
        @keyframes role-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes role-scroll-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .role-marquee { animation: role-scroll 40s linear infinite; }
        .role-marquee-reverse { animation: role-scroll-rev 45s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .role-marquee, .role-marquee-reverse { animation: none; }
        }
      `}</style>

			{/* Back band: dark violet, tilted upward to the right */}
			<div className="absolute -left-10 -right-10 top-[48%] flex max-h-27 rotate-[-3.2deg] items-center overflow-hidden bg-[#1D1129] sm:top-[52%]  h-18 sm:h-27">
				<Track items={SECONDARY} reverse />
			</div>

			{/* Front band: bright purple, tilted downward to the right */}
			<div className="absolute -left-10 -right-10 top-[20%] z-10 flex h-18 sm:h-27 rotate-[1.8deg] items-center overflow-hidden bg-primary">
				<Track items={PRIMARY} />
			</div>
			<div className="role_shadow"></div>
		</section>
	);
};

export default Role;
