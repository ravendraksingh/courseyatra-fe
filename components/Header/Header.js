import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "./header.css";
import ApplyNowBtn from "../CTA/ApplyNowBtn";

const Header = () => {
  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  const emailRef = useRef(null);
  const [show, setShow] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(
      nameRef.current.value,
      emailRef.current.value,
      mobileRef.current.value
    );
    setShow(false);
  };

  return (
    <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-light">
      <div className="">
        <a href="/">
          <Image
            src="/CYatraLogNoSlogan.png"
            width={120}
            height={120}
            alt="Logo"
            className="rounded"
          />
        </a>
      </div>
      <div className="d-none d-md-flex flex-row justify-content-center align-items-center gap-4">
        {NAV_LINKS.map((link) => (
          <a href={link.href} key={link.key} className="nav-link cy-nav-link">
            {link.label}
          </a>
        ))}
      </div>
      <div>
        {/* <ApplyNowBtn /> */}

        {/** Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => setShow(true)}
        >
          Apply Now
        </button>
        {/** Modal */}

        {show && 
          <form className="needs-validation" onSubmit={handleFormSubmit}>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Enter your details
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter your full name"
                        required
                        ref={nameRef}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Mobile No.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter your mobile no."
                        required
                        ref={mobileRef}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        required
                        ref={emailRef}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        }

        <>
          <Image
            src="/menu.svg"
            width={30}
            height={30}
            alt="Menu"
            className="d-md-none ms-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          />
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title"
                id="offcanvasWithBothOptionsLabel"
              >
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column">
              {NAV_LINKS.map((item) => (
                <a href={item.href} key={item.key}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Header;
