import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import facebook from "../img/social/facebook-white.svg";
import instagram from "../img/social/instagram-white.svg";
import twitter from "../img/social/twitter-white.svg";
import app from "../img/store/app-store.svg";
import play from "../img/store/play-store.svg";
import windows from "../img/store/windows-store.svg";

const Series = () => {
  const [backendData, setBackendData] = useState({
    total: 0,
    entries: [],
  });

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data recibida:", data);
        const primeras20 = data.entries.slice(50, 70);
        setBackendData({ total: data.total, entries: primeras20 });
      })
      .catch((error) => {
        console.error("Error al obtener la data:", error);
      });
  }, []);

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
            Popular Series
          </Link>
        </div>
      </nav>

      <div className="container mt-3">
        <div className="row">
          {backendData.entries.map((entry, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card">
                <img
                  src={entry.images["Poster Art"].url}
                  alt={entry.title}
                  className="card-img-top"
                  style={{ maxHeight: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{entry.title}</h5>
                </div>
              </div>
            </div>
          ))}
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

export default Series;
