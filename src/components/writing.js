import React from "react";
import "../styles/writing.css";

const articles = [
  {
    title: "Product-driven engineering",
    description:
      "Thoughts on translating complex product requirements into clear, maintainable software.",
  },
  {
    title: "Building resilient web experiences",
    description:
      "Writing about architecture, performance, and the practical tradeoffs I make on real projects.",
  },
  {
    title: "Technical clarity through writing",
    description:
      "How I document decisions, share learnings, and make engineering ideas easier to follow.",
  },
];

const Writing = () => {
  return (
    <section className="writing">
      <div className="writing-copy">
        <h1>Writing</h1>
        <p>
          I’ve started sharing my technical thinking on Substack. Here are a few
          themes I write about: product engineering, scalable web systems, and
          technical communication for real-world teams.
        </p>
      </div>

      <div className="writing-cards">
        {articles.map((article) => (
          <article className="writing-card" key={article.title}>
            <h5>{article.title}</h5>
            <p>{article.description}</p>
          </article>
        ))}
      </div>

      <a
        className="writing-cta"
        href="https://substack.com"
        target="_blank"
        rel="noreferrer"
      >
        Read on Substack
      </a>
    </section>
  );
};

export default Writing;
