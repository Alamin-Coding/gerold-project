import Image from "../assets/Behindimg.png";
import Button from "../Components/Button";
import Count from "../Components/Count";
import SectionHeading from "../Components/SectionHeading";

const BehindThePixels = () => {
  return (
    <section className="bg-[#050709] py-30 text-white">
      <div className="container">
        <div className="flex gap-[145px] justify-between">
          <div className="overflow-hidden rounded-2xl">
            <img src={Image} alt="image" />
          </div>
          <div className="max-w-157.5">
            <SectionHeading
              className={""}
              subHeading="Behind the Pixels"
              heading="Passionate On Digital Marketer Focused on Driving Results."
            />
            <p className="py-8 text-white/60 text-[16px]">
              This encompasses a variety of strategies, including search engine
              optimization (SEO), content marketing, social media marketing,
              email marketing,.
            </p>

            <div className="flex mb-[34px]">
              <Count countNumber={"40+"} text={"Years of Experience"} />
              <Count countNumber={"40+"} text={"Years of Experience"} />
              <Count countNumber={"40+"} text={"Years of Experience"} />
            </div>
            <Button text={"Learn More"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindThePixels;
