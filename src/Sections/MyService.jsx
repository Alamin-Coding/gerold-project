import SectionHeading from "../Components/SectionHeading";
import ServiceCard from "../Components/ServiceCard";
import icon1 from "../assets/service-icon (1).png";
import icon2 from "../assets/service-icon (2).png";
import icon3 from "../assets/service-icon (3).png";

const serviceData = [
  {
    id: 1,
    img: icon1,
    title: "Web Development",
    description:
      "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing to actionable insights.",
    listArray: ["UI/UX Design", "Research", "Mobile & Web App"],
  },

  {
    id: 2,
    img: icon2,
    title: "UI/UX Design",
    description:
      "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing to actionable insights.",
    listArray: ["UI/UX Design", "Research", "Mobile & Web App"],
  },

  {
    id: 3,
    img: icon3,
    title: "Content Writing",
    description:
      "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing to actionable insights.",
    listArray: ["UI/UX Design", "Research", "Mobile & Web App"],
  },
];
const MyService = () => {
  return (
    <section className="py-25 bg-[#140C1C]">
      <div className="container">
        <SectionHeading
          subHeading={"my services"}
          heading={"Here's how I can help!"}
          textCenter={true}
        />
        <div className="grid grid-cols-3 gap-7 pt-15 pb-7.5">
          {serviceData.map((item) => (
            //   <ServiceCard
            //     img={item.img}
            //     title={item.title}
            //     description={item.description}
            //     listArray={item.listArray}
            //   />

            <ServiceCard {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyService;
