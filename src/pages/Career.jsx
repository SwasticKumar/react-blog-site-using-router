import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Top Skills Required to Become a Digital Marketer",
    image:
      "./image/datascience/ux.png",
    link: "https://www.guvi.in/blog/career-opportunities-in-digital-marketing/",
    description:
      "Digital marketing is one of the most dynamic industries that has transformed how businesses connect",
    date: "16 August 2023",
    comments: "No Comments",
  },
  {
    title:
      "Career Opportunities in Digital Marketing | Digital Marketing Career",
    image:"./image/fullstack/dm.png",
    link: "https://www.guvi.in/blog/career-opportunities-in-digital-marketing/",
    description:
      "As we move forward in today’s digital age, the need for businesses to engage with",
    date: "16 August 2023",
    comments: "No Comments",
  },
  {
    title: "Top 12 Career Opportunities for UI/UX Design",
    image:
      "./image/fullstack/fullstack1.png",
    link: "https://www.guvi.in/blog/career-options-in-india/",
    description:
      "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
    date: "14 August 2023",
    comments: "No Comments",
  },
  {
    title: "How to Become a UI/UX Designer: 10 Steps to Master the Craft",
    image: "./image/all/ui.png",
    link: "https://www.guvi.in/blog/top-career-opportunities-for-ui-ux-design/",
    description:
      "Are you passionate about offering intuitive and user-friendly digital experiences? Do you have an eye",
    date: "29 July 2023",
    comments: "No Comments",
  },
  {
    title: "Game Development Career 2023: The Ultimate Beginners Guide",
    image:
      "./image/all/uiux-s1.jpg",
    link: "https://www.guvi.in/blog/game-development-career-guide/",
    description:
      "The game development industry has undergone a remarkable evolution over the years, witnessing exhilarating changes",
    date: "28 July 2023",
    comments: "No Comments",
  },
  {
    title: "The Future & Scope of Full Stack Developers in India",
    image:
      "./image/fullstack/fullstack3.png",
    link: "https://www.guvi.in/blog/the-future-scope-of-full-stack-developers-in-india/",
    description:
      "Have you ever wondered about the future of full stack developers in India? These talented",
    date: "27 July 2023",
    comments: "No Comments",
  },
];

export default function Career() {
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
