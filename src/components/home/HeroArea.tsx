import React from "react";
import { IconCloudArea } from "../common/IconCloudArea";

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>Anamul Amin</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-2s">
                <IconCloudArea />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="assets/images/about/me.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>
                  Hi, I am Anamul Amin a Full-Stack Developer. I specialize in
                  building scalable, user-friendly web applications using modern
                  technologies. Passionate about clean code, efficient systems,
                  and seamless user experiences, I turn ideas into reality. 🚀
                </p>
                <a className="theme-btn" href="/contact">
                  Get In touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
