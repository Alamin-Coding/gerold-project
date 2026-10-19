import { useState } from "react";

import SectionHeading from "../Components/SectionHeading";

/* ---------- Logos ---------- */
import VirtuslabLogo from "../assets/achivement (1).png";
import SemiflatLogo from "../assets/achivement (2).png";
import AutentikaLogo from "../assets/achivement (3).png";

const FallbackLogo = ({ label }) => (
  <div className="flex h-full w-full items-center justify-center rounded bg-[#1a1b1a] text-[11px] font-semibold text-white">
    {label}
  </div>
);

/* ---------- Data ---------- */
const DESCRIPTION =
  "I'm winner of the world's most prestigious web designthat has more-or-less normal awards in the fields.";

const DATA = {
  Experiences: [
    {
      logo: VirtuslabLogo,
      title: "Senior Product Designer",
      company: "Virtuslab",
      period: "2022 - 2023",
      description: DESCRIPTION,
    },
    {
      logo: SemiflatLogo,
      title: "Senior Product Designer",
      company: "Semiflat Studio",
      period: "2020 - 2023",
      description: DESCRIPTION,
    },
    {
      logo: AutentikaLogo,
      title: "Senior User Interface Designer",
      company: "Autentika",
      period: "2018 - 2020",
      description: DESCRIPTION,
    },
  ],
  Education: [
    {
      logo: AutentikaLogo,
      title: "Master of Design",
      company: "Design University",
      period: "2016 - 2018",
      description: DESCRIPTION,
    },
    {
      logo: AutentikaLogo,
      title: "Bachelor of Fine Arts",
      company: "Art Institute",
      period: "2012 - 2016",
      description: DESCRIPTION,
    },
  ],
  Awards: [
    {
      logo: AutentikaLogo,
      title: "Site of the Day",
      company: "Awwwards",
      period: "2023",
      description: DESCRIPTION,
    },
    {
      logo: AutentikaLogo,
      title: "Best UI Design",
      company: "CSS Design Awards",
      period: "2021",
      description: DESCRIPTION,
    },
  ],
};


const TABS = Object.keys(DATA);
console.log(DATA["Experiences"])
console.log(TABS)

/* ---------- Icons ---------- */
const CalendarIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8b4dff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4.5" width="18" height="16.5" rx="3" />
    <path d="M8 2.5v4M16 2.5v4M3 10h18" />
    <path d="M9 15.5l2 2 4-4" />
  </svg>
);

/* ---------- Component ---------- */
export default function Section() {
  const [active, setActive] = useState("Experiences");

  return (
    <section className="min-h-screen w-full bg-[#140C1C] px-[295px] py-30 text-white">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <SectionHeading
          className={"max-w-[500px] max-auto"}
          heading={"MY Background and Achievements"}
          subHeading={"Behind the Pixels"}
        />

        {/* Tabs */}
        <div className="mt-[34px] inline-flex items-center gap-[10px] rounded-full border-2 border-[#8b4dff] bg-[#8b4dff] p-[2px]">
          {TABS.map((tab) => {
            // tab = ['Experiences', 'Education', 'Awards']
            const isActive = tab === active;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={`rounded-full px-[11px] py-[6px] text-[9px] font-semibold leading-none transition-colors ${
                  isActive
                    ? "bg-[#150f1e] text-white"
                    : "bg-transparent text-white"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Card */}
      <div className="mx-auto mt-[40px] max-w-[1290px] max-h-[717px] rounded-xl border border-[#2b2535] px-[62px] py-[62px]">
        {/* DATA["Experiences"] */}
        {DATA[active].map((item, i, arr) => (
          <div
            key={item.title + item.company}
            className={`flex items-start justify-between gap-6 pb-[26px] pt-[22px] first:pt-0 last:pb-0 ${
              i !== arr.length - 1 ? "border-b border-[#2b2535]" : ""
            }`}
          >
            <div className="flex items-start gap-[22px]">
              <div className="h-8 w-8 shrink-0 overflow-hidden rounded">
                <img src={item.logo} alt="image" />
              </div>
              <div>
                <h3 className="text-[12px] font-normal uppercase leading-4 text-white">
                  {item.title}
                </h3>
                <p className="mt-[9px] text-[8px] font-normal uppercase leading-[10px] text-white">
                  {item.company}
                </p>
                <p className="mt-[13px] max-w-[340px] text-[10px] leading-[14px] text-[#8c8896]">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-[6px] pt-[2px] text-[12px] leading-4 text-[#a9a5b3]">
              <CalendarIcon />
              <span>{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
