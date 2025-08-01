import React from "react";

import type { Metadata } from "next";
import Home from "@/components/home";
import Wrapper from "@/layouts/Wrapper";
export const metadata: Metadata = {
  title: "MD. Anamul Amin",
  description: `Hi, I am a Full-Stack Developer passionate about building scalable, user-friendly web apps with modern technologies. I focus on clean code, efficient systems, and seamless user experiences.`,
};

export default function index() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
