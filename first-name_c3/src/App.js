import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">My Portfolio</h1>
      <div className="name_details">
      <h2>Philia Hammond</h2>
      <p>+233 249588151 | philiahammmond@gmail.com | https://www.linkedin.com/in/philiahammond</p>
      </div>
      <hr/>
     <div>
     <h3 className="title">Professional Summary</h3>
      <p>
      As an entry-level front-end developer with a passion for creating visually appealing and user-friendly interfaces, I
bring 2 years of experience collaborating with other members of the team to deliver high-quality web applications.
With a strong foundation in HTML, CSS, and JavaScript, I am adept at translating design concepts into functional
and responsive code. Additionally, I have strong problem-solving and analytical skills with excellent written and
verbal communication abilities. I am committed to staying up-to-date with the latest industry trends and technologies
to continuously improve my skills and deliver exceptional results.
      </p>
     </div>
     <hr/>
     <div>
      <h3 className="title">Professional Background</h3>
      <h4>Part-time Front-End Developer | EggSeed LLC - 06/2022 to Current</h4>
      <ul>
        <li>Part of a team that successfully developed landing pages called pulse released for Eggseed (home, about,
            pricing, faq, contact and proposal pages) using typescript in react, react bootstrap and styled components.
       </li>
        <li>Successfully built a restaurant app using typescript in react, scss and styled-components for a client of Eggseed.</li>
        <li>Successfully built a restaurant app using Html and scss for a client of Eggseed.</li>
        <li>Built reusable code that could be utilized in other projects.</li>
        <li>Stay up to date with the latest front-end technologies and best practices.</li>
        <li>Work collaboratively with other team members to ensure the website meets the needs of the business and the end-users.</li>
        <li>Troubleshoot and debug any issues that arise.</li>
      </ul>
     </div>
     <hr/>
    <div className="title">
    <h3>Skills</h3>
     <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React.js</li>
      <li>TypeScript</li>
     </ul>
    </div>
    <hr/>
    <div>
      <h3 className="title">Educational Background</h3>
      <h4>Professional Certificate: Front-End Development, Mar-Dec, 2023</h4>
      <p>Azubi Africa Front-End Development Program</p>
      <h4>Bachelor of Science: Home Science (Consumer Science) Sept, 2008 - June, 2012</h4>
      <p>University of Ghana</p>
    </div>
    </div>
  );
}

export default App;