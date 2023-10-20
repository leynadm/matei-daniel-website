import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import { useThemeContext } from "../contexts/theme-context-utils";
import "../styles/app-content.css";
import { useEffect, useState, useMemo } from "react";
import ProjectTile from "./ProjectTile";
import { thisWebsite, myfootballtracker, fitPowerUp } from "../utils";
import { useRef } from "react";

function useContainerRefs() {
  return [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];
}

function AppContent() {
  const { contextTheme } = useThemeContext();

  const containerRefs = useContainerRefs();

  const [isVisible, setIsVisible] = useState<boolean[]>(
    containerRefs.map(() => false)
  );

  const callbackFunction: IntersectionObserverCallback = (
    entries,
    observer
  ) => {
    entries.forEach((entry) => {
      const index = Number(entry.target.getAttribute("data-index"));
      if (entry.isIntersecting) {
        setIsVisible((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });

        // Add the "visible" class to the element
        entry.target.classList.add("visible");
      } else {
        // If the element is not intersecting, remove the "visible" class
        entry.target.classList.remove("visible");
      }
    });
  };

  const options: IntersectionObserverInit = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    containerRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute("data-index", String(index)); // Set the index as a data attribute
        observer.observe(ref.current);
      }
    });

    return () => {
      containerRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [containerRefs, options]);

  const [myLines, setMyLines] = useState([
    "I speak English, French, Spanish, Romanian and Javascript.",
    "Did you know I lived and worked in 4 different countries?",
    "The best purchase I ever made was a kindle - at 18 years old.",
    "My favorite childhood writer is Jules Verne.",
    "The only thing better than a book is a kindle with 1000 books.",
    "I like Javascript.",
    "My first programming language was...drums please: Visual Basic.",
    "One day I hope to be as good at programing as I am at Excel.",
    "If I get asked what my weakness is in an interview, it's writing tests.",
  ]);

  return (
    <div className={`app ${contextTheme}`}>
      <Router basename="/">
        <div className="is-boxed has-animations">
          <div className="body-wrap">
            <main>
              <section className="hero">
                <div className="container">
                  <div className="hero-inner">
                    <div
                      className={`hero-left ${
                        isVisible[2] ? "visible slide-in-left" : ""
                      }`}
                      ref={containerRefs[2]}
                    >
                      <h1 className="hero-title mt-0">
                        Hi, my name is Daniel!
                      </h1>
                      <p className="hero-paragraph">
                        With nearly a decade of professional experience under my
                        belt, I've ventured through the intriguing realms of
                        BPOs, helped eCommerce startups, and found my passion in
                        programing.
                      </p>
                      <div className="hero-cta">
                        <a
                          className="button button-primary"
                          aria-roledescription="button"
                          href="https://www.linkedin.com/in/matei-daniel/"
                          target="_blank"
                        >
                          Get in touch
                        </a>
                        {/* 
                        <a className="button" href="#">
                          Get in touch
                        </a> */}
                      </div>
                    </div>

                    <div
                      className={`my-picture ${
                        isVisible[3] ? "visible slide-in-right" : ""
                      }`}
                      ref={containerRefs[3]}
                    >
                      <div className="speech-bubble">
                        <p>I speak English, French, Spanish, Romanian and
                        Javascript.</p>
                      </div>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/matei-daniel-website.appspot.com/o/DANIEL_UPPER_TORSO_b_1024-min.png?alt=media&token=dc016c83-2606-43d8-a4c8-2cbe41303162&_gl=1*rsiusk*_ga*NjYzMzI3MTUwLjE2OTM5MzIzMjM.*_ga_CW55HF8NVT*MTY5Njg5MTkyMC4zNC4xLjE2OTY4OTE5MzAuNTAuMC4w"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className={`info section ${
                  isVisible[0] ? "visible fade-in" : ""
                }`}
                ref={containerRefs[0]}
              >
                <div className="container-sm">
                  <div className="info-inner section-inner">
                    <div className="info-header text-center">
                      <h2 className="section-title mt-0">
                        If I don't know it, I learn it. If it takes too long, I
                        do enough to figure it out.
                      </h2>
                      <p className="section-paragraph mb-0">
                        I've been coding since 2018, and entered the field of
                        web development in early 2022. Here is an overview of
                        the technology stack I've learned - and effectively used
                        so far.
                      </p>
                    </div>
                    <div className="info-tables-wrap">
                      <div className="info-table">
                        <div className="info-table-inner is-revealing">
                          <div className="info-table-main">
                            <div>Technologies</div>

                            <div className="info-table-header pb-24"></div>

                            <div className="front-end-wrapper">
                              <div className="technology-wrapper">
                                <i className="devicon-html5-plain colored"></i>
                                <p>HTML</p>
                              </div>

                              <div className="technology-wrapper">
                                <i className="devicon-css3-plain colored"></i>

                                <p>CSS</p>
                              </div>

                              <div className="technology-wrapper">
                                <i className="devicon-javascript-plain colored"></i>

                                <p>JavaScript</p>
                              </div>

                              <div className="technology-wrapper">
                                <i className="devicon-typescript-plain colored"></i>

                                <p>TypeScript</p>
                              </div>

                              <div className="technology-wrapper">
                                <i className="devicon-react-original colored"></i>

                                <p>React</p>
                              </div>

                              <div className="technology-wrapper">
                                <i className="devicon-git-plain colored"></i>

                                <p>Git</p>
                              </div>

                              <div className="technology-wrapper">
                                <i className="devicon-jest-plain colored"></i>

                                <p>Jest</p>
                              </div>

                              <div className="technology-wrapper">
                                <i className="devicon-firebase-plain colored"></i>
                                <p>Firebase</p>
                              </div>

                              <div className="technology-wrapper">
                                <i className="devicon-materialui-plain colored"></i>

                                <p>MaterialUI</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className={`features section ${
                  isVisible[1] ? "visible slide-in-left" : ""
                }`}
                ref={containerRefs[1]}
              >
                <div className="container">
                  <div className="features-inner section-inner has-bottom-divider">
                    <h2 className="section-title mt-0">My Projects</h2>
                    <div className="features-wrap">
                      <ProjectTile
                        title={thisWebsite.title}
                        description={thisWebsite.description}
                        technologies={thisWebsite.technologies}
                        livelink={thisWebsite.liveLink}
                        codeLink={thisWebsite.codeLink}
                        imageLink={thisWebsite.imageLink}
                      />
                      <ProjectTile
                        title={myfootballtracker.title}
                        description={myfootballtracker.description}
                        technologies={myfootballtracker.technologies}
                        livelink={myfootballtracker.liveLink}
                        codeLink={myfootballtracker.codeLink}
                        imageLink={myfootballtracker.imageLink}
                      />
                      <ProjectTile
                        title={fitPowerUp.title}
                        description={fitPowerUp.description}
                        technologies={fitPowerUp.technologies}
                        livelink={fitPowerUp.liveLink}
                        codeLink={fitPowerUp.codeLink}
                        imageLink={fitPowerUp.imageLink}
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section
                className={`github section ${
                  isVisible[4] ? "visible fade-in" : ""
                }`}
                ref={containerRefs[4]}
              >
                <div className="container-sm">
                  <div className="github-inner section-inner">
                    <div className="github-header text-center">
                      <h2 className="section-title mt-0">
                        Have a look at my{" "}
                        <a href="https://github.com/leynadm">GitHub profile</a>
                      </h2>
                      <p className="section-paragraph mb-0">
                        My GitHub profile has all my work, and a lot more of my
                        projects. You're always invited to have a look!
                      </p>
                      <a href="https://github.com/leynadm">
                        <img
                          src="https://github-readme-streak-stats.herokuapp.com/?user=leynadm&theme=dark&background=000000"
                          alt="github stats"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className={`cta section ${
                  isVisible[6] ? "visible slide-in-right" : ""
                }`}
                ref={containerRefs[6]}
              >
                <div className="container">
                  <div className="cta-inner section-inner">
                    <h3 className="section-title mt-0">
                      Have an interesting project and want to collaborate? Reach out!
                    </h3>
                    <div className="cta-cta">
                      <a
                        className="button button-primary button-wide-mobile"
                        href="https://www.linkedin.com/in/matei-daniel/"
                      >
                        Get in touch
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </main>

            <footer className="site-footer">
              <div className="container">
                <div className="site-footer-inner">
                  {/* 
                  <ul className="footer-links list-reset">
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">FAQ's</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>


                  <div className="footer-social-links">

    <div className="email-indicator">Reach out by email at matei_daniel@outlook.com</div>
    

        <a href="mailto:matei_daniel@outlook.com">
        <div className="material-symbols-outlined">mail</div>
        </a>
    
</div>
                   */}

                  <div className="footer-copyright"></div>
                </div>
              </div>
            </footer>
          </div>
        </div>

        {/* 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
     */}
      </Router>
    </div>
  );
}

export default AppContent;
