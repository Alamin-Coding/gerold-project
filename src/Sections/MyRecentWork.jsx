import PortfolioCard from "../Components/PortfolioCard";
import SectionHeading from "../Components/SectionHeading";
import image_1 from "../assets/Portfolio (1).png";
import image_2 from "../assets/Portfolio (2).png";
import image_3 from "../assets/Portfolio (3).png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const RecentData = [
	{
		id: 1,
		img: image_1,
		title: "Deloitte",
		description: "Project was about precision and information...",
	},

	{
		id: 2,
		img: image_2,
		title: "New Age",
		description: "Project was about precision and information...",
	},

	{
		id: 3,
		img: image_3,
		title: "Sebastian",
		description: "Project was about precision and information...",
	},
	{
		id: 1,
		img: image_1,
		title: "Deloitte",
		description: "Project was about precision and information...",
	},

	{
		id: 2,
		img: image_2,
		title: "New Age",
		description: "Project was about precision and information...",
	},

	{
		id: 3,
		img: image_3,
		title: "Sebastian",
		description: "Project was about precision and information...",
	},
];

const MyRecentWork = () => {
	return (
		<section className="py-30 bg-[#140C1C]">
			<div className="container ">
				<div className="flex justify-between items-end gap-10 pb-15">
					<SectionHeading
						className="max-w[440px]  bg-red-400 "
						subHeading={"My Recent Work"}
						heading={"Recent work for MY clients!"}
					/>

					<div className="flex items-center gap-4 justify-end">
						<button className="prevArrow cursor-pointer size-15 rounded-full items-center flex justify-center border border-white text-white">
							<CgChevronLeft />
						</button>
						<button className="nextArrow cursor-pointer size-15 rounded-full items-center flex justify-center border border-white text-white">
							<CgChevronRight />
						</button>
					</div>
				</div>
			</div>

			<div className="py-20 bg-white">
				<Swiper
					spaceBetween={30}
					slidesPerView={3}
					loop={true}
					navigation={{
						prevEl: ".prevArrow",
						nextEl: ".nextArrow",
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					modules={[Autoplay, Navigation]}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{/* <SwiperSlide>Slide 1</SwiperSlide> */}
					{RecentData.map((item) => (
						<SwiperSlide>
							<PortfolioCard {...item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default MyRecentWork;
