import alex from "../../assets/Larios-2.jpg"

export default function AboutMe() {
    return (
      <>
       <div className="about-me">
        <div className="text-about">
          <p>I'm a problem-solver who loves to think critically. I handle stress well and I enjoy meeting making new friends.</p>
          <p>
            Ever since I was a kid, I've been fascinated by new technologies, and how they shape the world we live in.
            I always try to keep up with the latest trends and innovations in web development.
          </p>
        </div>
        <img className="myImage" src={alex} alt="Mi imagen" />
        </div>
      </>
    )
  }