import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Analyse extends React.Component {
  render() {
    return (
      <div className="Section-wrapper">
        <p>
          Evaluating a prototype, an interaction or full software must be one of
          the most challenging tasks of a designer. Defining the right methods
          for the intented purpose and making sense out of the results is not
          straight-forward and requires both extensive planning and all sorts of
          improvisaiton based on the situation. The design cycle represented by
          the navigation compass on this page will replay itself, as the
          analysis ties right into the results of each evaluation.
        </p>
        <p>
          In this section, I'll go through some of the evaluation methods that
          I've used during my projects and that weren't described in the{" "}
          <a href="#analyse">inquiry and analysis</a> section.
        </p>
        <h4>Guerrilla testing</h4>
        <img
          src={require("./images/cocat evaluation.png")}
          alt="Cocat evaluation"
          className="Image medium right"
        />
        <p>
          During a mobile development project we spontaneously asked college
          students fitting our target group to try out our prototype with no
          instructions and to explain out loud what they were thinking and
          trying to accomplish. We documented our observations and in the end,
          did a short user interview with each user. We used the results to
          improve the current prototype, which was similarly re-evaluated with
          new – and some of the previous – users.
        </p>
        <p>
          <b>
            We chose the spontaenous guerrilla testing because we were designing
            for mobile
          </b>
          , which should be simple and intuitive enough for first-time users.
          However, including some individual users in all iterations made the
          evaluation criteria more coherent and reliable. We also experimented
          with remote testing for the first time.{" "}
          <b>
            Although remotely interacting with a mobile screen simulator didn't
            necessarily give the same response from the users as proper
            interaction with the mobile interface would've, it was benefical for
            accessing and documenting results
          </b>
          . To minimize the negative impact of remote testing, we only chose
          users who were previously familiar with our concept to do it.
        </p>
        <h4>The Wizard of Oz</h4>
        <img
          src={require("./images/snoctopus_first.jpg")}
          alt="Snoctopus woz"
          className="Image small left"
        />
        <p>
          Fake it till you make it? I've made use of the so-called WoZ method to
          mimic the digital feedback of a computer system, be it visuals of a
          multiplayer game or sound effects of a collaborative mixer affecting
          the whole band during live jamming.{" "}
        </p>
        <p>
          Both times,{" "}
          <b>
            the WoZ method truly sped up the process by providing me with
            valuable insights and directing the following design, which I could
            trust to be implementation-worthy
          </b>
          . Indeed, by the time I got to the evaluation of the more technical
          prototype, there weren't many surprises regarding the overall design,
          but further development ideas and motivation.
        </p>
        <h4>Focus groups</h4>
        <p>
          An important thing I've recognized is that user testing ofter combines
          quality assurance of the used technology and qualitative feedback on
          the content. Planning the questions asked and activities to perform
          during evaluation with respect to this division is key – the users
          shouldn't focus on it, while the team needs feedback on both.
        </p>
        <p>
          I got introduced to focus groups during an industrial engineering
          course project at Aalto University, where we collaborated with a
          professional service designer. We evaluated a mobile application aimed
          to prevent health issues and to promote behavioral change. I acquired
          important skills regarding how to recruit and take care of
          participants and properly organize workshops consisting of
          questionnaires, individual interviews and group discussions, which
          I've used ever since.
        </p>
        <p>
          Now I'm using focus groups for full beta testing periods of the{" "}
          <a
            href="https://alohabyelk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aloha service
          </a>
          . Together with our CMO, we have recruited 10 focus groups consisting
          of 2-3 professional musicians to consistently use our beta version
          over two set time periods and provide continous feedback. While
          logistics as well as financial and technical aspects restricted the
          amount of beta users, we emphasized critical audiences with marketing
          value.
        </p>
        <p>
          These focus groups combine structured data collection with thorough
          evaluation, as the product will be used in its real use case, while we
          are able to interview the users and observe the interactions.{" "}
          <b>
            Notably, a version of the product for such a demanding purpose has
            required many iterations of groundwork, such as eliminating the
            identified usability issues and automating bug reports
          </b>
          . Managing communication with user groups in this type of setting
          requires consideration of its own, and managing a separate platform
          for that purpose has naturally become my responsibility as a designer.{" "}
        </p>
        <h4>Participatory methods for inclusive design</h4>
        <p>
          While studying at KTH, me and my peer wanted to research how to
          overcome language barriers between a designer and the users, which can
          happen when practicing inclusive design for specific user groups. As
          example cases we did two design evaluations: an interactive
          multiplayer game for Swedish children and a set of products designed
          for people who were either deaf or had selective mutism.{" "}
        </p>
        <img
          src={require("./images/score.jpg")}
          alt="Snoctopus"
          className="Image full"
        />
        <p>
          We defined our evaluation methods by first conducting a literature
          research. The methods we used were high-fidelity prototyping combined
          with a real use scenario for the children and theatrical play combined
          with pre-defined and silent feedback methods for the deaf. You can
          read the full report{" "}
          <a
            href="https://drive.google.com/file/d/1_SiBPG3SXZu79scXiTltJrWkBnuUTLq5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          , but in conclusion we found out that both methods supported the users
          during the evaluation process by increasing their confidence and
          giving them means to express both emotion and opinions without words,
          either directly or indirectly to us designers. In the case of the
          interactive multiplayer game designed to be used at Swedish
          playgrounds during the snowy and dark winter, the results of the
          evaluation were used to enhance and reimplement the design, which you
          can check out below.
        </p>
        <iframe
          title="Snoctopus"
          src="https://www.youtube.com/embed/KrjRN5ChtIA"
        ></iframe>
      </div>
    );
  }
}
