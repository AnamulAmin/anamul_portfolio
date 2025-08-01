"use client";
import React, { useEffect, useState } from "react";
import SkillArea from "./SkillArea";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

export default function About() {
  const [mySkills, setMySkills] = useState<any>([]);

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
            {mySkills.length > 0 &&
              mySkills.map((skill: any, idx: number) => (
                <SkillArea skill={skill} key={idx} idx={idx} />
              ))}
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
}
