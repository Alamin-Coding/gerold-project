import Container from "./Container";
import CircularText from "../Components/CircularText";
import BannerImg from "../assets/Banner.png";
import ScrollToTop from "react-scroll-to-top";

const Banner = () => {
	return (
		<>
			<div className="bg-secondary text-white py-20">
				<Container className="w-[1880px]">
					<div>
						<h1 className="text-[180px] font-semibold flex items-center gap-14">
							Hello
							<CircularText
								text="REACT*BITS*COMPONENTS*"
								onHover="speedUp"
								spinDuration={20}
								className="custom-class"
							/>
							Motion
						</h1>
						<img src={BannerImg} alt="" />

						<div></div>
					</div>
				</Container>
			</div>

			<ScrollToTop
				smooth
				style={{ background: "transparent" }}
				component={<img src="scroll-to-up.png" alt="icon" />}
			/>
		</>
	);
};

export default Banner;
