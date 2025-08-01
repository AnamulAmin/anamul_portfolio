"use client";
import Image from "next/image";
import { useState } from "react";
import ImagePopup from "@/modals/ImagePopup";

export default function PortfolioArea({
  portfolio_data = [],
  title,
  isDark = true,
}: any) {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  //  images
  const image = portfolio_data.map((item: any) => item.image);

  return (
    <>
      <div
        className="projects-area"
        id="portfolio"
        style={{
          backgroundColor: isDark ? "transparent" : "var(--primary-color",
        }}
      >
        {title ? (
          <h2
            className="about-pre-title"
            style={{
              color: isDark ? "white" : "black",
              marginBottom: "30px",
              marginLeft: "20px",
              fontSize: "40px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {title}
          </h2>
        ) : (
          <div className="custom-icon">
            <img src="assets/images/custom/work-scribble.svg" alt="custom" />
          </div>
        )}
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item: any, i: number) => (
              <div
                key={i}
                className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)}
                  className="work-popup"
                >
                  <div className="portfolio-box">
                    <Image
                      src={item.image}
                      alt=""
                      style={{ height: "400px", objectFit: "cover" }}
                      data-rjs="2"
                      width={500}
                      height={500}
                    />
                    <span className="portfolio-category">{item.category}</span>
                    <a href={item?.link ? item.link : "#"} target="_blank">
                      <span className="portfolio-link">Visit Project</span>
                    </a>

                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && photoIndex !== null && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
}
