import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Analyse extends React.Component {
  render() {
    return (
      <div className="Section-wrapper">
        <p>
          My fight for better design started by realizing that it was up to me,
          a developer trainee at Nokia, to decide how a web application should
          work. I had no idea what most of the data handled by that website
          meant. Oh, KPI stands for key performance indicator? Still boggled.
          Who found these indicators valuable and why? Since then, I've made
          sure to always answer that question first.{" "}
        </p>
        <h4>Surveys</h4>
        <p>
          To be fair, at Nokia we knew exactly who was using the system as well
          as the indented purpose. I just didn't know how. Since then, I've
          started user research for real products, case winning hackathon
          projects and best graded university courses by conducting online
          surveys – so far they haven't failed me in directing a design towards
          the right way. Once prospective, active or past users have been
          reached, getting to know them personally, statistically and as the
          users of your product is everything.
        </p>
        <h5>Aloha</h5>
        <p>
          After graduating from KTH in Stockholm, I started working as a UX
          designer at a startup called Elk, where I had just done my thesis. The
          new goals set during the outbreak of a pandemic required prompt action
          to find the right direction. As we set out to develop the{" "}
          <a
            href="https://alohabyelk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aloha service
          </a>{" "}
          to enable musicians to work remotely, instead of the familiar B2B
          approach, one had to not only reach enthusiastic users, but also map
          out their needs, desires and attitudes.
        </p>
        <p>
          As my first task, I drafted an online survey based on experience
          gained during business development labs at the EIT Digital master
          school.{" "}
          <b>
            The study eventually reached 445 volunteer beta testers and helped
            our developer team to prioritize features, me to realize how they
            should be implemented and the CFO, who found the results "extremely
            valuable", with the pricing of the product.
          </b>
        </p>
        <h5>Oasis</h5>
        <p>
          <img
            src={require("./images/oasis_mockup.png")}
            alt="Oasis mockup"
            className="Image small right"
          />
          To win the Sthlm Tech Fest 2019 Husqvarna and Capgemini challenge, our
          team developed a platform, Oasis, which enabled collectively sharing
          and building green areas in the urban environment. The owners (a city,
          an organization or an individual) of green areas could find gardeners
          to maintain or to fully design it, responding to the needs of those
          living in a small city flat with a longing for gardening and
          significantly reducing the costs of keeping public spaces attractive.
        </p>
        <p>
          <b>
            {" "}
            Reaching out to young adults and the city of Stockholm proved that
            the value provided by the platform well represented those behind the
            business challenge: well-being, community and both environmental and
            financial sustainability.
          </b>{" "}
          As the secret (usability) sauce, Oasis attracted inexperienced city
          gardeners with automated notifications about plant watering, enabled
          by the smart humidity sensors provided by the case owner.
        </p>
        <h5>Weather to wear</h5>
        <p>
          <img
            src={require("./images/technosocial.png")}
            alt="Wtw"
            className="Image full left"
          />
          Another success was the development of "Weather to Wear", a web
          application for digitizing one's wardrobe and personalizing
          suggestions for clothes swapping between users. The environmental
          impact of the garment industry (20% of all water pollution) could be
          battled with a C2C business model integrated with an existing
          clothes-swapping platform, Vinted, with more than 1.5 million active
          daily users in France.
        </p>
        <p>
          Thanks to AI, W2W could match personalized suggestions on what to wear
          or pack for a trip with the weather conditions.
          <b>
            {" "}
            Thanks to a market research and an additional online survey, we
            could shape a business-worthy design and identify our first
            users. We analysed 38 responses to the online survey and ran a
            statistical analysis on RStudio regarding significant factors.
          </b>{" "}
          Afterwards, we received a positive response after contacting the CEO,
          the head of engineering and the head of product at Vinted and were
          encouraged to keep working on the platform.
        </p>
        <h4>The critical indicent technique</h4>
        <p>
          Something I took away from my year at Université Paris-Saclay (ranked
          14th globally in the {""}
          <a
            href="http://www.shanghairanking.com/ARWU2020.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Academic Ranking of World Universities 2020
          </a>
          ) was the step between having an idea what to make and to whom, and
          zooming into how to design it – kind of like the situation I had at
          Nokia. I now often{" "}
          <b>
            ask the user to describe, in as much detail as possible, issues they
            faced and how they resolved them while interacting with a specific
            interface.
          </b>{" "}
        </p>
        <p>
          When designing AccessMap, a navigation app optimizing the most
          accessible routes, we asked about a competitive solution, whereas with
          Part Planner, a collaborative party planner application and Squatle, a
          service for booking sports classes, this technique was iteratively
          used to improve the prototype we were currently working on.{" "}
          <b>
            Each time it pinpointed the focus points of the following prototype
            and resulted in an improved design.
          </b>
        </p>
        <h4>Observation and documentation</h4>
        <p>
          <img
            src={require("./images/jamming.png")}
            alt="Digital jamming"
            className="Image medium right"
          />
          When designing a digital interface for live musicians, I noticed that
          sometimes you need to hit the field – or create one – to acquire
          knowledge. As my thesis project, I designed a collaborative interface
          for adjusting digital audio effects of four instruments simultaneously
          in real-time. The participatory design process started by organizing
          workshops, where the musicians were instructed to perform different
          improvisation tasks to identify the main opportunities and challenges
          of digital audio effects in improvised live music.{" "}
          </p>
          <p>
          <b>
            By socially engineering a real situation, more targeted and valuable
            observations about the use case could be vocalized and documented
            during the group discussions that followed
          </b>
          . However, not everything valuable was mentioned during these
          discussions. Recording things said out loud while performing a task
          was crucial, so{" "}
          <b>
            I encourage users to speak up during the interaction with a system
            or a prototype as much as possible.
          </b>{" "}
        </p>
        <h4>Personas and scenarios</h4>
        <p>
          <img
            src={require("./images/w2w personas.png")}
            alt="Wtw personas"
            className="Image medium left"
          />
          A great way to bring forward the knowledge about users is
          constructing user personas and scenarios. I've noticed that this
          practice might not be taken as seriously as it should: it can
          merge together intrinsic knowledge and put details into perspective in
          a motivating and easy-to-grasp way for the whole team. Deducing a
          somewhat detailed story about what type of personas are going to use a
          product – and in which situations – helps communication, because as a
          team member you can use those to justify comments regarding features,
          layout, look and feel. The{" "}
          <a
            href="https://drive.google.com/file/d/1A0wONZ4hGZu7cVqXUFgITROLr7-4PuzE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            user personas and scenarios identified for Aloha{" "}
          </a>
          were based on individual user interviews with users who had tried the
          prototype for varying use cases. The user personas for Weather to
          wear, on the other hand, were constructed based on the statistical
          analysis of an online survey.
        </p>
      </div>
    );
  }
}
