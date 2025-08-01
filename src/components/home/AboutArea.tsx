import React from "react";
import Count from "../common/Count";

const counter_data = [
  {
    id: 1,
    title: "Years Of Experience",
    count: 1,
    cls: "plus",
  },
  {
    id: 2,
    title: "Completed Projects",
    count: 25,
    cls: "plus",
  },
  {
    id: 3,
    title: "Client Satisfactions",
    count: 90,
    cls: "percent",
  },
];

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">About Me</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>
                  Hey there! I'm Muhammad Anamul Amin.a passionate Full Stack
                  Developer with 1 year of experience in web development. I've
                  worked on 7 full-stack , 5 React front-end projects, and a
                  desktop application using Electron. I specialize in the MERN
                  stack (MongoDB, Express.js, React, Node.js) and have a strong
                  focus on building seamless, user-friendly applications. My
                  goal is to create intuitive and efficient digital solutions
                  that make life easier for users. I'm excited to continue
                  growing my skills and contributing to the tech community!
                </p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
