import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Analyse extends React.Component {
  render() {
    return (
      <div className="Section-wrapper">
        <p>
          Ideating has a significant role in the design process and happens to
          be one of my distinctive features. I would even say that I internalize
          knowledge best by ideating: unless I constantly link pieces of
          information together and develop them into new ideas, my head doesn't
          know what to do with them. Ideation can be collaborative (more fun)
          and based on the knowledge acquired with the techniques described in
          the previous section. In this section, you'll find some of the
          techniques I've used to create and deliver ideas during projects.
        </p>
        <h4>Bodystorming</h4>
        <p>
          While studying physical interaction, I realized that all HCI goes
          beyond thought and that the bubbly brainstorming we practice with
          business ideas wouldn't necessarily suffice for user interfaces. I got
          introduced to bodystorming when creating a prototype for an interface
          whose physicality should be exaggerated. Since we wanted to ideate how
          to engage people at the gym, that had to be done through our bodies
          and not just with our minds. Thus, we headed over to a gym and after
          playing around came up with the idea that turning a trampoline into a
          piano would engage us in jumping – or playing piano – together longer.
        </p>
        <iframe
          title="Pianoline"
          src="https://www.youtube.com/embed/Dovx6mib32Y"
        ></iframe>
        <h4>Sketches</h4>
        <img
            src={require("./images/WtW sketch.png")}
            alt="WtW sketch"
            className="Image medium right"
          />
        <p>
          ...and I'm not just talking about interactive prototypes made with
          Sketch and Craft, but also quick and dirty hand-drawn illustrations to
          guide my developer colleague with their task of the day, and
          everything in between, such as{" "}
          <a
            href="https://projects.invisionapp.com/share/NAUQGA26H8J#/screens"
            target="_blank"
            rel="noopener noreferrer"
          >
            the first mockup
          </a>{" "}
          made for mobile planning of event catering. These types of in-between
          sketches help validating a proof of concept, but also tell more than a
          thousand words about what type of interactions and GUI could support a
          specific context of use.
        </p>
        <p>
          Albeit high-fidelity sketching enables and enhances validation with
          real users before moving on with the implementation, I use my
          not-so-careful doodles to elaborate on the design choices that haven't
          been disclosed yet but which the developer still has to make while
          coding, be it consciously or not. Clearer prototypes might still be
          useful for my own thinking when structuring more complex data into an
          UI, like when creating a{" "}
          <a
            href="https://roosa142878.invisionapp.com/console/Aloha-tables-ckere8rpp02oh010re2lfcids"
            target="_blank"
            rel="noopener noreferrer"
          >
            table{" "}
          </a>
          for examining an internal data storage.
        </p>
        <h4>Video prototypes</h4>
        <p>
          What says even more than a picture? A video. An ideation technique
          which considers the user personas and scenarios is constructing video
          prototypes. While the process of constructing them guides the team
          towards a shared and robust design, the final product can also be
          validated with a target group. Video prototyping ties UI into situated
          interaction, which is particularly valuable with mobile and
          multi-modal interfaces. Check out the video prototypes prepared for{" "}
          <a
            href="https://youtu.be/sY-TQH038Ow"
            target="_blank"
            rel="noopener noreferrer"
          >
            AccessMap
          </a>
          , a navigation app optimizing the most accessible routes,{" "}
          <a
            href="https://youtu.be/u9Wl1EfpF7o"
            target="_blank"
            rel="noopener noreferrer"
          >
            Part Planner
          </a>
          , a collaborative party planner application and{" "}
          <a
            href="https://youtu.be/hbIsv9WGnyE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Squatle
          </a>
          , a service for booking sports classes.
        </p>
        <img
            src={require("./images/video_prototypes.jpg")}
            alt="Video prototypes"
            className="Image medium"
          />
      </div>
    );
  }
}
