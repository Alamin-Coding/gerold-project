import Button from "../Components/Button";
import SectionHeading from "../Components/SectionHeading";
import SoftwareCard from "../Components/SoftwareCard";
import Icon1 from "../assets/carditem1.png";
import Icon2 from "../assets/carditem2.png";
import Icon3 from "../assets/carditem3.png";
import Icon4 from "../assets/carditem4.png";

const RecentWork = () => {
  return (
    <section className="bg-secondary py-30 text-white">
      <div className="container">
        <div className="flex justify-between items-end">
          <SectionHeading
            className={"max-w-[508px]"}
            subHeading={"My Recent Work"}
            heading={"MY Mastering Video Editing Skills"}
          />
          <Button text={"Learn More"} />
        </div>

        <div className=" grid grid-cols-4 gap-6 pt-15">
          <SoftwareCard
            icon={Icon1}
            title="Adobe After Effect"
            description="Adobe After Effects is a powerful software application used motion graphics."
            progress={92}
          />
          <SoftwareCard
            icon={Icon2}
            title="Final Cut Pro"
            description="Professional video editing software developed by Apple Inc., designed."
            progress={80}
          />
          <SoftwareCard
            icon={Icon3}
            title="iMovie Film"
            description="Professional video editing software developed by Apple Inc., designed."
            progress={85}
          />
          <SoftwareCard
            icon={Icon4}
            title="Final Cut Pro"
            description="Professional video editing software developed by Apple Inc., designed."
            progress={99}
          />
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
