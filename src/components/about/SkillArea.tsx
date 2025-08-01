"use client";

export default function SkillArea({ skill, idx }: any) {
  return (
    <>
      <section
        id="skills"
        className="skill-area"
        style={{
          background: idx % 2 === 0 ? "transparent" : "var(--primary-color)",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title section-black-title mb-40 wow fadeInUp delay-0-2s">
                  <h2 style={{ color: idx % 2 === 0 ? "white" : "black" }}>
                    {skill.category}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="skill-items-wrap">
                  <div className="row">
                    {skill.skills &&
                      skill.skills.map((technology: any, idx: number) => (
                        <div
                          className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6"
                          key={idx}
                        >
                          <div className="skill-item wow fadeInUp delay-0-2s">
                            <img
                              src={technology.logo}
                              alt="Skill"
                              style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "scale-down",
                              }}
                            />
                            <h5>{technology.name}</h5>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
