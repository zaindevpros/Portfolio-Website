import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Sales & Support Specialist</h4>
                <h5>Software House | Karachi, Pakistan</h5>
              </div>
              <h3>EXP</h3>
            </div>
            <p>
              Handled end-to-end client inquiries, recommending tailored software
              solutions that increased satisfaction rates. Collaborated closely
              with the software development team on custom requirements, managed
              key accounts, and delivered technical demonstrations to prospective
              clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Information Technology</h4>
                <h5>Aptech Computer Education</h5>
              </div>
              <h3>DIT</h3>
            </div>
            <p>
              Completed comprehensive 3-Year Diploma program in Information
              Technology, gaining rigorous training in advanced web development,
              software fundamentals, and modern UI/UX design concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Microsoft Office Specialist Training</h4>
                <h5>Aptech Computer Education</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              Professional training in Microsoft Office Suite (Word, Excel,
              PowerPoint), focusing on executive documentation, data
              organization, and business presentations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation (Science)</h4>
                <h5>M2 Grammar School, Karachi (Sindh Board)</h5>
              </div>
              <h3>SSC</h3>
            </div>
            <p>
              Secondary school education in Science under Sindh Board,
              establishing core analytical problem-solving skills, science, and
              mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
