"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../common/Breadcrumb";
import PortfolioArea from "../home/PortfolioArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

interface PortfolioItem {
  id: number;
  image: string;
  alt: string;
  link: string;
  title: string;
  description: string;
  techName: string;
  col: string;
}

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

export default function Projects() {
  const [projectData, setProjectData] = useState<any>([]);
  const react = projectData.filter((item: any) => item.techName === "reactJs");
  const next = projectData.filter((item: any) => item.techName === "nextJs");
  const html = projectData.filter((item: any) => item.techName === "html_page");
  const electronJs = projectData.filter(
    (item: any) => item.techName === "electronJs"
  );
  const gsap_project = projectData.filter(
    (item: any) => item.techName === "gsap_project"
  );

  console.log(react);
  console.log(next);
  console.log(html);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch("/data/projectsData.json");
      const data = await res.json();
      setProjectData(data);
    };
    fetchProject();
  }, []);
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Projects" style_2={true} />
            <PortfolioArea portfolio_data={portfolio_data} />
            <PortfolioArea
              portfolio_data={react}
              title="React Project"
              isDark={false}
            />
            <PortfolioArea
              portfolio_data={next}
              title="Next Js Project"
              isDark={true}
            />
            <PortfolioArea
              portfolio_data={html}
              title="HTML Project"
              isDark={false}
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
}
