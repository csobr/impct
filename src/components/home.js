import React, { Component } from "react";
import "../styles/pages/_home.scss";
import sample from "../img/hero.mp4";
import earth from "../img/earth.gif";
import storyImg from "../img/cells2.gif";
import storyImg1 from "../img/cells1.gif";

export default class Home extends Component {
  render() {
    return (
      <div className="home--wrapper">
        <div className="first--view">
          <div className="hero">
            <h1></h1>
            <video className="videoTag" autoPlay loop muted>
              <source src={sample} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="second--view  second--view-one">
          <h2>“Look for systems, not heroes.”</h2>
          <p className="qoute">
            ― Hans Rosling, Factfulness: Ten Reasons We're Wrong About the
            World—and Why Things Are Better Than You Think
          </p>
        </div>
        <div className="second--view second--view-two ">
          <img src={earth} alt="earth" />
          <div className="mission">
            <h3>Mission</h3>

            <p className="mission--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="third--view third--view-three ">
          <div className="story--month">
            <p className="story--month-feature">Company of the month</p>
            <h4>This month </h4>
            <p className="story--of__month">CELLINK</p>
            <p className="story__company__name">
              The first bioink company in the world
            </p>
            <p className="story--company">
              CELLINK designs and develops bioprinting technologies that enable
              researchers to 3D print organs and tissue for applications that
              span industries, from pharmaceutical to cosmetic. Our
              patent-pending bioink is a biomaterial innovation that allows
              human cells to grow and thrive as they would in their natural
              environment. Researchers leverage our technologies to print liver,
              cartilage, skin tissues and more. Join us on our journey to change
              the future of medicine.
            </p>
          </div>
          <div className="story--images">
            <img src={storyImg} alt="cell" />
            <img src={storyImg1} alt="cell" />
            <img src={storyImg} alt="cell" />
            <img src={storyImg1} alt="cell" />
          </div>
        </div>
        <div className="fourth--view fourth--view-four">
          <h5>Select field</h5>
          <div className="company--selection">
            <div className="select--field">
              <button type="button" className="select--item select--item-green">
                Healthcare
              </button>
              <button type="button" className="select--item select--item-pink">
                Security
              </button>
              <button type="button" className="select--item select--item-green">
                Enviroment
              </button>
              <button type="button" className="select--item select--item-pink">
                {" "}
                Education
              </button>
              <button type="button" className="select--item select--item-green">
                Economics
              </button>
              <button type="button" className="select--item select--item-pink">
                Law
              </button>
              <button type="button" className="select--item select--item-green">
                Politics
              </button>
              <button type="button" className="select--item select--item-pink">
                Social impact
              </button>
              <button type="button" className="select--item select--item-green">
                Communications
              </button>
            </div>
            <div className="field--info">
              <h6>But first!</h6>
              <p>
                Let’s play a game called: Mission failed!{"\n"}
                You will be presented with a couple famous mission statment your task is to guess what
                company said what.
              </p>
              <button type = "sumbit" id = "start">Start</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
