import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "The Top 10 Tools Every Full Stack Developer Should Master in 2023",
    image: "./image/fullstack/uiux-s2.jpg",
    link: "https://www.guvi.in/blog/top-full-stack-developer-tools/",
    description: "As a full stack developer, having the right set of tools is crucial for your",
    date: "5 August 2023",
    comments: "No Comments"
  },
  {
    title: "The Ultimate Guide to Real-World Full Stack Development Applications",
    image: "./image/fullstack/fullstack2.jpg",
    link: "https://www.guvi.in/blog/top-must-know-full-stack-development-applications/",
    description: "Full stack development has become increasingly popular in recent years, with companies seeking professionals who",
    date: "5 August 2023",
    comments: "No Comments"
  },
  {
    title: "Best Ways to Learn Full Stack Development in 2023",
    image: "./image/fullstack/fullstack3.png",
    link: "https://www.guvi.in/blog/best-ways-to-learn-full-stack-development/",
    description: "Full stack development is and will be a promising and an in-demand career in the",
    date: "4 August 2023",
    comments: "No Comments"
  },
  {
    title: "How Long Would It Take to Be a Full Stack Developer?",
    image: "./image/fullstack/fullstack1.png",
    description: "Have you ever wondered how much time it would take to become a skilled Full",
    date: "4 August 2023",
    comments: "No Comments"
  },
  {
    title: "Top Full Stack Development Webinars and Workshops",
    image: "./image/fullstack/webinar.png",
    description: "Are you keen to elevate your web development skills and master the art of Full",
    date: "29 July 2023",
    comments: "No Comments"
  },
  {
    title: "The Future & Scope of Full Stack Developers in India",
    image: "./image/fullstack/dm.png",
    description: "Have you ever wondered about the future of full stack developers in India? These talented",
    date: "27 July 2023",
    comments: "No Comments"
  }
];

export default function FullStack() {
  return (
    <div className="container">
      <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
        {cardData.map((card, index) => (
          <div className="col-lg col-md-6" key={index}>
            <div className="card h-100">
              <div>
                <Link className="nav-link" to={card.link}>
                  <img src={card.image} className="card-img-top" alt="..." />
                </Link>
              </div>
              <div className="card-body mt-2">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "21px",
                    lineHeight: "21px",
                    fontWeight: "400",
                    fontFamily: "sans-serif",
                  }}
                >
                  <Link className="nav-link" to={card.link}>
                    {card.title}
                  </Link>
                </h5>
                <p
                  className="card-text text-secondary"
                  style={{ fontSize: "14px" }}
                >
                  {card.description}
                </p>
                <p
                  style={{
                    color: "#007dfe",
                    fontWeight: "bold",
                    fontSize: "12px",
                    lineHeight: "12px",
                  }}
                >
                  <Link
                    className="nav-link read "
                    target="_blank"
                    to={card.link}
                  >
                    READ MORE »
                  </Link>
                </p>
              </div>
              <div className="card-footer" style={{ lineHeight: "15px" }}>
                <small className="text-body-secondary d-inline-flex w-100 text-align-left">
                  {card.date}{" "}
                  <ul>
                    <li>{card.comments}</li>
                  </ul>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}