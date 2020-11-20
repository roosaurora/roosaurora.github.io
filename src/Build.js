import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Analyse extends React.Component {
  render() {
    return (
      <div className="Section-wrapper">
        <p>
          Every product is a prototype. While the design process shouldn't begin
          after putting a lot of effort in the implementation, it certainly
          doesn't end there. The final product of a sprint or a project always
          adds something new and unexpected, where lessons can be learned for
          future reference. Some of the more explorative HCI projects I found
          myself in during the college years were even based on this idea: the
          human-computer interaction can only be validated once fully
          experienced.
        </p>
        <h4>M:AV</h4>
        <p>
          This interactive art installation was born when we wanted to explore
          immersion with movement-based human-computer interaction. Body
          movement was mapped into digital sound and visuals using a Myo Gesture
          Control Armband and the Max software. During an open ended exhibition,
          we observed how people approached and immersed themselves in te
          installation and organically received valuable insights about the
          experience. These insights motivated a whole new round of ideation for
          our future explorations in the movement-based interaction domain.
        </p>
        <iframe
          title="M:AV"
          src="https://www.youtube.com/embed/lAoymyRFVdg"
        ></iframe>
        <h4>Trash can-can</h4>
        <img
          src={require("./images/IoT_hackathon.jpg")}
          alt="Trash can"
          className="Image full right"
        />
        <p>
          During an IoT hackathon in France, our team did a 3-day design sprint
          with the following end result: an MVP for a self sorting trashcan. It
          was powered by Raspberry Pi and based on computer vision, using the
          OpenCV library for Python. During the live demo part of the pitch,
          which included us acting out the use scenarios, it could recognize up
          to 10 objects.
        </p>
        <p>
          Building this MVP really helped us to consider how using computer
          vision and code for self-sorting litter affets the design choices.
          While we could document what type of interaction the physical look and
          feel of the trash can encouraged, we also learned how crucial
          positioning the camera is and that gravity should be used when
          physically sorting trash into the sections corresponding to the
          categories defined in the code. We also learned how the realities of
          computer vision affect the possibilities of object categorisation.
        </p>
        <p>
          So, while a snappy pitch was prepared and the business model for the
          service approved by the jury, implementing this demo turned it into a
          feasible solution and a rewarding experience for our team.
        </p>
        <iframe
          title="Trash can-can"
          src="https://www.youtube.com/embed/cz3cQvwOsWA"
        ></iframe>
        <h4>Mixed feelings</h4>
        <p>
          <img
            src={require("./images/mixed_feelings.png")}
            alt="Mixed feelings"
            className="Image full left"
          />
          Exploring the magic of tangible interaction in mixed reality is hard
          to prototype in a very quick and dirty way. Me and my friend Joel did
          our best when sitting in the not-so-well air-conditioned homework room
          of our student accommodation building in France. Looking at the
          posters on the wall and drinking coke, we decided to create a portal
          to space and the ability to pass a virtual can of coke to a virtual
          astronaut by handing over the physical ones. The portal could be
          "opened" through a smartphone.
        </p>
        <p>
          Among with some other interactions, we implemented this with C# using
          the Unity engine with the Vuforia SDK. We put quite some effort into
          the interactive and 3-dimensional sound design of this reality, which
          you unfortunately can't appreciate in the following video which was
          filmed during an open exhibition, where headphones were used. You can,
          however, witness how the virtual characters respond to the tangible
          interaction of the user by passing through the portal, further seeming
          to bridge the gap between the two realities.
        </p>
        <iframe
          title="Mixed feelings"
          src="https://www.youtube.com/embed/1jA0qqfTutA"
        ></iframe>
        <h4>Web apps</h4>
        <h5>BFAT</h5>
        <p>
          <img
            src={require("./images/bfat.jpg")}
            alt="Bfat"
            className="Image medium right"
          />
          I market myself as a designer whose empathy doesn't end with the end
          user. Because I've done agile full-stack development, I'm familiar
          with the workflow defined by two screens, a keyboard and coffee
          breaks. BFAT3 was a test automation solution me and my team at Nokia
          built from scratch and released on time during a year between 2017 and
          2018. It was implemented with React, Node.js and MongoDB.
        </p>
        <p>
          I learned a great deal about software architecture: the ways in which
          the GUI connects to and is, in fact, defined by the many data
          structures which go beyond callbacks on the server side. On the other
          hand, I finally and fully realized how the GUI creates a user
          experience and how immensely useful a design system (a customized
          bootstrap library) was with the lack of a graphic designer next to me.{" "}
        </p>
        <p>
          I programmed the frontend and backend for a modular table-based UI and
          the interactions with the results of the software. Since then, I've
          come to realize that also other companies benefit from interactive
          tables which structure and modify data from several databases. I'm
          grateful to have digged deep into the topic and after learning about
          usability heuristics would indeed like to continue my work with the
          table design.{" "}
        </p>
        <h5>Hands and omens</h5>
        <p>
          Since people tend to remember the first website they build as a
          passion project, here's my exploration with minimalist and visual web
          design which I did for my sister's band. They have updated the webpage
          since, but hey, I've come a long way too.{" "}
        </p>
        <img src={require("./images/ho.jpg")} alt="Ho" className="Image full" />
        <h4>Mobile development</h4>
        <img
          src={require("./images/cocat schema.png")}
          alt="Cocat schema"
          className="Image full left"
        />
        <img
          src={require("./images/cocat features .png")}
          alt="Cocat features"
          className="Image full right"
        />
        <p>
          The customizable and collaborative catering app already mentioned on
          this web page didn't end with the first mockup. Our team designed and
          implemented the Co.cat web app and finally an Android mobile web
          service with React Native. During the project we learned how to
          integrate design principles into the software development process by
          turning findings from user research into dev-friendly schemas.
        </p>

        <p>
          Regarding the design, this project highlighted that{" "}
          <b> the screen size matters</b> and that the mobile environment
          shouldn't be overlooked as something simple and boring. Redesigning
          the same set of features taught me that{" "}
          <b>
            the scenarios of use may change the same as the UI when switching to
            mobile
          </b>
          . Thanks to reading about the theory of mobile design, I also got some
          useful principles up my sleeve.{" "}
        </p>
        <p>
          User evaluation played a huge role throughout the project, so after
          the initial field study we did for the proof of concept, we collected
          feedback both remotely and in person for four different versions of
          the app. You can read more about this in the next section.{" "}
        </p>
        <img
          src={require("./images/cocat first screens.png")}
          alt="Cocat login"
          className="Image medium"
        />
        <img
          src={require("./images/cocat.png")}
          alt="Cocat features"
          className="Image medium"
        />
        <img
          src={require("./images/cocat settings.png")}
          alt="Cocat features"
          className="Image medium"
        />
      </div>
    );
  }
}
