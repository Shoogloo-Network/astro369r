"use client";
import React, { useEffect, useState } from "react";
import Banner from "./_components/homec/Banner";
import ConsultationSection from "./_components/homec/ConsultationSection";
import AppointmentSection from "./_components/homec/AppointmentSection";
import TopAstrologers from "./_components/homec/TopAstrologers";
import ReadyToStart from "./_components/homec/ReadyToStart";
import Articles from "./_components/homec/Articles";
import Testimonials from "./_components/homec/Testimonials";
import DownloadApp from "./_components/homec/DownloadApp";
// import Header from "../_components/Header";
// import Footer from "../_components/Footer";
import "./globals.css";
import "./styles.css";
import HomeShimmer from "./_components/homec/HomeShimmer";

const Home = () => {
  const [cardDataBanner, setCardDataBanner] = useState(null);
  const [cardDataConsultHome, setCardDataConsultHome] = useState(null);
  
  useEffect(() => {
    // Fetch banner data
    fetch("/api/iconCardDataBanner")
      .then((response) => response.json())
      .then((data) => {
        console.log("Banner data:", data);
        setCardDataBanner(data);
      })
      .catch((error) => console.error("Error fetching banner data:", error));

    // Fetch consultation data  
    fetch("/api/iconCardDataConsultHome")
      .then((response) => response.json())
      .then((data) => {
        console.log("Consultation data:", data);
        setCardDataConsultHome(data);
      })
      .catch((error) => console.error("Error fetching consultation data:", error));
  }, []);

  if (!cardDataBanner || !cardDataConsultHome) {
    return <HomeShimmer />;
  }

  return (
    <section className="desktop">
      {/* <Header /> */}
      <Banner cardData={cardDataBanner} />
      <ConsultationSection cardData={cardDataConsultHome} />
      <AppointmentSection />
      <TopAstrologers />
      <ReadyToStart />
      <Articles />
      <Testimonials />
      <DownloadApp />
      {/* <Footer /> */}
    </section>
  );
};

export default Home;
