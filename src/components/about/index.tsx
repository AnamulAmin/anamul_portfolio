"use client";
import React, { useEffect, useState } from "react";
import SkillArea from "./SkillArea";
import ResumeArea from "./ResumeArea";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

export default function About() {
  const [mySkills, setMySkills] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/technicalData.json");
      const techSkills = await res.json();
      setMySkills(techSkills);
      console.log(techSkills);
    };
    fetchData();
  }, []);
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="About Me" />
            {/* <ResumeArea /> */}
            {mySkills &&
              mySkills.map((skill, idx) => (
                <SkillArea skill={skill} key={idx} idx={idx} />
              ))}
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
}
