import React from "react";
import "./NavBar.css";
import { MdComputer } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { GiLargeDress } from "react-icons/gi";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar mb-5 mx-0">
      <div className="row">
        <Link to="/" className="col-2 my-4">
          <img className="logo-img" src="/banner.jpg" alt="banner mk rock" />
        </Link>
        <div className="col-9 mb-3 d-flex justify-content-center">
          <ul className="categories">
            <Link to="/categoria/mensclothing" className="linkcategory">
              <li className="category">
                <p>Men's clothing</p>
                <div className="img-category">
                  <GiClothes size={40} />
                </div>
              </li>
            </Link>
            <Link to="/categoria/womensclothing" className="linkcategory">
              <li className="category">
                <p>Women's clothing</p>
                <div className="img-category">
                  <GiLargeDress size={40} />
                </div>
              </li>
            </Link>
            <Link to="/categoria/jewelery" className="linkcategory">
              <li className="category">
                <p>Jewelery</p>
                <div className="img-category">
                  <IoDiamondOutline size={40} />
                </div>
              </li>
            </Link>
            <Link to="/categoria/electronics" className="linkcategory">
              <li className="category">
                <p>Electronics</p>
                <div className="img-category">
                  <MdComputer size={40} />
                </div>
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-1 d-flex justify-content-center">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
