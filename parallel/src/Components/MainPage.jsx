import React from "react";
import Banner from "./Banner";
import ImgCards from "./ImgCards";
import AnimatedBrands from "./AnimatedBrands";
import Leadership from "./Leadership";
import Career from "./Career";
import ParaImage1 from "./ParaImage1";
import ParaImage2 from "./ParaImage2";
import ParaImage3 from "./ParaImage3";
import EventAward from "./EventAward";
import Product from "./Product";
import Footer from "./Footer";

const qualities = [
  {
    image:
      "https://www.parallelwireless.com/wp-content/uploads/20211001-REIMAGINE-COVERAGE-opt-350x295.jpg",
    heading: "Reimagine Coverage",
    description:
      "Parallel Wireless OpenRAN supports indoor or outdoor deployment scenarios at the lowest TCO and can be deployed on an accelerated timeline to help mobile operators deliver coverage everywhere from rural to suburban to most dense urban.",
    btn: "Learn More ",
  },
  {
    image:
      "https://www.parallelwireless.com/wp-content/uploads/20211102_REIMAGINE-CAPACITY-Home-page-350x295px-opt-350x295.jpg",
    heading: "Reimagine Capacity",
    description:
      "Easy to install, low-cost and high-performing cloud-native Parallel Wireless Open RAN supports macro, Massive MIMO or small cell deployments for densification and delivers superior end user QoS for consumers and industries in urban scenarios.",
    btn: "Learn More ",
  },
  {
    image:
      "https://www.parallelwireless.com/wp-content/uploads/20211001-REIMAGINE-5G-AND-BEYOND-01-2-opt-350x295.jpg",
    heading: "Reimagine 5G and Beyond",
    description:
      "Parallel Wireless cloud-native ORAN approach enables any 5G migration option and is software upgradable to any future 3GPP releases delivering the most cost-effective, easy to deploy, and advanced 5G capabilities for all 5G use cases.",
    btn: "Learn More ",
  },
];

// Leadership / culture

const leadership = [
  {
    image:
      "https://www.parallelwireless.com/wp-content/uploads/icon-leadership-2.png",
    heading: "Our Leadership",
    description:
      "The Parallel Wireless leadership team has experience building many startup companies into leading industry players.",
    btn: "Our Leaders ",
  },
  {
    image:
      "https://www.parallelwireless.com/wp-content/uploads/icon-people.png",
    heading: "Our People",
    description:
      "Reimaginers wanted. We have positions open across the globe. Join us.",
    btn: "Become a Reimaginer ",
  },
  {
    image:
      "https://www.parallelwireless.com/wp-content/uploads/icon-culture.png",
    heading: "Our Culture",
    description:
      "We are a fast-moving technology company that is ambitious about innovation and collaboration, and focused on our customers’ success.",
    btn: "Our Culture ",
  },
];

// Event & Awards Section

const awards = [
  {
    image:
      "https://www.parallelwireless.com/wp-content/uploads/icon-events.png",
    heading: "Upcoming Events",
    description:
      "Visit with us at upcoming tradeshows, conferences or attend our webinars to learn how we can help you reimagine your networks.",
    btn: "Connect with us at events ",
  },
  {
    image:
      "https://www.parallelwireless.com/wp-content/uploads/icon-awards.png",
    heading: "Awards",
    description:
      "We are honored and humbled to be recognized by the industry with awards for our innovation, technology vision and deployments.",
    btn: "Learn More ",
  },
];

// Product section

const product = [
  {
    image: "https://www.parallelwireless.com/wp-content/uploads/product-1.png",
    heading: "Access: OpenRAN",
    description:
      "Our OpenRAN hardware ecosystem consists of macros, outdoor and indoor small cells, and Massive MIMOs that are all Software Defined Radios (SDRs) and can be software upgraded to 5G for ease of deployment and much lower cost.",
    btn: "Learn More",
  },
  {
    image:
      "https://www.parallelwireless.com/wp-content/uploads/20211001-NETWORK-SOFTWARE-350x225.jpg",
    heading: "Network Software",
    description:
      "Our software platforms provide RAN and core services, orchestration, programmability, and service assurance including analytics and monitoring to deliver business agility, TCO reduction and to enable new revenue opportunities.",
    btn: "Learn More",
  },
  {
    image:
      "https://www.parallelwireless.com/wp-content/uploads/20211102_Intelligence-and-Automation-section-1-Home-page-350x225px-350x225.jpg",
    heading: "Intelligence and  Automation",
    description:
      "Network automation and intelligence software across ALL Gs for outdoor and indoor delivers TCO savings with self-configuration and self-optimization to enable optimal subscriber experience.",
    btn: "Learn More",
  },
];

const MainPage = () => {
  return (
    <div>
      <Banner />
      <ImgCards qualities={qualities} />
      <AnimatedBrands />
      <Leadership leadership={leadership} />
      <Career />
      <ParaImage1 />
      <ParaImage2 />
      <ParaImage3 />
      <EventAward awards={awards} />
      <Product product={product} />
      <Footer />
    </div>
  );
};

export default MainPage;
