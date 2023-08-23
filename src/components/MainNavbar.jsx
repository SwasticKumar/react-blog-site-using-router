import React from 'react';

const MainNavbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light shadow-sm" >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            <img src="/image/swasticblog.png" alt="icon" style={{width:"150px"}} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle nav-igation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-3 fw-bold">
                <a className="nav-link" aria-current="page" href="https://www.guvi.in/courses?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=courses" target='_blank'>
                  Course
                </a>
              </li>
              <li className="nav-item dropdown px-3 fw-bold ">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Live Classes
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="https://www.guvi.in/full-stack-development-course-with-javascript-ZenClass?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=fsd" target='_blank'>
                      Full-Stack Development Program (FSD)
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.guvi.in/IIT-Certified-Programming-Professional-and-Master-Data-Science?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=data_science" target='_blank'>
                      IIT-M Advanced Programming & Data Science Program
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.guvi.in/automation-testing-with-selenium?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=automation_testing" target='_blank'>
                      Automation & Testing Program
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown px-3 fw-bold">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Practice
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="https://www.guvi.in/code-kata?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=code_kata" target='_blank'>
                      Codekata
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  
                  <li>
                    <a className="dropdown-item" href="https://www.guvi.in/webkata?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=webkata" target='_blank'>
                      Webkata
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.guvi.in/ide?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=ide" target='_blank'>
                      IDE - Online Compiler
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown px-3 fw-bold">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="https://www.guvi.in/rewards?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=rewards" target='_blank'>
                      Rewards
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.guvi.in/referral?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=referral" target='_blank'>
                      Referral
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://forum.guvi.in/?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=forum&_gl=1*1w79m35*_gcl_au*ODQ4MzgwMTYxLjE2OTIxMDY2Njk." target='_blank'>
                      Forum Support
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Blogs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown px-3 fw-bold">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Our Product
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="https://www.hackerkid.org/?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=hackerkid" target='_blank'>
                      Hackerkid
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.guvi.in/mlp/GUVI-for-corporates?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=guvi_for_corp" target='_blank'>
                    Swastic for Corporates
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
      
         
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
