import React from "react";

function Home() {
  return (
    <section className="section" id="h">
      <div className="row justify-content-evenly">
        <div className="col-4">
          <img
            src="pp.jpg"
            className="img-fluid"
            alt="Personal Portifolio"
            style={{ borderRadius: "40%", marginTop: "30px" }}
          />
        </div>
        <div className="col-4">
          <h4
            style={{
              color: "white",
              fontFamily: "cursive",
              fontSize: "larger",
            }}
          >
            Hello Everybody, I am
          </h4>
          <br />
          <h1
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "50px",
              fontFamily: "serif",
              textShadow: "2px 2px 5px burlywood",
            }}
          >
            PASINDI VINDULA
          </h1>
          <span>
            <p
              style={{
                color: "white",
                fontSize: "medium",
                fontFamily: "serif",
              }}
            >
              Information systems undergraduate at University of colombo school
              of computing.
            </p>
          </span>
          <br />
          <div
            style={{
              boxShadow:
                "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",
              backgroundColor: "#A999C2",
              borderRadius: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <p
              style={{
                color: "white",
                textAlign: "justify",
                fontSize: "large",
                fontFamily: "serif",
              }}
            >
              I am a hardworking and ambitious individual with a great interest
              in the field of Information and Communication Technology and
              Software Engineering. After obtaining 3A passes in GCE Advance
              Level with a z-score of 1.8994 I am currently following the
              Information Systems Degree offered by the University of Colombo
              and the Software Engineering Degree offered by SLIIT and I am also
              following CIMA Management Level. My peers believe in my Leadership
              and therefore I have been able to earn many achievements
              throughout my schooling career as a leader. I am a Public Speaker
              with an interest in social justice and a passion to empower and
              influence. I am also very enthusiastic about Speech and Drama and
              Fashion Designing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
