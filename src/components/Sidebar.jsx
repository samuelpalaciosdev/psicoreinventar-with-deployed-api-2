import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { FaUser, FaCrown } from "react-icons/fa";

const Sidebar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  // If user is not signed in, redirect to login
  useEffect(() => {
    if (store.currentUser === null) navigate("/login");
  }, [store.currentUser]);

  return (
    <LazyLoadComponent>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
          style={{ color: "#8dc2fe" }}
        >
          <span className="fs-5 d-none d-sm-inline">Dashboard</span>
        </a>
        <ul
          className="nav nav-pills flex-column mb-5 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <Link to="/profile" className="nav-link align-middle px-0">
              <FaUser size="1rem" style={{ color: "#8dc2fe" }} />
              <span className="ms-2 d-none d-sm-inline text-white">Mi perfil</span>
            </Link>
          </li>
          <li>
            <Link to="/admin" className="nav-link px-0">
              <FaCrown size="1rem" style={{ color: "#8dc2fe" }} />
              <span className="ms-2 d-none d-sm-inline text-white">Admin</span>{" "}
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown pb-4">
          <a
            href="/#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://placekitten.com/200/200"
              alt="Profile pic"
              width={30}
              height={30}
              className="rounded-circle"
            />
            <span className="d-none d-sm-inline mx-1">{store.currentUser?.user?.name}</span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item" onClick={actions.handleLogout}>
                Salir
              </button>
            </li>
          </ul>
        </div>
      </div>
    </LazyLoadComponent>
  );
};

export default Sidebar;
