import Header from './Header';
import Slider from './slider';
import Section from './section';
import SimpleSlider from './swiper';
import Section1 from './section1';
import SimpleSlider1 from './swiper2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Scroller from './scroller';
import Footer from './footer';

import Navbar1 from './navbar';
// import Kurti from './kurti/kurti';

function Home(){
    return (
        <>
        <Navbar1/>
        <Header />
      <Slider />
      <Section />
      <SimpleSlider />
      <Section1 />
      <SimpleSlider1 />
      <Section3 />
      <Section4 />
      <Scroller />
      <Section5 />
      <Footer />
      {/* <Navbar1 />
      <Kurti/> */}


        </>
    )
}

export default Home;


