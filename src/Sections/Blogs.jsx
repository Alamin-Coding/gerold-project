import BlogCard from "../Components/BlogCard"
import SectionHeading from "../Components/SectionHeading"
import blog_1 from "../assets/Blog (1).png"
import blog_2 from "../assets/Blog2.png"
import blog_3 from "../assets/Blog (3).png"


const Blogs = () => {
  return (
    <section className="bg-[#140C1C]">
        <div className="container">
            <div className="text-center pb-[60px]">
                <SectionHeading heading={"Behind the Pixels"} subHeading={"Read My Recent Blog"}/>
            </div>
            <div className="grid grid-cols-3 gap-6 pb-30">
                <BlogCard title={"The Role of Technology in Modern Log"} image={blog_1} date={"Nov 01, 2025"} href={""} imageAlt="image" category={"business"} badge={"Video"}/>
                <BlogCard title={"The Role of Technology in Modern Log"} image={blog_2} date={"Aug 01, 2025"} href={""} imageAlt="image" category={"Portfolio"} badge={"Editing"}/>
                <BlogCard title={"Digital Marketo to Their New Office."} image={blog_3} date={"Nov 01, 2025"} href={""} imageAlt="image" category={"Development"} badge={"Video"}/>
            </div>
        </div>
    </section>
  )
}

export default Blogs