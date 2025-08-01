import React from "react";

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Services</h2>
              </div>
            </div>
          </div>
          <div className="row align-baseline">
            <div className="col-lg-7 col-md-7">
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>
                  Dynamic Web Animations with Three.js, GSAP & Framer Motion
                </h4>
                <p>
                  Bring your website to life with stunning, interactive
                  animations. I specialize in creating custom animations using
                  Three.js for 3D graphics, GSAP for high-performance
                  animations, and Framer Motion for smooth transitions and
                  interactions. Whether you’re looking to add visually engaging
                  animations to your homepage or implement complex interactive
                  elements, I ensure seamless performance across all devices
                  while keeping user engagement high.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-5">
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>
                  Custom E-commerce Websites with User-Friendly Admin Panels
                </h4>
                <p>
                  I provide end-to-end solutions for building e-commerce
                  websites tailored to your business needs. From product pages
                  to secure payment gateways, I ensure your online store is
                  visually appealing and highly functional. I also create custom
                  admin panels that allow you to easily manage products,
                  customers, and orders, empowering you to take full control of
                  your business operations with minimal effort.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-5">
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>Mobile App Development for iOS & Android</h4>
                <p>
                  Get your business into the pockets of millions with a
                  custom-built mobile app for both iOS and Android platforms.
                  Whether you’re looking to develop a user-centric app, improve
                  engagement, or provide a seamless shopping experience, I
                  create mobile solutions that are intuitive, reliable, and
                  scalable. My apps are designed with your users in mind,
                  offering smooth interfaces and high-performance functionality.
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-md-7">
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>Shopify Development & Store Optimization</h4>
                <p>
                  Looking to build or optimize your Shopify store? I specialize
                  in creating fully functional, customizable Shopify stores
                  tailored to your brand and product offerings. From design to
                  product setup and theme customization, I ensure your store is
                  not only visually appealing but also optimized for
                  conversions. I can also help with improving the performance
                  and scalability of your Shopify store to meet growing demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
