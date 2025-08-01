import React from "react";
import HeroArea from "./HeroArea";
import BrandArea from "./BrandArea";
import AboutArea from "./AboutArea";
import ServiceArea from "./ServiceArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import PortfolioArea from "./PortfolioArea";
import BlogArea from "./BlogArea";
import ContactArea from "./ContactArea";
import FooterOne from "@/layouts/footers/FooterOne";
import TestimonoalArea2 from "./TestimonoalArea2";

interface DataType {
  id: number;
  col: string;
  image: string;
  title: string;
  category: string;
  link: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    col: "6",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/my_portfolio%2Fscreencapture-nybbqguys-2025-07-.png?alt=media&token=c7beceff-4878-42f6-a6af-a88b1ea3c9f9",
    title: "NY BBQ Guys",
    category: "Branding",
    link: "https://www.nybbqguys.com",
  },
  {
    id: 2,
    col: "6",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/my_portfolio%2Fscreencapture-multisports-bd-202.png?alt=media&token=16584ab9-2c67-4c9f-826b-d144a66cf723",
    title: "MultiSports BD",
    category: "e-commerce",
    link: "https://multisports.com.bd/",
  },
  {
    id: 3,
    col: "4",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/my_portfolio%2Fscreencapture-descansosupremo-20.png?alt=media&token=983e75a0-02a1-497b-86b3-de2d5a032c44",
    title: "Descanso Supremo",
    category: "e-commerce",
    link: "https://descansosupremo.com/",
  },
  {
    id: 5,
    col: "4",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/my_portfolio%2Fhttps-%3Awww.shopmahogany.com%3A.png.png?alt=media&token=22601fb6-2dc8-429a-ba00-e06ad34f23b9",
    title: "Shop Mahogany",
    category: "e-commerce",
    link: "https://www.shopmahogany.com/",
  },
  {
    id: 4,
    col: "4",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/my_portfolio%2Fscreencapture-neverevernamelesss.png?alt=media&token=e0100292-58c7-4381-b059-ecd93255e223",
    title: "Never Ever Nameless Stuff",
    category: "e-commerce",
    link: "https://neverevernamelessstuff.myshopify.com/",
  },
];

export default function Home() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <BrandArea />
            <AboutArea />
            <ServiceArea />
            <PortfolioArea portfolio_data={portfolio_data} />
            <TestimonoalArea2 />
            {/* <BlogArea /> */}
            <ContactArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
}
