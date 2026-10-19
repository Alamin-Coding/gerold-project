import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import ImageLoop from "../Components/LogoSlider";
import NavBar from "../Components/Navbar";
import Role from "../Components/Role";
import Achivement from "../Sections/Achivement";

import BehindThePixels from "../Sections/BehindThePixels";
import Blogs from "../Sections/Blogs";
import MyRecentWork from "../Sections/MyRecentWork";
import MyService from "../Sections/MyService";
import RecentWork from "../Sections/RecentWork";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <ImageLoop />

      <RecentWork />
      <BehindThePixels />
      <MyService />
      <MyRecentWork />
      <Role/>
      <Achivement/>
      <Blogs/>
      <Footer/>
    </div>
  );
};

export default Home;
