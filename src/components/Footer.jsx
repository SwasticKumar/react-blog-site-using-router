import React from "react";

function Footer() {
  return (
    <footer className="py-5 mt-5 bg-secondary">
      <div className="container text-center">
        <p className="m-0 text-center text-white">
          Copyright ©{" "}
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: " #32CD32",
              fontWeight: "bold",
            }}
          >
           <img className="text-center" src="/image/W-logo1.png" alt="logo" style={{width:"100px"}}/>
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
