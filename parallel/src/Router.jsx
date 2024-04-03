import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import App from "./App";
import MainPage from "./Components/MainPage";
import Solution from "./Components/Solution/Solution";
import Urban from "./Components/Solution/Urban";
import Rural from "./Components/Solution/Rural";
import Private from "./Components/Solution/Private";
import ProductTechnologies from "./Components/Product_Technologies/ProductTechnologies";
import Custermers from "./Components/Custumer/Custermers";
import Company from "./Components/Company/Company";
import WhoWeAre from "./Components/Company/WhoWeAre";
import News from "./Components/Company/News";
import Leadershipss from "./Components/Company/Leadershipss";
import CompanyAwards from "./Components/Company/CompanyAwards";
import Contact from "./Components/Company/Contact";
import Partners from "./Components/Company/Partners";
import Legal from "./Components/Company/Legal";
import CareerPage from "./Components/Career/CareerPage";
import Resourses from "./Components/Resourses/Resourses";
import WhitePaper from "./Components/Resourses/WhitePaper";
import SolutionOverviews from "./Components/Resourses/SolutionOverviews";
import Blogs from "./Components/Resourses/Blogs";
import CaseStudies from "./Components/Resourses/CaseStudies";
import Webinar from "./Components/Resourses/Webinar";
import OpenRan from "./Components/Resourses/OpenRan";
import ContactUSForm from "./Components/ContactUS/ContactUSForm";
import MissionVission from "./Components/NestedDropdown/MissionVission";
import PressRelease from "./Components/NestedDropdown/PressRelease";
import NewsCoverage from "./Components/NestedDropdown/NewsCoverage";
import Support from "./Components/NestedDropdown/Support";

const Router = () => {
  return (
    <Routes>
      {/* App  */}
      <Route path="/" element={<App />}>
        {/* Main page  */}
        <Route path="" element={<MainPage />} />

        {/* Solutions  */}
        <Route path="/solutions" element={<Outlet />}>
          <Route index element={<Solution />} />
          <Route path="urban" element={<Urban />} />
          <Route path="rural" element={<Rural />} />
          <Route path="privateLTE" element={<Private />} />
        </Route>

        {/* Product Techologies  */}
        <Route path="/product-techno" element={<ProductTechnologies />} />

        {/* Customers  */}
        <Route path="/customers" element={<Custermers />} />

        {/* company  */}
        <Route path="/company" element={<Outlet />}>
          <Route index element={<Company />} />
          <Route path="who-we-are" element={<Outlet />}>
            <Route index element={<WhoWeAre />} />
            <Route path="mission-vission" element={<MissionVission />} />
          </Route>

          <Route path="news" element={<Outlet />}>
            <Route index element={<News />} />
            <Route path="press-releases" element={<PressRelease />} />
            <Route path="news-coverage" element={<NewsCoverage />} />
          </Route>
          <Route path="leadership" element={<Leadershipss />} />
          <Route path="awards" element={<CompanyAwards />} />
          <Route path="contacts" element={<Outlet />}>
            <Route index element={<Contact />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="partners" element={<Partners />} />
          <Route path="legal" element={<Legal />} />
        </Route>

        {/* Carrers  */}
        <Route path="/careers" element={<CareerPage />} />

        {/* Resourses  */}
        <Route path="/resources" element={<Outlet />}>
          <Route index element={<Resourses />} />
          <Route path="white-paper" element={<WhitePaper />} />
          <Route path="solution-overviews" element={<SolutionOverviews />} />
          <Route path="videos" />
          <Route path="blogs" element={<Blogs />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="webinars" element={<Webinar />} />
          <Route path="openran-resources" element={<OpenRan />} />
        </Route>

        {/* Contact us  */}

        <Route path="/contact-us-form" element={<ContactUSForm />} />
      </Route>
    </Routes>
  );
};

export default Router;
