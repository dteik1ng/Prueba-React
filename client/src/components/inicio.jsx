import { Link } from "react-router-dom";
import Logo from "../img/claqueta.png";

import facebook from "../img/social/facebook-white.svg";
import instagram from "../img/social/instagram-white.svg";
import twitter from "../img/social/twitter-white.svg";
import app from "../img/store/app-store.svg";
import play from "../img/store/play-store.svg";
import windows from "../img/store/windows-store.svg";

const inicio = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <h1 className="navbar-brand mb-0 h1">DEMO Streaming</h1>

          <div className="d-flex ml-auto align-items-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="/login">
                  Log In
                </a>
              </li>
            </ul>
            <button className="btn btn-dark m-2">Start your free trial</button>
          </div>
        </div>
      </nav>
      <nav className="navbar bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand mb-0 text-white mr-10">
            Popular Titles
          </Link>
        </div>
      </nav>

      <div className="cuadro">
        <h1 className="tituloimg">Series</h1>
        <Link to="/series">
          <img src={Logo} className="cuadroimg" alt="..." />
        </Link>
        <div className="cuadrobody">
          <h5 className="cuadrotitle">Popular Series</h5>
        </div>
      </div>

      <div className="cuadro">
        <h1 className="tituloimg">Movies</h1>
        <Link to="/peliculas">
          <img src={Logo} className="cuadroimg" alt="..." />
        </Link>
        <div className="cuadrobody">
          <h5 className="cuadrotitle">Popular Movies</h5>
        </div>
      </div>

      <footer className="d-flex flex-wrap justify-content-between align-items-center  border-top bg-black pb-3">
        <div className="m-10">
          <ul className="nav justify-content-end ">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-white">
                {" "}
                Home |
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-white">
                {" "}
                Terms and condition |
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-white">
                {" "}
                Privacy Policy |
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-white">
                {" "}
                Collection Statement |
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-white">
                {" "}
                Help |
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-white">
                {" "}
                Manage Account
              </a>
            </li>
          </ul>
          <p className="mb-0 text-white p-2">
            Copyright @ 2016 DEMO Streaming. All. Rights Reserved.
          </p>
          <img src={facebook} className="p-2" alt="" />
          <img src={twitter} className="p-3" alt="" />
          <img src={instagram} className="p-2" alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <img src={app} className="m-2" alt="" />
          <img src={play} className=" m-2" alt="" />
          <img src={windows} className=" m-2" alt="" />
        </div>
      </footer>
    </>
  );
};

export default inicio;