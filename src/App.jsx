
// import './App.css'

import { Route, Link, Routes} from 'react-router-dom'
import Header from "./components/Header"
import MainNavbar from "./components/MainNavbar"
// import SubNavbar from "./components/SubNavbar"
import All from "./pages/All"
import FullStack from "./pages/FullStack"
import DataScience from "./pages/DataScience"
import CyberSecurity from "./pages/CyberSecurity"
import Career from './pages/Career';
import Footer from './components/Footer'
function App() {

  return (
    <div className='App'>
      <MainNavbar/>
      <Header/>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white shadow-sm ">
        <div className="container px-4 px-lg-5">
        <h4 className=" navbar-toggler">
          Blog Category
        </h4>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContents"
            aria-controls="navbarSupportedContents"
            aria-expanded="false"
            aria-label="Toggle nav-igation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContents">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item px-3 fw-bold">
                <Link className="nav-link " aria-current="page" to="/">
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 fw-bold" to="/full-stack-development">
                Full-Stack Development
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link px-3 fw-bold" to="/data-science">
                Data Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 fw-bold" to="/cyber-security">
                Cyber Security
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 fw-bold" to="/career">
                Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/full-stack-development' element={<FullStack />} />
        <Route path='/data-science' element={<DataScience />} />
        <Route path='/cyber-security' element={<CyberSecurity />} />
        <Route path='/career' element={<Career />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
