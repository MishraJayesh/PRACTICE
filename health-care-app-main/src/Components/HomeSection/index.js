import React from "react";

import Search from "../Elements/Search";
// import BloodTest from "./BloodTest";
import Discounts from "./Discounts";
import Services from "./Services";
import UpComingAppointments from "./UpComingAppointments";

const HomeSection = () => {
  return (
    <section className="home-section">
      {/* <BloodTest /> */}
      <Search />
      <Services />
      <UpComingAppointments />
      <Discounts />
    </section>
  );
};

export default HomeSection;
