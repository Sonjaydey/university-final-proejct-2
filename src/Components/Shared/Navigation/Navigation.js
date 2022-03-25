import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./../Shared.css";
import icon from "./../../../img/mechanic.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../features/userSlice";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { AiFillSetting } from "react-icons/ai";
import { IoMdHelpCircle, IoMdLogOut } from "react-icons/io";
import { Avatar } from "@material-ui/core";
import swal from "sweetalert";
import auth from "../../../firebase";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "react-use-cart";
import CartDrawer from './../CartDrawer';

const Navigation = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false)
  const close = () => setOpen(!open)

  const { totalItems } = useCart();

  const logoutUser = () => {
    dispatch(logout());
    auth.signOut();
    swal({
      title: "Successfully Logout!",
      icon: "success",
    });
  };

  return (
    <>
    <CartDrawer open={open} close={close}/>
      <div className="nav-section text-white sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler navbar-light bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <Link to="/home" className="py-2">
                  {/* <img src={icon} alt="icon" className="img-fluid" /> */}
                  <img src="https://i.ibb.co/C8TH0k9/logo.png" className="img-fluid" />
                </Link>
                <ul className="navbar-nav ml-auto mb-lg-0 nav justify-content-end">
                  <li className="nav-item  pt-1">
                    <Link to="/home" className="nav-link mx-3 h6 nav-header">
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li className="nav-item  pt-1">
                    <a href="#about-us" className="nav-link mx-3 h6 nav-header">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item dropdown  pt-1">
                    <a className="nav-link mx-3 h6 nav-header" href="#services">
                      Explore
                    </a>
                  </li>
                  <li className="nav-item  pt-1">
                    <Link
                      to="/dashboard"
                      className="nav-link mx-3 h6 nav-header"
                    >
                      {" "}
                      Dashboard{" "}
                    </Link>
                  </li>
                  {/* <li className="nav-item  pt-1">
                    <a href="#contact" className="nav-link mx-3 h6 nav-header">
                      Contact
                    </a>
                  </li> */}
                  <li className="nav-item  pt-1 m-1">
                    <DropdownButton title="Profile">
                      <Dropdown.ItemText>
                        <Avatar
                          src={user?.photoUrl}
                          className="header-avatar mx-auto"
                        >
                          {user?.email[0]}
                        </Avatar>
                      </Dropdown.ItemText>
                      <Dropdown.ItemText className="text-center my-2">
                        {user?.displayName}
                      </Dropdown.ItemText>
                      <Dropdown.Item as="button">
                        <AiFillSetting /> Setting & Privacy
                      </Dropdown.Item>
                      <Dropdown.Item as="button">
                        {" "}
                        <IoMdHelpCircle /> Help & Support
                      </Dropdown.Item>
                      <Dropdown.Item as="button">
                        <IoMdLogOut />
                        {user?.displayName ? (
                          <span className="mx-2" onClick={logoutUser}>
                            Log Out
                          </span>
                        ) : (
                          <Link to="/login" className="mx-2">
                            Login
                          </Link>
                        )}
                      </Dropdown.Item>
                    </DropdownButton>
                  </li>
                  <li>
                    <button 
                    onClick={() => setOpen(!open)}
                      type="button"
                      className="btn btn-primary position-relative"
                    >
                      
                      <FiShoppingCart className="m-2" />
                      
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalItems}
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
