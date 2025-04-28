import { SITE_PARAMS } from "@/constants";
import Image from "next/image";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer py-4">
      {/** ---------------------- Summary ---------------------- */}
      <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center
        justify-content-lg-center align-items-lg-start gap-4">
        <div className="d-flex flex-column w-100 mb-3 mb-lg-0">
          <Image
            src="/CYatraLogNoSlogan.png"
            alt="Logo"
            width={100}
            height={100}
            className="float-left mr-4 mb-4 rounded"
          ></Image>
          <p className="">
            CourseYatra.com is a comprehensive platform designed to help
            students and professionals discover the best online courses offered
            by accredited Indian universities. We provide accurate, up-to-date
            information to support informed decisions and enable a successful
            online learning journey across India.
          </p>
        </div>
        {/** ---------------------- Quick Links ---------------------- */}
        <div className="d-flex flex-column w-100 justify-content-start mb-3 mb-lg-0 align-items-lg-center">
          <h5>Quick Links</h5>
          <div className="d-flex flex-column align-items-lg-center gap-2">
            <a className="" href="/about">
              About Us
            </a>
            <a className="" href="/contact">
              Contact Us
            </a>
            <a className="" href="/courses">
              Courses
            </a>
            <a className="" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="" href="/terms-of-service">
              Terms of Service
            </a>
          </div>
        </div>
        {/** ---------------------- Social Media Links ---------------------- */}
        <div className="d-flex flex-column w-100 justify-content-start mb-3 mb-lg-0 align-items-lg-center">
          <h5>Follow Us</h5>
          <div className="d-flex flex-column align-items-lg-center gap-2">
          <a
            className="fs-"
            href="https://www.facebook.com/courseyatra"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className=""
            href="https://www.instagram.com/courseyatra"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className=""
            href="https://www.linkedin.com/company/courseyatra"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          </div>
        </div>

        {/** ---------------------- Contact Info ---------------------- */}
        <div className="d-flex flex-column w-100 justify-content-start mb-3 mb-lg-0">
          <h5>Contact Info</h5>
          <div className="">
            <p className="fw-bold">Phone:</p>
            <p>+91-99101 16004</p>
            <p className="fw-bold">Email:</p>
            <p>contact@courseyatra.com</p>
          </div>
        </div>
      </div>

      {/** ---------------------- Copyright widget ---------------------- */}
      <div className="container">
        <hr />
        <div className="text-center">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a href="https://localhost:3000">{SITE_PARAMS.domain}</a>. All rights
          reserved.
        </div>
        {/* <div className="text-right">
            Powered by{" "}
            <a href="https://niyava.com" target="_blank" className="">
              Niyava Technologies
            </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
