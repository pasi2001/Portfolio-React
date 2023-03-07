import React from "react";

function Education() {
  return (
    <section className="section" id="e">
      <div className="row justify-content-evenly">
        <div
          className="col-4"
          style={{ marginTop: "200px", textAlign: "center" }}
        >
          <h1
            style={{
              color: "#3A2F4C",
              textAlign: "center",
              textShadow: "2px 2px 5px white",
            }}
          >
            Education <br />
            &amp;
            <br />
            Experience
          </h1>
          <section className="section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={200}
              height={200}
              fill="#3A2F4C"
              className="bi bi-mortarboard-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
            </svg>
          </section>
        </div>
        <div className="col-4">
          <section className="section">
            <div
              style={{
                boxShadow:
                  "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",
                borderRadius: "10px",
                paddingTop: "20px",
                paddingBottom: "20px",
                fontSize: "large",
              }}
            >
              <p style={{ textAlign: "center", color: "#3A2F4C" }}>
                2017 Ordinary Level
                <br />
                9As
              </p>
              <p style={{ textAlign: "center", color: "#3A2F4C" }}>
                2020 Advanced Level
                <br />A B C
              </p>
              <p style={{ textAlign: "center", color: "#3A2F4C" }}>
                Diploma Level in BCS
              </p>
              <p style={{ textAlign: "center", color: "#3A2F4C" }}>
                undergraduate at UCSC
              </p>
            </div>
          </section>
          <hr style={{ color: "#3A2F4C", borderWidth: "5px" }} />
          <section className="section">
            <div
              style={{
                boxShadow:
                  "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",
                borderRadius: "10px",
                paddingTop: "40px",
                paddingBottom: "20px",
                fontSize: "large",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <p style={{ textAlign: "center", color: "#3A2F4C" }}>
                1 year experience at IMS Institute
              </p>
              <p style={{ textAlign: "center", color: "#3A2F4C" }}>
                Team Leader in Incoming Global Volunteer of AIESEC in CC
              </p>
              <p style={{ textAlign: "center", color: "#3A2F4C" }}>
                People Management Specialist in AIESEC in CC
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Education;
