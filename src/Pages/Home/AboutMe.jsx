export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          A final-year B.Tech student in Computer Science with expertise in C++, web development 
          (HTML, CSS, JavaScript), and cloud computing (AWS, Google Cloud). I’ve solved over 150 LeetCode problems 
          and demonstrated leadership in managing coding communities like GDSC and ACM. My skills also include organizing 
          tech events and strong public speaking abilities.
          </p>
          
        </div>
      </div>
    </section>
  );
}
