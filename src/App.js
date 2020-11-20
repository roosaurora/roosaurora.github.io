import React from "react";
import "./App.css";
import Compass from "./Compass.js";
import ContentParallax from "./ContentParallax.js";
import PageContent from "./PageContent.js";
import Analyse from "./Analyse.js";
import Ideate from "./Ideate.js";
import Build from "./Build.js";
import Evaluate from "./Evaluate.js";

// sections = ["analysing", "ideating", "building", "evaluating"]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-parallax">
          <div className="Header-text">
            <h1 className="Scratch-title">I am</h1>
            <h1>Design principles are</h1>
          </div>
        </div>
      </header>
      <Compass />
      <body className="App-body">
        <ContentParallax
          name="Analyse"
          scratch="A quota female"
          fixed="Accurate"
        />
        <PageContent
          id="analyse"
          title="Inquiring and analysing"
          content={<Analyse />}
        />
        <ContentParallax
          name="Ideate"
          scratch="Pretty and kind for all project members to alleviate working"
          fixed="Pretty holistic and kind of necessary for all project members to
              enjoy working"
        />
        <PageContent
          id="ideate"
          title="Developing ideas"
          content={<Ideate />}
        />
        <ContentParallax
          name="Build"
          scratch="A nice thing for extra budget"
          fixed="Amazing for any budget"
        />
        <PageContent
          id="build"
          title="Creating the solution"
          content={<Build />}
        />
        <ContentParallax
          name="Evaluate"
          scratch="Focused on how it looks"
          fixed="Focused on how it feels"
        />
        <PageContent id="evaluate" title="Evaluating" content={<Evaluate />} />
      </body>
    </div>
  );
}

export default App;
