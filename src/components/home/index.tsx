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
      "https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/my_portfolio%2Fscreencapture-nybbqguys-2025-07-29-16_24_59.png?alt=media&token=51c6eb0f-a47d-475d-89ac-b1604d3ccb95",
    title: "Glasses of Cocktail",
    category: "Branding",
    link: "https://www.nybbqguys.com",
  },
  {
    id: 2,
    col: "6",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/my_portfolio%2Fscreencapture-multisports-bd-2025-07-29-16_11_54.png?alt=media&token=73fac05e-b021-48a8-906a-52d80ca58472",
    title: "Sports Equipment & Apparel Store",
    category: "e-commerce",
    link: "https://multisports.com.bd/",
  },
  {
    id: 3,
    col: "4",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/my_portfolio%2Fscreencapture-descansosupremo-2025-07-29-16_34_43.png?alt=media&token=be11cc12-83eb-4869-aaac-902076e837cd",
    title: "Orange Rose Flower",
    category: "e-commerce",
    link: "https://descansosupremo.com/",
  },
  {
    id: 5,
    col: "4",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/my_portfolio%2Fhttps-%3Awww.shopmahogany.com%3A.png.png?alt=media&token=22601fb6-2dc8-429a-ba00-e06ad34f23b9",
    title: "Orange Rose Flower",
    category: "e-commerce",
    link: "https://www.shopmahogany.com/",
  },
  {
    id: 4,
    col: "4",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fir-authenticationprojec-880fd.appspot.com/o/my_portfolio%2Fscreencapture-neverevernamelessstuff-myshopify-2025-07-29-16_27_21.png?alt=media&token=d1026f82-af98-4aa1-82bf-b1d2fd165017",
    title: "Green Plant on a Desk",
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
