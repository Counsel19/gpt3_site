import React from "react";
import "./header.css";
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className="gpt3__header section__padding " id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something Amazing with GPT&#8209;3 OpenAI
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam
          totam eveniet vero possimus, id eaque harum voluptates dolorem dolore!
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
