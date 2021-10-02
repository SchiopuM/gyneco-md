import React from "react";
import EducatieSexuala from "../../Body/EducatieSexuala/EducatieSexuala";
import FeedBack from "../../Body/FeedBack/FeedBack";
import Inscriete from "../../Body/Inscriete/Inscriete";
import Pricing from "../../Body/Pricing/Pricing";
import WhyGyneco from "../../Body/WhyGyneco/WhyGyneco";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const Homepage = () => {
  return (
    <div>
      <Header />
      <EducatieSexuala />
      <WhyGyneco />
      <FeedBack />
      <Pricing />
      <Inscriete />
      <Footer />
    </div>
  );
};

export default Homepage;
