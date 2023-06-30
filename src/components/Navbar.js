import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "../css/animated.css";
import "../css/Navbar.css";
export default function Navbar({navigate}) {
  return (
    <nav
      style={{ background: "#000", position: "absolute" }}
      className="navbar navbar-expand-lg bg-body-tertiary"
    >
      <div style={{ width: "70%" }} className=" m-auto ">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <a className="navbar-brand" href="#">
              <img
                src="https://aramizdakioyuncu.com/galeri/ana-yapi/armoyu64.png"
                alt="logo"
              />
            </a>
            <div id="search-box" className="border-0 d-flex align-items-center">
              <form
                action="/search"
                id="search-form"
                method="get"
                target="_top"
              >
                <input
                  id="search-text"
                  name="q"
                  placeholder="Bir şey mi lazım ?"
                  type="text"
                />
                <button id="search-button" type="submit">
                  <span>
                    <SearchIcon className="text-secondary" />
                  </span>
                </button>
              </form>
            </div>
            <div className="collapse navbar-collapse " id="navbarScroll">
              <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Button variant="filled">
                      <PeopleAltIcon style={{ color: "white" }}/>
                      <Typography
                        className="text-white"
                        sx={{ m: 1, mb: 0, mt: 0, fontSize: "13px" }}
                      >
                        Giriş Yap
                      </Typography>
                    </Button>{" "}
                  </a>
                  <ul className="dropdown-menu p-2">
                    <li>
                      <Button
                       onClick={()=>{navigate("/loginPage")}}
                        sx={{ background: "rgb(33,33,33) !important" }}
                        className="dropdown-item mb-1 text-white "
                        variant="contained"
                      >

                        Giriş Yap
                      </Button>
                    </li>
                    <li>
                      <Button
                        sx={{
                         
                          color: "rgb(33,33,33) !important",
                        }}
                        className="dropdown-item border border-secondary"
                        variant="outlined"
                        href="#"
                      >
                        Üye Ol
                      </Button>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link " href="#" role="button">
                    <Button variant="filled animated-button ">
                      <Typography
                        className="text-white"
                        sx={{ fontSize: "13px" }}
                      >
                        Etkinlikler
                      </Typography>
                    </Button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row text-white">
          <div className="col text-center">
            <div class="dropdown">
              <a
                style={{ width: "100%", borderRadius: "0px" }}
                class="btn text-white border-bottom dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gruplar
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    E-Spor
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Spor
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Yazılım Geliştirme
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col text-center">
            <div class="dropdown">
              <a
                style={{ width: "100%", borderRadius: "0px" }}
                class="btn text-white border-bottom dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Galeriler
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    #KILLALLZOMBIES
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    American Truck Simulator
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Asetto Corsa
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    CarX Drift
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Asetto Corsa
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col text-center">
            <div class="dropdown">
              <a
                style={{ width: "100%", borderRadius: "0px" }}
                class="btn text-white border-bottom dropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Haberler
              </a>
            </div>
          </div>
          <div className="col text-center">
            <div class="dropdown">
              <a
                style={{ width: "100%", borderRadius: "0px" }}
                class="btn text-white border-bottom dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hakkımızda
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Ekibimiz
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Okul Temsilcileri
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Kurallarımız
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col text-center">
            <div class="dropdown">
              <a
                style={{ width: "100%", borderRadius: "0px" }}
                class="btn text-white border-bottom dropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Çekilişler
              </a>
            </div>
          </div>{" "}
          <div className="col text-center">
            <div class="dropdown">
              <a
                style={{ width: "100%", borderRadius: "0px" }}
                class="btn text-white border-bottom dropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Forum
              </a>
            </div>
          </div>{" "}
          <div className="col text-center">
            <div class="dropdown">
              <a
                style={{ width: "100%", borderRadius: "0px" }}
                class="btn text-white border-bottom dropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mağaza
              </a>
            </div>
          </div>{" "}
          <div className="col text-center">
            <div class="dropdown">
              <a
                style={{ width: "100%", borderRadius: "0px" }}
                class="btn text-white border-bottom dropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
