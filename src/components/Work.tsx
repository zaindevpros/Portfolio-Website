import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Software Solutions Portal",
    category: "Software Sales & Solutions",
    tools: "Client Needs Analysis, Solution Demos, Requirement Mapping",
  },
  {
    title: "Modern Web Platform",
    category: "Advanced Web Development",
    tools: "Responsive Design, Front-End Architecture, Web Standards",
  },
  {
    title: "Client Relations Hub",
    category: "Client Relationship Management",
    tools: "Account Management, Inquiries Handling, Client Retention",
  },
  {
    title: "Interactive UI/UX System",
    category: "Web Design & UI/UX",
    tools: "UI/UX Concepts, Wireframing, User Journey Optimization",
  },
  {
    title: "Business Analytics & Reporting",
    category: "Microsoft Office Suite",
    tools: "Advanced Excel Modeling, PowerPoint Presentations, Word Reports",
  },
  {
    title: "Technical Product Showcase",
    category: "Technical Demonstrations",
    tools: "Software Demos, Solution Consultation, Non-Technical Guidance",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
