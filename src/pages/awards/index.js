import React from "react";

function Awards() {
  return (
    <section className="section" id="a">
      <div className="row justify-content-evenly">
        <div
          className="col-4"
          style={{ marginTop: "90px", textAlign: "center" }}
        >
          <h1
            style={{
              color: "#443659",
              textAlign: "center",
              textShadow: "2px 2px 5px white",
            }}
          >
            Awards <br />
            &amp;
            <br />
            Certificates
          </h1>
          <section className="section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={200}
              height={200}
              fill="#443659"
              className="bi bi-award-fill"
              viewBox="0 0 16 16"
            >
              <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
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
              <p style={{ textAlign: "center", color: "#443659" }}>
                Got 2nd place in the CODESPRINT competition organized by IEEE in
                2018
              </p>
              <p style={{ textAlign: "center", color: "#443659" }}>
                Got the 3rd place in Aces Coders V8.0 organized by UOP in 2019
              </p>
            </div>
          </section>
          <hr style={{ color: "#4C3D66", borderWidth: "5px" }} />
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
              <p style={{ textAlign: "center", color: "#443659" }}>
                Won the 1st place in CODECon 2.0 organized by SLIIT in 2020
              </p>
              <p style={{ textAlign: "center", color: "#443659" }}>
                Won the 1st place in CODErally organized bu IIT in 2021
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Awards;
