import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { useGlobalContext } from "../context";

function Navbar() {
  const { amount } = useGlobalContext();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-warning"
        style={{ height: "10vh", borderBottom: "solid 1px #ced4da" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-3" href="#">
            <img
              src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__large_plus.png"
              alt=""
              width="120"
              height="auto"
            />
          </Link>
          {/* <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <form className="d-flex m-auto">
              <input
                className="form-control me-2 rounded-0"
                type="search"
                placeholder="Buscar productos..."
                aria-label="Search"
                id="formSearch"
              />
              <button
                className="btn btn-outline-secondary p-auto rounded-0"
                type="submit"
              >
                <GoSearch />
              </button>
            </form>
          </div> */}
          <ul className="navbar-nav me-3 ">
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link active btn-lg"
                aria-current="page"
              >
                <AiOutlineShoppingCart className="position-relative" />
                <span className="badge bg-primary rounded-pill ms-1">
                  {amount}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
