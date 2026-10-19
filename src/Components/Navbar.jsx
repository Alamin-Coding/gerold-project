
import Container from "./Container";
import Logo from "../assets/LogoNav.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillDribbbleCircle } from "react-icons/ai";
import CommonBtn from "./CommonBtn";

const NavBar = () => {
	return (
		<>
			<nav className="bg-[#050709] text-white py-5">
				<Container className="w-[1800px]">
					<div className="flex justify-between items-center">
						<div>
							<img src={Logo} alt="" />
						</div>
						<ul className="flex gap-8.75">
							<li>Services</li>
							<li>Works</li>
							<li>Resume</li>
							<li>Skills</li>
							<li>Testimonials</li>
							<li>Contact</li>
						</ul>
						<div className="flex gap-6.25">
							<div className="flex items-center gap-2.5">
								<FaFacebook />
								<FaLinkedinIn />
								<FaGithub />
								<AiFillDribbbleCircle />
							</div>
							<div>
								<CommonBtn>Lets Talk</CommonBtn>
							</div>
						</div>
					</div>
				</Container>
			</nav>
		</>
	);
};

export default NavBar;
