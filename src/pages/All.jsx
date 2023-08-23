import React from 'react'
import { Link } from "react-router-dom";


const cardData = [
  {
    title: "Top 10 Best Automation Testing Tools in 2023",
    image: "./image/all/automation.jpg",
    link: "https://www.guvi.in/blog/best-automation-testing-tools/",
    description: "Automation testing tools have really become a great and important factor in building efficient web",
    date: "17 August 2023",
    comments: "No Comments"
  },
  {
    title: "Top Skills Required to Become a Digital Marketer",
    image: "./image/all/digital.png",
    link: "https://www.guvi.in/blog/skills-required-to-become-a-digital-marketer/",
    description: "Digital marketing is one of the most dynamic industries that has transformed how businesses connect",
    date: "16 August 2023",
    comments: "No Comments"
  },
  {
    title: "Career Opportunities in Digital Marketing | Digital Marketing Career",
    image: "./image/all/digit.png",
    link: "https://www.guvi.in/blog/career-opportunities-in-digital-marketing/",
    description: "As we move forward in today’s digital age, the need for businesses to engage with",
    date: "16 August 2023",
    comments: "No Comments"
  },
  {
    title: "UI/UX Project Showcase: UX-perience Elevated",
    image: "./image/all/uiux-s1.jpg",
    link: "https://www.guvi.in/blog/ui-ux-project-showcase/",
    description: "Are you a professional UI/UX designer who finds it hard to attract your clients or",
    date: "14 August 2023",
    comments: "No Comments"
  },
  {
    title: "10 Best Data Science Online Courses for Beginners | 2023",
    image: "./image/all/data1.png",
    link: "https://www.guvi.in/blog/best-data-science-courses-for-beginners/",
    description: "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
    date: "14 August 2023",
    comments: "No Comments"
  },
  {
    title: "How to Become a UI/UX Designer: 10 Steps to Master the Craft",
    image: "./image/all/ui.png",
    link: "https://www.guvi.in/blog/how-to-become-a-ui-ux-designer/",
    description: "Have you ever wondered what it takes to create captivating designs that leave users delighted",
    date: "11 August 2023",
    comments: "No Comments"
  }
];

export default function All() {
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
