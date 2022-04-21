import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <ul className="socials">
      <li className="third-list">
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/ajibola-yekinni-524056149/"
          target="_blank"
        >
          Linkedin
        </a>
      </li>

      <li className="third-list">
        <a
          rel="noreferrer"
          href="https://github.com/webBlaster"
          target="_blank"
        >
          Github
        </a>
      </li>

      <li className="third-list">
        <a href="mailto:yekinnijibola@gmail.com">Email</a>
      </li>
    </ul>
  );
};

export default Contact;
