import LogoLoop from "../Components/LogoLoop";

import brand_1 from "../assets/Brand-1.png";
import brand_2 from "../assets/Brand-2.png";
import brand_3 from "../assets/Brand-3.png";
import brand_4 from "../assets/Brand-4.png";
import brand_5 from "../assets/Brand-5.png";
import brand_6 from "../assets/Brand-6.png";
import brand_7 from "../assets/Brand-7.png";

const Brand_1 = () => {
  return <img src={brand_1} alt="brand logo" />;
};

const Brand_2 = () => {
  return <img src={brand_2} alt="brand logo" />;
};

const Brand_3 = () => {
  return <img src={brand_3} alt="brand logo" />;
};

const Brand_4 = () => {
  return <img src={brand_4} alt="brand logo" />;
};

const Brand_5 = () => {
  return <img src={brand_5} alt="brand logo" />;
};

const Brand_6 = () => {
  return <img src={brand_6} alt="brand logo" />;
};

const Brand_7 = () => {
  return <img src={brand_7} alt="brand logo" />;
};

const techLogos = [
  { node: <Brand_1 />, title: "Brand 1" },
  { node: <Brand_2 />, title: "Brand 2" },
  { node: <Brand_3 />, title: "Brand 3" },
  { node: <Brand_4 />, title: "Brand 4" },
  { node: <Brand_5 />, title: "Brand 5" },
  { node: <Brand_6 />, title: "Brand 6" },
  { node: <Brand_7 />, title: "Brand 7" },
  // { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  // {
  //   node: <SiTypescript />,
  //   title: "TypeScript",
  //   href: "https://www.typescriptlang.org",
  // },
  // {
  //   node: <SiTailwindcss />,
  //   title: "Tailwind CSS",
  //   href: "https://tailwindcss.com",
  // },
];

// Alternative with image sources
// const imageLogos = [
//   {
//     src: brand_1,
//     alt: "Company 1",
//     href: "https://company1.com",
//   },
//   {
//     src: brand_2,
//     alt: "Company 2",
//     href: "https://company2.com",
//   },
//   {
//     src: brand_3,
//     alt: "Company 3",
//     href: "https://company3.com",
//   },
// ];

function ImageLoop() {
  return (
    <div
      className="bg-[#140C1C]"
      style={{ height: "200px", position: "relative", overflow: "hidden" }}
    >
      {/* Basic horizontal loop */}
      <div className="pb-[60px]">
        <p className="uppercase text-base font-sora after_before font-semibold text-white"><span className="text-primary">100+</span> Trusted Clients Over the world</p>
      </div>
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#00000/60"
        ariaLabel="Technology partners"
      />

      {/* Vertical loop with deceleration on hover */}
      {/* <LogoLoop logos={techLogos} useCustomRender={false} /> */}
    </div>
  );
}

export default ImageLoop;
