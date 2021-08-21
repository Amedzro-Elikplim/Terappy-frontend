import React from "react";
import Nav from "../../components/Therapist/Navbar/Nav";
import Welcome from "../../components/Therapist/Hero/Welcome";
import Services from "../../components/Therapist/Services/Services";
import Requirements from "../../components/Therapist/Requirement/Requirements";
import Steps from "../../components/Therapist/HowItWorks/Steps";
import "primeflex/primeflex.css";

function Therapist() {
  return (
    <div>
      <Nav />
      <Welcome />
      <Services />
      <Requirements />
      <Steps />
    </div>
  );
}

export default Therapist;
